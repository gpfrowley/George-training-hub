import { createContext, useContext, useCallback } from 'react'
import { useLocalStorage } from '../hooks/useLocalStorage'

const AppContext = createContext(null)

function getDefaultStartDate() {
  return '2026-05-04'
}

function computeCurrentWeek(startDate) {
  if (!startDate) return 1
  const start = new Date(startDate)
  const today = new Date()
  // Normalize to midnight so time-of-day doesn't affect the day count
  start.setHours(0, 0, 0, 0)
  today.setHours(0, 0, 0, 0)
  const diffMs = today - start
  // Before the plan starts → always week 1
  if (diffMs < 0) return 1
  // floor so that days 0–6 = week 1, days 7–13 = week 2, etc.
  const week = Math.floor(diffMs / (7 * 24 * 60 * 60 * 1000)) + 1
  return Math.min(Math.max(week, 1), 32)
}

function computeCurrentPhase(week) {
  if (week >= 1 && week <= 8) return 'Phase 1 — Base Building'
  if (week >= 9 && week <= 20) return 'Phase 2 — Marathon Build'
  if (week >= 21 && week <= 26) return 'Taper & Race'
  if (week >= 27 && week <= 33) return 'Recovery & Hyrox Prep'
  return 'Unknown'
}

export function AppProvider({ children }) {
  const [startDate, setStartDate] = useLocalStorage('gth_startDate', getDefaultStartDate())
  const [runningLogs, setRunningLogs] = useLocalStorage('gth_runningLogs', {})
  const [gymLogs, setGymLogs] = useLocalStorage('gth_gymLogs', {})
  const [checkpoints, setCheckpoints] = useLocalStorage('gth_checkpoints', {})
  const [metrics, setMetrics] = useLocalStorage('gth_metrics', [])

  const currentWeek = computeCurrentWeek(startDate)
  const currentPhase = computeCurrentPhase(currentWeek)

  const setRunningLog = useCallback((weekNum, sessionId, data) => {
    const key = `${weekNum}-${sessionId}`
    setRunningLogs(prev => ({
      ...prev,
      [key]: data,
    }))
  }, [setRunningLogs])

  // Clears ONLY running logs — gym, checkpoints and metrics are untouched
  const resetRunningLogs = useCallback(() => {
    setRunningLogs({})
  }, [setRunningLogs])

  const setGymLog = useCallback((weekNum, phase, session, data) => {
    const key = `${weekNum}-${phase}-${session}`
    setGymLogs(prev => ({
      ...prev,
      [key]: data,
    }))
  }, [setGymLogs])

  const setCheckpoint = useCallback((id, data) => {
    setCheckpoints(prev => ({
      ...prev,
      [id]: data,
    }))
  }, [setCheckpoints])

  const addMetric = useCallback((entry) => {
    setMetrics(prev => {
      const exists = prev.findIndex(m => m.week === entry.week)
      if (exists >= 0) {
        const updated = [...prev]
        updated[exists] = entry
        return updated
      }
      return [...prev, entry].sort((a, b) => a.week - b.week)
    })
  }, [setMetrics])

  const updateMetric = useCallback((week, data) => {
    setMetrics(prev => {
      const idx = prev.findIndex(m => m.week === week)
      if (idx >= 0) {
        const updated = [...prev]
        updated[idx] = { ...updated[idx], ...data }
        return updated
      }
      return prev
    })
  }, [setMetrics])

  return (
    <AppContext.Provider value={{
      startDate,
      setStartDate,
      currentWeek,
      currentPhase,
      runningLogs,
      setRunningLog,
      resetRunningLogs,
      gymLogs,
      setGymLog,
      checkpoints,
      setCheckpoint,
      metrics,
      addMetric,
      updateMetric,
    }}>
      {children}
    </AppContext.Provider>
  )
}

export function useApp() {
  const ctx = useContext(AppContext)
  if (!ctx) throw new Error('useApp must be used within AppProvider')
  return ctx
}
