import { useState } from 'react'
import { useApp } from '../context/AppContext'
import { RUNNING_PLAN } from '../data/runningPlan'

const SESSION_TYPE_BADGE = {
  easy: 'bg-blue-100 text-blue-700',
  quality: 'bg-green-100 text-green-700',
  tempo: 'bg-amber-100 text-amber-700',
  long: 'bg-red-100 text-red-700',
  race: 'bg-purple-100 text-purple-700',
  recovery: 'bg-gray-100 text-gray-600',
}

const SESSION_TYPE_BORDER = {
  easy: 'border-blue-200',
  quality: 'border-green-200',
  tempo: 'border-amber-200',
  long: 'border-red-200',
  race: 'border-purple-200',
  recovery: 'border-gray-200',
}

function parsePace(paceStr) {
  if (!paceStr) return null
  const parts = paceStr.split(':')
  if (parts.length === 2) {
    const mins = parseInt(parts[0], 10)
    const secs = parseInt(parts[1], 10)
    if (!isNaN(mins) && !isNaN(secs)) return mins * 60 + secs
  }
  return null
}

function getFeedback(actualPace, targetPace, type) {
  if (type === 'race') return { label: 'Completed', cls: 'bg-purple-100 text-purple-700' }
  if (type === 'recovery') return { label: 'Recovery', cls: 'bg-gray-100 text-gray-600' }
  const actual = parsePace(actualPace)
  const target = parsePace(targetPace)
  if (!actual || !target) return { label: 'Logged', cls: 'bg-blue-100 text-blue-700' }
  const diff = actual - target
  if (diff <= 5) return { label: 'On target', cls: 'bg-green-100 text-green-700' }
  if (diff <= 15) return { label: 'Close', cls: 'bg-amber-100 text-amber-700' }
  return { label: 'Off target', cls: 'bg-red-100 text-red-700' }
}

