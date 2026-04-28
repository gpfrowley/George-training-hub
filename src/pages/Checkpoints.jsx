import { useState } from 'react'
import { useApp } from '../context/AppContext'

const CHECKPOINTS_CONFIG = [
  {
    id: '10k',
    name: '10K Time Trial',
    target: 'sub-40:00',
    targetSeconds: 40 * 60,
    week: 12,
    description: 'Week 12 quality session — time trial effort',
    format: 'mm:ss',
  },
  {
    id: 'halfmarathon',
    name: 'Half Marathon',
    target: 'sub-1:23:00',
    targetSeconds: 83 * 60,
    week: 17,
    description: 'Week 17 race — target 1:23:00',
    format: 'hh:mm:ss',
  },
  {
    id: 'marathon',
    name: 'Auckland Marathon',
    target: 'sub-3:00:00',
    targetSeconds: 3 * 60 * 60,
    week: 26,
    description: 'Week 26 — 1 November 2026 — main goal race',
    format: 'hh:mm:ss',
  },
  {
    id: 'hyrox',
    name: 'Hyrox December 2026',
    target: 'sub-1:05:00',
    targetSeconds: 65 * 60,
    week: 32,
    description: 'Week 32 — 13–14 December 2026 — Hyrox competition',
    format: 'hh:mm:ss',
  },
]

const HYROX_STATIONS = [
  { station: 'SkiErg 1000m',          target: '3:30–3:45' },
  { station: 'Sled Push 50m',          target: '2:30–2:45' },
  { station: 'Sled Pull 50m',          target: '2:15–2:30' },
  { station: 'Burpee Broad Jumps 80m', target: '4:00–4:30' },
  { station: 'Row 1000m',              target: '4:00–4:10' },
  { station: 'Farmers Carry 200m',     target: '2:00–2:15' },
  { station: 'Sandbag Lunges 100m',    target: '3:30–3:45' },
  { station: 'Wall Balls 100 reps',    target: '5:00–5:30' },
  { station: '1km Runs ×8',            target: '2:55–3:00/km each' },
]

function parseTimeToSeconds(timeStr) {
  if (!timeStr) return null
  const parts = timeStr.split(':').map(p => parseInt(p, 10))
  if (parts.some(isNaN)) return null
  if (parts.length === 2) return parts[0] * 60 + parts[1]
  if (parts.length === 3) return parts[0] * 3600 + parts[1] * 60 + parts[2]
  return null
}

