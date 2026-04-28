import { useState } from 'react'
import {
  ResponsiveContainer,
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
} from 'recharts'
import { useApp } from '../context/AppContext'

export default function Metrics() {
  const { currentWeek, metrics, addMetric } = useApp()
  const [selectedWeek, setSelectedWeek] = useState(currentWeek)
  const [form, setForm] = useState({ weight: '', rhr: '', notes: '' })

  const existingEntry = metrics.find(m => m.week === selectedWeek)

  const handleSave = () => {
    addMetric({
      week: selectedWeek,
      date: new Date().toISOString().split('T')[0],
      weight: form.weight ? parseFloat(form.weight) : null,
      rhr: form.rhr ? parseInt(form.rhr, 10) : null,
      notes: form.notes,
    })
  }

  const handleEdit = () => {
    setForm({
      weight: existingEntry?.weight ? String(existingEntry.weight) : '',
      rhr: existingEntry?.rhr ? String(existingEntry.rhr) : '',
      notes: existingEntry?.notes || '',
    })
  }

  const prevWeek = () => setSelectedWeek(w => Math.max(1, w - 1))
  const nextWeek = () => setSelectedWeek(w => Math.min(26, w + 1))

  const weightData = metrics
    .filter(m => m.weight !== null && m.weight !== undefined)
    .map(m => ({ week: m.week, value: m.weight }))

  const rhrData = metrics
    .filter(m => m.rhr !== null && m.rhr !== undefined)
    .map(m => ({ week: m.week, value: m.rhr }))

  return (
    <div className="max-w-lg mx-auto px-4 py-4 pb-20">
      <h1 className="text-xl font-bold text-gray-900 mb-4">Metrics</h1>

      {/* Week selector */}
      <div className="flex items-center justify-between bg-white rounded-xl shadow-sm border border-gray-100 px-4 py-3 mb-4">
        <button
          onClick={prevWeek}
          disabled={selectedWeek === 1}
          className="p-1 rounded-lg disabled:opacity-30 hover:bg-gray-100 transition-colors"
          aria-label="Previous week"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
          </svg>
        </button>
        <div className="text-center">
          <div className="font-bold text-gray-900">Week {selectedWeek}</div>
          {selectedWeek === currentWeek && (
            <div className="text-xs text-blue-600 font-medium">Current Week</div>
          )}
        </div>
        <button
          onClick={nextWeek}
          disabled={selectedWeek === 26}
          className="p-1 rounded-lg disabled:opacity-30 hover:bg-gray-100 transition-colors"
          aria-label="Next week"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>

      {/* Log form */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-4 mb-4">
        <h2 className="text-sm font-semibold text-gray-700 mb-3">
          {existingEntry ? 'Week ' + selectedWeek + ' Entry' : 'Log Week ' + selectedWeek}
        </h2>
        {existingEntry && (
          <div className="mb-3 p-3 bg-gray-50 rounded-lg">
            <div className="flex gap-4 mb-1">
              {existingEntry.weight && (
                <div className="text-sm">
                  <span className="text-gray-500">Weight:</span>{' '}
                  <span className="font-semibold">{existingEntry.weight} kg</span>
                </div>
              )}
              {existingEntry.rhr && (
                <div className="text-sm">
                  <span className="text-gray-500">RHR:</span>{' '}
                  <span className="font-semibold">{existingEntry.rhr} bpm</span>
                </div>
              )}
            </div>
            {existingEntry.notes && (
              <p className="text-xs text-gray-500 italic">{existingEntry.notes}</p>
            )}
            <button
              onClick={handleEdit}
              className="text-xs text-blue-600 underline mt-1"
            >
              Edit entry
            </button>
          </div>
        )}
        <div className="grid grid-cols-2 gap-3 mb-3">
          <div>
            <label className="block text-xs font-medium text-gray-600 mb-1">Weight (kg)</label>
            <input
              type="number"
              step="0.1"
              min="0"
              placeholder="75.0"
              value={form.weight}
              onChange={e => setForm(f => ({ ...f, weight: e.target.value }))}
              className="w-full border border-gray-200 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div>
            <label className="block text-xs font-medium text-gray-600 mb-1">Resting HR (bpm)</label>
            <input
              type="number"
              min="0"
              placeholder="52"
              value={form.rhr}
              onChange={e => setForm(f => ({ ...f, rhr: e.target.value }))}
              className="w-full border border-gray-200 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
        </div>
        <div className="mb-3">
          <label className="block text-xs font-medium text-gray-600 mb-1">Notes</label>
          <textarea
            rows={2}
            placeholder="How are you feeling this week? Any niggles?"
            value={form.notes}
            onChange={e => setForm(f => ({ ...f, notes: e.target.value }))}
            className="w-full border border-gray-200 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none"
          />
        </div>
        <button
          onClick={handleSave}
          disabled={!form.weight && !form.rhr}
          className="w-full bg-blue-600 text-white rounded-lg px-4 py-2 text-sm font-semibold hover:bg-blue-700 transition-colors disabled:opacity-40"
        >
          Save Entry
        </button>
      </div>

      {/* Charts */}
      {weightData.length > 0 && (
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-4 mb-4">
          <h2 className="text-sm font-semibold text-gray-700 mb-3">Weight (kg)</h2>
          <ResponsiveContainer width="100%" height={180}>
            <LineChart data={weightData} margin={{ top: 5, right: 10, left: 0, bottom: 5 }}>
              <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
              <XAxis
                dataKey="week"
                tick={{ fontSize: 11 }}
                tickFormatter={v => `W${v}`}
                label={{ value: 'Week', position: 'insideBottom', offset: -2, fontSize: 11 }}
              />
              <YAxis
                tick={{ fontSize: 11 }}
                domain={['auto', 'auto']}
                width={35}
              />
              <Tooltip
                formatter={(value) => [`${value} kg`, 'Weight']}
                labelFormatter={(label) => `Week ${label}`}
              />
              <Line
                type="monotone"
                dataKey="value"
                stroke="#3b82f6"
                strokeWidth={2}
                dot={{ r: 3, fill: '#3b82f6' }}
                activeDot={{ r: 5 }}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
      )}

      {rhrData.length > 0 && (
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-4 mb-4">
          <h2 className="text-sm font-semibold text-gray-700 mb-3">Resting Heart Rate (bpm)</h2>
          <ResponsiveContainer width="100%" height={180}>
            <LineChart data={rhrData} margin={{ top: 5, right: 10, left: 0, bottom: 5 }}>
              <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
              <XAxis
                dataKey="week"
                tick={{ fontSize: 11 }}
                tickFormatter={v => `W${v}`}
                label={{ value: 'Week', position: 'insideBottom', offset: -2, fontSize: 11 }}
              />
              <YAxis
                tick={{ fontSize: 11 }}
                domain={['auto', 'auto']}
                width={35}
              />
              <Tooltip
                formatter={(value) => [`${value} bpm`, 'Resting HR']}
                labelFormatter={(label) => `Week ${label}`}
              />
              <Line
                type="monotone"
                dataKey="value"
                stroke="#ef4444"
                strokeWidth={2}
                dot={{ r: 3, fill: '#ef4444' }}
                activeDot={{ r: 5 }}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
      )}

      {metrics.length === 0 && (
        <div className="bg-gray-50 rounded-xl border border-gray-100 p-6 text-center text-sm text-gray-400">
          No metrics logged yet. Add weight and RHR data above to see your progress charts.
        </div>
      )}
    </div>
  )
}