function SessionCard({ session, log, onLog, onMiss, onEdit }) {
  const [form, setForm] = useState({
    actualDistance: log?.actualDistance || '',
    actualPace: log?.actualPace || '',
    notes: log?.notes || '',
  })
  const [editing, setEditing] = useState(false)

  const badgeClass = SESSION_TYPE_BADGE[session.type] || 'bg-gray-100 text-gray-600'
  const borderClass = SESSION_TYPE_BORDER[session.type] || 'border-gray-200'

  const handleLog = () => {
    onLog({
      status: 'completed',
      actualDistance: form.actualDistance,
      actualPace: form.actualPace,
      notes: form.notes,
    })
    setEditing(false)
  }

  const handleEdit = () => {
    setForm({
      actualDistance: log?.actualDistance || '',
      actualPace: log?.actualPace || '',
      notes: log?.notes || '',
    })
    setEditing(true)
  }

  const isLogged = log && log.status === 'completed'
  const isMissed = log && log.status === 'missed'
  const showForm = !log || editing

  return (
    <div className={`bg-white rounded-xl shadow-sm border ${borderClass} p-4 mb-3`}>
      <div className="flex items-center gap-2 mb-2">
        <span className={`text-xs font-semibold px-2 py-0.5 rounded-full ${badgeClass}`}>
          {session.type}
        </span>
        <span className="text-sm font-semibold text-gray-800">{session.label}</span>
      </div>
      <p className="text-sm text-gray-500 mb-3">{session.description}</p>

      {isMissed && !editing && (
        <div className="flex items-center gap-3">
          <span className="text-sm font-semibold text-red-600 bg-red-50 px-3 py-1 rounded-lg border border-red-200">Missed</span>
          <button
            onClick={() => { onEdit(); setEditing(true) }}
            className="text-sm text-gray-500 underline"
          >
            Undo
          </button>
        </div>
      )}

      {isLogged && !editing && (
        <div>
          <div className="flex flex-wrap gap-3 mb-2">
            {log.actualDistance && (
              <div className="text-sm">
                <span className="text-gray-500">Distance:</span>{' '}
                <span className="font-semibold text-gray-800">{log.actualDistance} km</span>
              </div>
            )}
            {log.actualPace && (
              <div className="text-sm">
                <span className="text-gray-500">Pace:</span>{' '}
                <span className="font-semibold text-gray-800">{log.actualPace}/km</span>
              </div>
            )}
          </div>
          {log.notes && (
            <p className="text-sm text-gray-500 italic mb-2">{log.notes}</p>
          )}
          <div className="flex items-center gap-2">
            <span className={`text-xs font-semibold px-2 py-0.5 rounded-full ${getFeedback(log.actualPace, session.targetPace, session.type).cls}`}>
              {getFeedback(log.actualPace, session.targetPace, session.type).label}
            </span>
            <button
              onClick={handleEdit}
              className="text-sm text-blue-600 underline ml-1"
            >
              Edit
            </button>
          </div>
        </div>
      )}

      {showForm && !isMissed && (
        <div className="space-y-3">
          <div className="grid grid-cols-2 gap-3">
            <div>
              <label className="block text-xs font-medium text-gray-600 mb-1">Distance (km)</label>
              <input
                type="number"
                step="0.1"
                min="0"
                placeholder={session.targetDistance ? `${session.targetDistance}` : '0.0'}
                value={form.actualDistance}
                onChange={e => setForm(f => ({ ...f, actualDistance: e.target.value }))}
                className="w-full border border-gray-200 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div>
              <label className="block text-xs font-medium text-gray-600 mb-1">Pace (mm:ss)</label>
              <input
                type="text"
                placeholder={session.targetPace || '5:30'}
                value={form.actualPace}
                onChange={e => setForm(f => ({ ...f, actualPace: e.target.value }))}
                className="w-full border border-gray-200 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
          </div>
          <div>
            <label className="block text-xs font-medium text-gray-600 mb-1">Notes</label>
            <textarea
              rows={2}
              placeholder="How did it feel?"
              value={form.notes}
              onChange={e => setForm(f => ({ ...f, notes: e.target.value }))}
              className="w-full border border-gray-200 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none"
            />
          </div>
          <div className="flex gap-2">
            <button
              onClick={handleLog}
              className="flex-1 bg-blue-600 text-white rounded-lg px-4 py-2 text-sm font-semibold hover:bg-blue-700 transition-colors"
            >
              Log Session
            </button>
            <button
              onClick={() => {
                onMiss()
                setEditing(false)
              }}
              className="flex-1 border border-red-300 text-red-600 rounded-lg px-4 py-2 text-sm font-semibold hover:bg-red-50 transition-colors"
            >
              Mark Missed
            </button>
          </div>
          {editing && (
            <button
              onClick={() => setEditing(false)}
              className="w-full text-sm text-gray-400 underline"
            >
              Cancel
            </button>
          )}
        </div>
      )}
    </div>
  )
}

export default function Running() {
  const { currentWeek, runningLogs, setRunningLog } = useApp()
  const [selectedWeek, setSelectedWeek] = useState(currentWeek)

  const weekData = RUNNING_PLAN.find(w => w.week === selectedWeek)
  const sessions = weekData ? weekData.sessions : []

  const prevWeek = () => setSelectedWeek(w => Math.max(1, w - 1))
  const nextWeek = () => setSelectedWeek(w => Math.min(26, w + 1))

  return (
    <div className="max-w-lg mx-auto px-4 py-4 pb-20">
      <h1 className="text-xl font-bold text-gray-900 mb-4">Running Plan</h1>

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

      {sessions.length === 0 ? (
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 text-center text-gray-500">
          No sessions planned for this week.
        </div>
      ) : (
        sessions.map(session => {
          const log = runningLogs[`${selectedWeek}-${session.id}`]
          return (
            <SessionCard
              key={session.id}
              session={session}
              log={log}
              onLog={(data) => setRunningLog(selectedWeek, session.id, data)}
              onMiss={() => setRunningLog(selectedWeek, session.id, { status: 'missed' })}
              onEdit={() => setRunningLog(selectedWeek, session.id, null)}
            />
          )
        })
      )}
    </div>
  )
}
