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
    week: 33,
    description: 'Week 33 — December 2026 — Hyrox competition',
    format: 'hh:mm:ss',
  },
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
    </div>
  )
}