function CheckpointCard({ cp, log, onSave }) {
  const [form, setForm] = useState({ time: log?.time || '', notes: log?.notes || '' })
  const [editing, setEditing] = useState(false)

  const isLogged = log && !editing
  const actualSecs = parseTimeToSeconds(log?.time)
  const targetHit = actualSecs !== null && actualSecs < cp.targetSeconds

  let statusBadge = null
  if (log) {
    statusBadge = targetHit
      ? <span className="px-2 py-0.5 rounded-full text-xs font-semibold bg-green-100 text-green-700">Target Hit!</span>
      : <span className="px-2 py-0.5 rounded-full text-xs font-semibold bg-red-100 text-red-700">Target Missed</span>
  } else {
    statusBadge = <span className="px-2 py-0.5 rounded-full text-xs font-semibold bg-gray-100 text-gray-500">Pending</span>
  }

  const handleSave = () => {
    const secs = parseTimeToSeconds(form.time)
    onSave({
      time: form.time,
      notes: form.notes,
      targetHit: secs !== null && secs < cp.targetSeconds,
      loggedAt: new Date().toISOString(),
    })
    setEditing(false)
  }

  let borderClass = 'border-gray-100'
  if (log) {
    borderClass = targetHit ? 'border-green-200' : 'border-red-200'
  }

  return (
    <div className={`bg-white rounded-xl shadow-sm border ${borderClass} p-4 mb-3`}>
      <div className="flex items-start justify-between mb-1">
        <div>
          <h2 className="text-base font-bold text-gray-900">{cp.name}</h2>
          <div className="text-xs text-gray-500">Week {cp.week} · Target: {cp.target}</div>
        </div>
        {statusBadge}
      </div>
      <p className="text-sm text-gray-500 mb-3">{cp.description}</p>

      {isLogged ? (
        <div>
          <div className="flex items-center gap-3 mb-2">
            <div className="text-sm">
              <span className="text-gray-500">Time:</span>{' '}
              <span className="font-bold text-gray-900">{log.time}</span>
            </div>
          </div>
          {log.notes && <p className="text-sm text-gray-500 italic mb-2">{log.notes}</p>}
          <button
            onClick={() => { setForm({ time: log.time, notes: log.notes || '' }); setEditing(true) }}
            className="text-sm text-blue-600 underline"
          >
            Edit Result
          </button>
        </div>
      ) : (
        <div className="space-y-3">
          <div>
            <label className="block text-xs font-medium text-gray-600 mb-1">
              Result Time ({cp.format === 'mm:ss' ? 'mm:ss e.g. 39:45' : 'hh:mm:ss e.g. 2:58:30'})
            </label>
            <input
              type="text"
              placeholder={cp.format === 'mm:ss' ? '39:45' : '2:58:30'}
              value={form.time}
              onChange={e => setForm(f => ({ ...f, time: e.target.value }))}
              className="w-full border border-gray-200 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div>
            <label className="block text-xs font-medium text-gray-600 mb-1">Notes</label>
            <textarea
              rows={2}
              placeholder="How did it go? Conditions, splits, how you felt..."
              value={form.notes}
              onChange={e => setForm(f => ({ ...f, notes: e.target.value }))}
              className="w-full border border-gray-200 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none"
            />
          </div>
          <div className="flex gap-2">
            <button
              onClick={handleSave}
              disabled={!form.time}
              className="flex-1 bg-blue-600 text-white rounded-lg px-4 py-2 text-sm font-semibold hover:bg-blue-700 transition-colors disabled:opacity-40"
            >
              Save Result
            </button>
            {editing && (
              <button
                onClick={() => setEditing(false)}
                className="px-4 py-2 border border-gray-200 rounded-lg text-sm text-gray-500 hover:bg-gray-50"
              >
                Cancel
              </button>
            )}
          </div>
        </div>
      )}
    </div>
  )
}

export default function Checkpoints() {
  const { checkpoints, setCheckpoint } = useApp()

  return (
    <div className="max-w-lg mx-auto px-4 py-4 pb-20">
      <h1 className="text-xl font-bold text-gray-900 mb-1">Race Checkpoints</h1>
      <p className="text-sm text-gray-500 mb-4">Track your key race results and personal targets.</p>

      {CHECKPOINTS_CONFIG.map(cp => (
        <CheckpointCard
          key={cp.id}
          cp={cp}
          log={checkpoints[cp.id]}
          onSave={(data) => setCheckpoint(cp.id, data)}
        />
      ))}

      {/* Hyrox station target splits */}
      <div className="bg-white rounded-xl shadow-sm border border-orange-100 overflow-hidden mt-2">
        <div className="bg-orange-50 border-b border-orange-100 px-4 py-3">
          <h2 className="text-base font-bold text-orange-900">Hyrox Station Targets</h2>
          <p className="text-xs text-orange-600 mt-0.5">13–14 December 2026 · Sub-1:05:00</p>
        </div>
        <div>
          {HYROX_STATIONS.map((s, i) => (
            <div
              key={s.station}
              className={`flex items-center justify-between px-4 py-3 ${i < HYROX_STATIONS.length - 1 ? 'border-b border-gray-50' : ''}`}
            >
              <span className="text-sm text-gray-800">{s.station}</span>
              <span className="text-sm font-semibold text-orange-700 tabular-nums">{s.target}</span>
            </div>
          ))}
        </div>
        <div className="bg-gray-50 border-t border-gray-100 px-4 py-3">
          <div className="flex justify-between items-center">
            <span className="text-sm font-semibold text-gray-700">Total station time</span>
            <span className="text-sm font-bold text-gray-900">~27–30 min</span>
          </div>
          <div className="flex justify-between items-center mt-1">
            <span className="text-sm text-gray-500">Running time (8×1km)</span>
            <span className="text-sm font-semibold text-gray-700">~24–25 min</span>
          </div>
          <div className="flex justify-between items-center mt-1">
            <span className="text-sm font-semibold text-gray-700">Projected total</span>
            <span className="text-sm font-bold text-blue-700">~58–62 min</span>
          </div>
        </div>
      </div>
    </div>
  )
}
