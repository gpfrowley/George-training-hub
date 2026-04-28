import { useState, useCallback } from 'react'
import { useApp } from '../context/AppContext'
import { GYM_PLAN } from '../data/gymPlan'

function getPhaseForWeek(week) {
  if (week >= 1 && week <= 7) return GYM_PLAN.phases.find(p => p.id === 'phase1')
  if (week >= 8 && week <= 18) return GYM_PLAN.phases.find(p => p.id === 'phase2')
  if (week >= 23 && week <= 26) return GYM_PLAN.phases.find(p => p.id === 'phase4')
  return null
}

function getPrevWeightRef(gymLogs, exerciseName, currentWeek, phaseId, sessionId) {
  // Look back through prior weeks for same exercise
  for (let w = currentWeek - 1; w >= 1; w--) {
    const key = `${w}-${phaseId}-${sessionId}`
    const log = gymLogs[key]
    if (log && log.exercises && log.exercises[exerciseName]) {
      const sets = log.exercises[exerciseName]
      const lastSetWithWeight = [...sets].reverse().find(s => s.weight)
      if (lastSetWithWeight) return lastSetWithWeight.weight
    }
  }
  return null
}

function ExerciseSetRow({ setIndex, set, onChange, onRemove }) {
  return (
    <div className="flex items-center gap-2 py-1">
      <span className="text-xs text-gray-500 w-6 text-center font-medium">{setIndex + 1}</span>
      <input
        type="number"
        min="0"
        placeholder="Reps"
        value={set.reps || ''}
        onChange={e => onChange({ ...set, reps: e.target.value })}
        className="flex-1 border border-gray-200 rounded-lg px-2 py-1.5 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 text-center"
      />
      <input
        type="number"
        min="0"
        step="0.5"
        placeholder="kg"
        value={set.weight || ''}
        onChange={e => onChange({ ...set, weight: e.target.value })}
        className="flex-1 border border-gray-200 rounded-lg px-2 py-1.5 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 text-center"
      />
      <button
        onClick={onRemove}
        className="text-red-400 hover:text-red-600 p-1 rounded"
        aria-label="Remove set"
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
        </svg>
      </button>
    </div>
  )
}

function ExerciseBlock({ exercise, exerciseSets, prevWeight, onSetsChange }) {
  const addSet = () => {
    onSetsChange([...(exerciseSets || []), { reps: '', weight: '' }])
  }

  const removeSet = (idx) => {
    const updated = (exerciseSets || []).filter((_, i) => i !== idx)
    onSetsChange(updated)
  }

  const updateSet = (idx, set) => {
    const updated = (exerciseSets || []).map((s, i) => i === idx ? set : s)
    onSetsChange(updated)
  }

  // Initialize default sets if needed
  const sets = exerciseSets && exerciseSets.length > 0
    ? exerciseSets
    : Array.from({ length: exercise.defaultSets }, () => ({ reps: '', weight: '' }))

  return (
    <div className="mb-3">
      <div className="flex items-center justify-between mb-1">
        <div>
          <div className="text-sm font-semibold text-gray-800">{exercise.name}</div>
          <div className="text-xs text-gray-400">{exercise.setsScheme}</div>
        </div>
        {prevWeight && (
          <div className="text-xs text-gray-400 italic">Prev: {prevWeight}kg</div>
        )}
      </div>
      <div className="mb-1">
        <div className="flex items-center gap-2 mb-1">
          <span className="text-xs text-gray-400 w-6"></span>
          <span className="flex-1 text-xs text-center text-gray-400">Reps</span>
          <span className="flex-1 text-xs text-center text-gray-400">Weight (kg)</span>
          <span className="w-6"></span>
        </div>
        {sets.map((set, idx) => (
          <ExerciseSetRow
            key={idx}
            setIndex={idx}
            set={set}
            onChange={updated => updateSet(idx, updated)}
            onRemove={() => removeSet(idx)}
          />
        ))}
      </div>
      <button
        onClick={addSet}
        className="text-xs text-blue-600 font-medium hover:underline"
      >
        + Add set
      </button>
    </div>
  )
}

