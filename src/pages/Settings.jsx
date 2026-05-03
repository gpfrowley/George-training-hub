import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useApp } from '../context/AppContext'

export default function Settings() {
  const navigate = useNavigate()
  const { startDate, setStartDate, currentWeek, resetRunningLogs } = useApp()
  const [dateInput, setDateInput] = useState(startDate)
  const [saved, setSaved] = useState(false)
  const [importError, setImportError] = useState('')
  const [confirmReset, setConfirmReset] = useState(false)
  const [resetDone, setResetDone] = useState(false)

  const handleResetRunning = () => {
    resetRunningLogs()
    setConfirmReset(false)
    setResetDone(true)
    setTimeout(() => setResetDone(false), 3000)
  }

  const handleSaveDate = () => {
    setStartDate(dateInput)
    setSaved(true)
    setTimeout(() => setSaved(false), 2000)
  }

  const handleExport = () => {
    const data = {}
    for (let i = 0; i < localStorage.length; i++) {
      const key = localStorage.key(i)
      if (key && key.startsWith('gth_')) {
        try {
          data[key] = JSON.parse(localStorage.getItem(key))
        } catch {
          data[key] = localStorage.getItem(key)
        }
      }
    }
    const blob = new Blob([JSON.stringify(data, null, 2)], { type: 'application/json' })
    const url = URL.createObjectURL(blob)
    const a = document.createElement('a')
    a.href = url
    a.download = `georges-training-hub-export-${new Date().toISOString().split('T')[0]}.json`
    a.click()
    URL.revokeObjectURL(url)
  }

  const handleImport = (e) => {
    setImportError('')
    const file = e.target.files[0]
    if (!file) return
    const reader = new FileReader()
    reader.onload = (event) => {
      try {
        const data = JSON.parse(event.target.result)
        if (typeof data !== 'object') throw new Error('Invalid format')
        Object.entries(data).forEach(([key, value]) => {
          if (key.startsWith('gth_')) {
            localStorage.setItem(key, JSON.stringify(value))
          }
        })
        // Reload page to pick up imported data
        window.location.reload()
      } catch {
        setImportError('Failed to import — invalid JSON file.')
      }
    }
    reader.readAsText(file)
  }

  return (
    <div className="max-w-lg mx-auto px-4 py-4 pb-20">
      {/* Header with back button */}
      <div className="flex items-center gap-3 mb-6">
        <button
          onClick={() => navigate(-1)}
          className="p-2 rounded-lg bg-white border border-gray-200 text-gray-500 hover:text-gray-700"
          aria-label="Go back"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
          </svg>
        </button>
        <h1 className="text-xl font-bold text-gray-900">Settings</h1>
      </div>

      {/* Start date */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-4 mb-4">
        <h2 className="text-sm font-semibold text-gray-700 mb-1">Training Start Date</h2>
        <p className="text-xs text-gray-400 mb-3">The date your 33-week plan started (default: 4 May 2026). This determines the current week.</p>
        <input
          type="date"
          value={dateInput}
          onChange={e => setDateInput(e.target.value)}
          className="w-full border border-gray-200 rounded-lg px-3 py-2 text-sm mb-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <div className="flex items-center gap-3">
          <button
            onClick={handleSaveDate}
            className="bg-blue-600 text-white rounded-lg px-4 py-2 text-sm font-semibold hover:bg-blue-700 transition-colors"
          >
            Save Date
          </button>
          {saved && (
            <span className="text-sm text-green-600 font-medium">Saved!</span>
          )}
        </div>
        <div className="mt-3 text-sm text-gray-500">
          Currently: <span className="font-semibold text-gray-800">Week {currentWeek} of 33</span>
        </div>
      </div>

      {/* Export */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-4 mb-4">
        <h2 className="text-sm font-semibold text-gray-700 mb-1">Export Data</h2>
        <p className="text-xs text-gray-400 mb-3">Download all your training logs as a JSON file for backup.</p>
        <button
          onClick={handleExport}
          className="w-full border border-gray-200 text-gray-700 rounded-lg px-4 py-2 text-sm font-semibold hover:bg-gray-50 transition-colors"
        >
          Export Data as JSON
        </button>
      </div>

      {/* Import */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-4 mb-4">
        <h2 className="text-sm font-semibold text-gray-700 mb-1">Import Data</h2>
        <p className="text-xs text-gray-400 mb-3">Restore from a previously exported JSON file. This will overwrite current data.</p>
        <label className="block w-full border border-dashed border-gray-300 rounded-lg px-4 py-3 text-center cursor-pointer hover:border-blue-400 transition-colors">
          <span className="text-sm text-gray-500">Choose JSON file...</span>
          <input
            type="file"
            accept=".json"
            onChange={handleImport}
            className="hidden"
          />
        </label>
        {importError && (
          <p className="text-sm text-red-600 mt-2">{importError}</p>
        )}
      </div>

      {/* Danger zone */}
      <div className="bg-white rounded-xl shadow-sm border border-red-100 p-4 mb-4">
        <h2 className="text-sm font-semibold text-red-700 mb-1">Danger Zone</h2>
        <p className="text-xs text-gray-400 mb-3">
          Reset all running session logs back to pending. Gym logs, checkpoints, and body metrics are not affected.
        </p>

        {!confirmReset && !resetDone && (
          <button
            onClick={() => setConfirmReset(true)}
            className="w-full border border-red-300 text-red-600 rounded-lg px-4 py-2 text-sm font-semibold hover:bg-red-50 transition-colors"
          >
            Reset All Running Data
          </button>
        )}

        {confirmReset && (
          <div className="bg-red-50 border border-red-200 rounded-lg p-3">
            <p className="text-sm font-semibold text-red-800 mb-3">
              This will permanently clear all logged running sessions. Are you sure?
            </p>
            <div className="flex gap-2">
              <button
                onClick={handleResetRunning}
                className="flex-1 bg-red-600 text-white rounded-lg px-4 py-2 text-sm font-semibold hover:bg-red-700 transition-colors"
              >
                Yes, reset running data
              </button>
              <button
                onClick={() => setConfirmReset(false)}
                className="flex-1 border border-gray-200 text-gray-600 rounded-lg px-4 py-2 text-sm font-semibold hover:bg-gray-50 transition-colors"
              >
                Cancel
              </button>
            </div>
          </div>
        )}

        {resetDone && (
          <div className="flex items-center gap-2 text-green-700 bg-green-50 border border-green-200 rounded-lg px-4 py-2">
            <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
            </svg>
            <span className="text-sm font-medium">All running data cleared.</span>
          </div>
        )}
      </div>

      {/* App info */}
      <div className="bg-gray-50 rounded-xl border border-gray-100 p-4 text-center">
        <div className="text-sm font-semibold text-gray-700">George's Training Hub</div>
        <div className="text-xs text-gray-400 mt-1">33-week marathon + Hyrox training plan</div>
        <div className="text-xs text-gray-300 mt-1">Data stored locally on this device</div>
      </div>
    </div>
  )
}
