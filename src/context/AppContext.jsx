import { createContext, useContext, useCallback } from 'react'
import { useLocalStorage } from '../hooks/useLocalStorage'

const AppContext = createContext(null)

function getDefaultStartDate() {
  return '2026-07-20'
}

function computeCurrentWeek(startDate) {
  if (!startDate) return 1

  const today = new Date()
  const start = new Date(startDate)

  // Set both to midnight to avoid time-of-day issues
  today.setHours(0, 0, 0, 0)
  start.setHours(0, 0, 0, 0)

  const daysDiff = Math.floor((today - start) / (1000 * 60 * 60 * 24))

  // If before start date, show week 1
  if (daysDiff < 0) return 1

  // Week 1 = days 0-6, Week 2 = days 7-13, etc.
  const week = Math.floor(daysDiff / 7) + 1

  return Math.min(week, 21)
}

function computeCurrentPhase(week) {
  if (week >= 1 && week <= 6) return 'Phase 1 — Strength Foundation + Maintain Running'
  if (week >= 7 && week <= 11) return 'Phase 2 — HM Build + Hyrox Integration'
  if (week >= 12 && week <= 15) return 'Phase 3 — Sharpen + Taper for Auckland HM'
  if (week >= 16 && week <= 20) return 'Phase 4 — Hyrox-Specific Peak Block'
  if (week === 21) return 'Phase 5 — Taper + Race (Hyrox Melbourne)'
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

  // Clears ONLY gym logs — running, checkpoints and metrics are untouched
  const resetGymLogs = useCallback(() => {
    setGymLogs({})
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
      resetGymLogs,
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