function SessionView({ session, week, phaseId, gymLogs, setGymLog }) {
  const logKey = `${week}-${phaseId}-${session.id}`
  const log = gymLogs[logKey] || {}
  const [localExercises, setLocalExercises] = useState(log.exercises || {})
  const [notes, setNotes] = useState(log.notes || '')
  const [editing, setEditing] = useState(false)

  const isComplete = log.completed && !editing

  const updateExerciseSets = useCallback((exerciseName, sets) => {
    setLocalExercises(prev => ({ ...prev, [exerciseName]: sets }))
  }, [])

  const handleComplete = () => {
    setGymLog(week, phaseId, session.id, {
      ...log,
      exercises: localExercises,
      notes,
      completed: true,
      completedAt: new Date().toISOString(),
    })
    setEditing(false)
  }

  const handleEdit = () => {
    setLocalExercises(log.exercises || {})
    setNotes(log.notes || '')
    setEditing(true)
  }

  if (isComplete) {
    return (
      <div className="space-y-3">
        <div className="flex items-center gap-3 bg-green-50 border border-green-200 rounded-xl p-3">
          <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-green-600 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
          </svg>
          <div>
            <div className="text-sm font-semibold text-green-800">Session Complete</div>
            {log.completedAt && (
              <div className="text-xs text-green-600">
                {new Date(log.completedAt).toLocaleDateString('en-NZ', { weekday: 'short', day: 'numeric', month: 'short' })}
              </div>
            )}
          </div>
          <button
            onClick={handleEdit}
            className="ml-auto text-sm text-blue-600 underline"
          >
            Edit
          </button>
        </div>

        {/* Show logged data summary */}
        {Object.entries(localExercises).map(([name, sets]) => {
          const validSets = sets.filter(s => s.reps || s.weight)
          if (!validSets.length) return null
          return (
            <div key={name} className="bg-gray-50 rounded-lg p-3">
              <div className="text-sm font-medium text-gray-700 mb-1">{name}</div>
              {validSets.map((s, i) => (
                <div key={i} className="text-xs text-gray-500">
                  Set {i + 1}: {s.reps || '—'} reps @ {s.weight || '—'} kg
                </div>
              ))}
            </div>
          )
        })}
        {log.notes && <p className="text-sm text-gray-500 italic">{log.notes}</p>}
      </div>
    )
  }

  return (
    <div className="space-y-4">
      {session.supersets.map(superset => (
        <div key={superset.id} className="bg-gray-50 rounded-xl p-3">
          <div className="text-xs font-bold text-gray-600 uppercase tracking-wider mb-3">{superset.label}</div>
          {superset.exercises.map(exercise => {
            const prevWeight = getPrevWeightRef(gymLogs, exercise.name, week, phaseId, session.id)
            return (
              <ExerciseBlock
                key={exercise.name}
                exercise={exercise}
                exerciseSets={localExercises[exercise.name]}
                prevWeight={prevWeight}
                onSetsChange={sets => updateExerciseSets(exercise.name, sets)}
              />
            )
          })}
        </div>
      ))}

      {session.core && session.core.length > 0 && (
        <div className="bg-amber-50 rounded-xl p-3">
          <div className="text-xs font-bold text-amber-700 uppercase tracking-wider mb-2">Core</div>
          {session.core.map(ex => (
            <div key={ex.name} className="text-sm text-gray-700 py-1 flex justify-between">
              <span>{ex.name}</span>
              <span className="text-gray-400 text-xs">{ex.scheme}</span>
            </div>
          ))}
        </div>
      )}

      {session.finisher && (
        <div className="bg-orange-50 rounded-xl p-3">
          <div className="text-xs font-bold text-orange-700 uppercase tracking-wider mb-2">Finisher</div>
          <div className="text-sm text-gray-700">{session.finisher}</div>
        </div>
      )}

      {session.reducedFrom && week >= session.reducedFrom && (
        <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-2 text-xs text-yellow-700">
          From week {session.reducedFrom}: reduce to 3 sets per exercise
        </div>
      )}

      <div>
        <label className="block text-xs font-medium text-gray-600 mb-1">Session Notes</label>
        <textarea
          rows={2}
          placeholder="How did the session go?"
          value={notes}
          onChange={e => setNotes(e.target.value)}
          className="w-full border border-gray-200 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none"
        />
      </div>

      <button
        onClick={handleComplete}
        className="w-full bg-green-600 text-white rounded-xl px-4 py-3 font-semibold text-base hover:bg-green-700 transition-colors"
      >
        Mark Session Complete
      </button>
    </div>
  )
}

export default function Gym() {
  const { currentWeek, gymLogs, setGymLog } = useApp()
  const [selectedWeek, setSelectedWeek] = useState(currentWeek)
  const [activeSession, setActiveSession] = useState('A')

  const phase = getPhaseForWeek(selectedWeek)

  const prevWeek = () => setSelectedWeek(w => Math.max(1, w - 1))
  const nextWeek = () => setSelectedWeek(w => Math.min(26, w + 1))

  return (
    <div className="max-w-lg mx-auto px-4 py-4 pb-20">
      <h1 className="text-xl font-bold text-gray-900 mb-4">Gym Sessions</h1>

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
          {phase && <div className="text-xs text-gray-500">{phase.label}</div>}
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

      {!phase ? (
        <div className="bg-purple-50 border border-purple-100 rounded-xl p-6 text-center">
          <div className="text-purple-800 font-semibold mb-1">Taper Week</div>
          <div className="text-sm text-purple-600">No gym sessions planned — focus on recovery and race prep.</div>
        </div>
      ) : (
        <>
          {/* Session tabs */}
          <div className="flex gap-2 mb-4">
            {phase.sessions.map(session => {
              const logKey = `${selectedWeek}-${phase.id}-${session.id}`
              const isComplete = gymLogs[logKey]?.completed
              return (
                <button
                  key={session.id}
                  onClick={() => setActiveSession(session.id)}
                  className={`flex-1 py-2 px-3 rounded-xl text-sm font-semibold border transition-colors relative ${
                    activeSession === session.id
                      ? 'bg-blue-600 text-white border-blue-600'
                      : 'bg-white text-gray-700 border-gray-200 hover:border-blue-300'
                  }`}
                >
                  {session.id}
                  {isComplete && (
                    <span className={`ml-1 text-xs ${activeSession === session.id ? 'text-blue-200' : 'text-green-500'}`}>✓</span>
                  )}
                </button>
              )
            })}
          </div>

          {/* Active session */}
          {phase.sessions.filter(s => s.id === activeSession).map(session => (
            <div key={session.id}>
              <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-4 mb-3">
                <h2 className="text-base font-bold text-gray-900 mb-1">{session.label}</h2>
                <SessionView
                  session={session}
                  week={selectedWeek}
                  phaseId={phase.id}
                  gymLogs={gymLogs}
                  setGymLog={setGymLog}
                />
              </div>
            </div>
          ))}
        </>
      )}
    </div>
  )
}
