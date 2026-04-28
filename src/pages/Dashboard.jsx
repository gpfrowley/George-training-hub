import { useNavigate } from 'react-router-dom'
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

const PHASE_COLORS = {
  'Phase 1 — Base Building': 'bg-blue-50 border-blue-200 text-blue-800',
  'Phase 2 — Marathon Build': 'bg-green-50 border-green-200 text-green-800',
  'Taper & Race': 'bg-purple-50 border-purple-200 text-purple-800',
  'Recovery & Hyrox Prep': 'bg-orange-50 border-orange-200 text-orange-800',
}

const CHECKPOINTS = [
  { id: '10k', name: '10K Time Trial', target: 'sub-40:00', week: 12 },
  { id: 'halfmarathon', name: 'Half Marathon', target: 'sub-1:23:00', week: 17 },
  { id: 'marathon', name: 'Auckland Marathon', target: 'sub-3:00:00', week: 26 },
  { id: 'hyrox', name: 'Hyrox December', target: 'sub-1:05:00', week: 32 },
]

function getGymPhaseId(week) {
  if (week >= 1 && week <= 8) return 'phase1'
  if (week >= 9 && week <= 20) return 'phase2'
  if (week >= 27 && week <= 33) return 'phase4'
  return null
}

export default function Dashboard() {
  const navigate = useNavigate()
  const { currentWeek, currentPhase, runningLogs, gymLogs, checkpoints } = useApp()

  const weekData = RUNNING_PLAN.find(w => w.week === currentWeek)
  const sessions = weekData ? weekData.sessions : []

  // Weekly km progress
  const targetKm = sessions.reduce((sum, s) => sum + (s.targetDistance || 0), 0)
  const actualKm = sessions.reduce((sum, s) => {
    const log = runningLogs[`${currentWeek}-${s.id}`]
    if (log && log.status === 'completed' && log.actualDistance) {
      return sum + parseFloat(log.actualDistance || 0)
    }
    return sum
  }, 0)
  const progressPct = targetKm > 0 ? Math.min((actualKm / targetKm) * 100, 100) : 0

  // Gym sessions
  const gymPhaseId = getGymPhaseId(currentWeek)
  const gymSessionIds = ['A', 'B', 'C']

  // Checkpoint statuses
  const cpStatuses = CHECKPOINTS.map(cp => {
    const log = checkpoints[cp.id]
    if (!log) return { ...cp, status: 'pending' }
    return {
      ...cp,
      status: log.targetHit ? 'hit' : 'missed',
      time: log.time,
    }
  })

  const phaseColorClass = PHASE_COLORS[currentPhase] || 'bg-gray-50 border-gray-200 text-gray-800'

  return (
    <div className="max-w-lg mx-auto px-4 py-4 pb-20">
      {/* Header */}
      <div className="flex items-center justify-between mb-4">
        <div>
          <h1 className="text-xl font-bold text-gray-900">George's Training Hub</h1>
          <p className="text-sm text-gray-500">Your 33-week plan</p>
        </div>
        <button
          onClick={() => navigate('/settings')}
          className="p-2 rounded-lg bg-white border border-gray-200 text-gray-500 hover:text-gray-700"
          aria-label="Settings"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
            <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
          </svg>
        </button>
      </div>

      {/* Week badge + phase */}
      <div className="flex gap-3 mb-4">
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-3 flex-1 text-center">
          <div className="text-2xl font-bold text-gray-900">Week {currentWeek}</div>
          <div className="text-xs text-gray-500">of 33</div>
        </div>
        <div className={`rounded-xl border p-3 flex-2 flex items-center px-4 ${phaseColorClass}`}>
          <span className="text-sm font-semibold">{currentPhase}</span>
        </div>
      </div>

      {/* Weekly km progress */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-4 mb-4">
        <div className="flex justify-between items-center mb-2">
          <span className="text-sm font-medium text-gray-700">Weekly Distance</span>
          <span className="text-sm text-gray-500">{actualKm.toFixed(1)} / {targetKm} km</span>
        </div>
        <div className="h-2.5 bg-gray-100 rounded-full overflow-hidden">
          <div
            className="h-full bg-blue-500 rounded-full transition-all"
            style={{ width: `${progressPct}%` }}
          />
        </div>
        <div className="text-xs text-gray-400 mt-1">{Math.round(progressPct)}% complete</div>
      </div>

      {/* Running sessions */}
      <h2 className="text-sm font-semibold text-gray-700 mb-2 uppercase tracking-wide">This Week's Running</h2>
      <div className="grid grid-cols-2 gap-3 mb-4">
        {sessions.map(session => {
          const log = runningLogs[`${currentWeek}-${session.id}`]
          let statusIcon = '⏳'
          let statusColor = 'text-gray-400'
          if (log) {
            if (log.status === 'completed') { statusIcon = '✓'; statusColor = 'text-green-500' }
            if (log.status === 'missed') { statusIcon = '✗'; statusColor = 'text-red-500' }
          }
          return (
            <div key={session.id} className="bg-white rounded-xl shadow-sm border border-gray-100 p-3">
              <div className="flex items-center justify-between mb-1">
                <span className={`text-xs font-semibold px-2 py-0.5 rounded-full ${SESSION_TYPE_BADGE[session.type] || 'bg-gray-100 text-gray-600'}`}>
                  {session.type}
                </span>
                <span className={`text-lg font-bold ${statusColor}`}>{statusIcon}</span>
              </div>
              <div className="text-xs font-medium text-gray-800 mt-1">{session.label}</div>
              <div className="text-xs text-gray-500 mt-0.5 leading-tight">{session.description}</div>
            </div>
          )
        })}
      </div>

      {/* Gym sessions */}
      {gymPhaseId ? (
        <>
          <h2 className="text-sm font-semibold text-gray-700 mb-2 uppercase tracking-wide">This Week's Gym</h2>
          <div className="flex gap-3 mb-4">
            {gymSessionIds.map(sid => {
              const key = `${currentWeek}-${gymPhaseId}-${sid}`
              const log = gymLogs[key]
              const isComplete = log && log.completed
              return (
                <div
                  key={sid}
                  className="flex-1 bg-white rounded-xl shadow-sm border border-gray-100 p-3 text-center"
                >
                  <div className="text-sm font-bold text-gray-800">Session {sid}</div>
                  {isComplete ? (
                    <span className="text-green-500 text-lg">✓</span>
                  ) : (
                    <span className="text-gray-300 text-lg">○</span>
                  )}
                </div>
              )
            })}
          </div>
        </>
      ) : (
        <>
          <h2 className="text-sm font-semibold text-gray-700 mb-2 uppercase tracking-wide">Gym</h2>
          <div className="bg-purple-50 border border-purple-100 rounded-xl p-3 mb-4">
            <p className="text-sm text-purple-700">Taper week — no heavy gym sessions planned.</p>
          </div>
        </>
      )}

      {/* Checkpoints */}
      <h2 className="text-sm font-semibold text-gray-700 mb-2 uppercase tracking-wide">Checkpoints</h2>
      <div className="grid grid-cols-2 gap-3 mb-6">
        {cpStatuses.map(cp => (
          <div key={cp.id} className="bg-white rounded-xl shadow-sm border border-gray-100 p-3">
            <div className="text-xs font-semibold text-gray-800">{cp.name}</div>
            <div className="text-xs text-gray-500">Wk {cp.week} · {cp.target}</div>
            <div className="mt-1">
              {cp.status === 'pending' && (
                <span className="text-xs bg-gray-100 text-gray-500 px-2 py-0.5 rounded-full">Pending</span>
              )}
              {cp.status === 'hit' && (
                <span className="text-xs bg-green-100 text-green-700 px-2 py-0.5 rounded-full">Target Hit!</span>
              )}
              {cp.status === 'missed' && (
                <span className="text-xs bg-red-100 text-red-700 px-2 py-0.5 rounded-full">Missed</span>
              )}
            </div>
          </div>
        ))}
      </div>

      {/* Quick log button */}
      <button
        onClick={() => navigate('/running')}
        className="w-full bg-blue-600 text-white rounded-xl px-4 py-3 font-semibold text-base shadow-sm hover:bg-blue-700 transition-colors"
      >
        Log Today's Session
      </button>
    </div>
  )
}
