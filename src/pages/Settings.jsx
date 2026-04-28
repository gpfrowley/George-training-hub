import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useApp } from '../context/AppContext'

export default function Settings() {
  const navigate = useNavigate()
  const { startDate, setStartDate, currentWeek } = useApp()
  const [dateInput, setDateInput] = useState(startDate)
  const [saved, setSaved] = useState(false)
  const [importError, setImportError] = useState('')

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
        <p className="text-xs text-gray-400 mb-3">The date your 26-week plan started. This determines the current week.</p>
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
          Currently: <span className="font-semibold text-gray-800">Week {currentWeek} of 26</span>
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

      {/* App info */}
      <div className="bg-gray-50 rounded-xl border border-gray-100 p-4 text-center">
        <div className="text-sm font-semibold text-gray-700">George's Training Hub</div>
        <div className="text-xs text-gray-400 mt-1">26-week marathon + Hyrox training plan</div>
        <div className="text-xs text-gray-300 mt-1">Data stored locally on this device</div>
      </div>
    </div>
  )
}
