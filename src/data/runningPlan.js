export const RUNNING_PLAN = [
  // ─── PHASE 1: BASE BUILDING (Weeks 1–8) ───────────────────────────────────
  {
    week: 1,
    sessions: [
      { id: 'easy', type: 'easy', label: 'Easy Run', targetDistance: 22, targetPace: '5:40', description: '22km @ 5:40/km' },
      { id: 'quality', type: 'quality', label: 'Quality/Intervals', targetDistance: null, targetPace: '3:45', description: '4x4min @ 3:45/km Norwegian' },
      { id: 'tempo', type: 'tempo', label: 'Tempo/MP', targetDistance: 6, targetPace: '4:35', description: '6km @ 4:35/km' },
      { id: 'long', type: 'long', label: 'Long Run', targetDistance: 21, targetPace: '5:20', description: '21km @ 5:20/km' },
    ],
  },
  {
    week: 2,
    sessions: [
      { id: 'easy', type: 'easy', label: 'Easy Run', targetDistance: 22, targetPace: '5:40', description: '22km @ 5:40/km' },
      { id: 'quality', type: 'quality', label: 'Quality/Intervals', targetDistance: null, targetPace: '3:45', description: '4x4min @ 3:45/km Norwegian' },
      { id: 'tempo', type: 'tempo', label: 'Tempo/MP', targetDistance: 7, targetPace: '4:30', description: '7km @ 4:30/km' },
      { id: 'long', type: 'long', label: 'Long Run', targetDistance: 22, targetPace: '5:15', description: '22km @ 5:15/km' },
    ],
  },
  {
    week: 3,
    sessions: [
      { id: 'easy', type: 'easy', label: 'Easy Run', targetDistance: 22, targetPace: '5:35', description: '22km @ 5:35/km' },
      { id: 'quality', type: 'quality', label: 'Quality/Intervals', targetDistance: null, targetPace: '3:45', description: '5x4min @ 3:45/km Norwegian' },
      { id: 'tempo', type: 'tempo', label: 'Tempo/MP', targetDistance: 8, targetPace: '4:30', description: '8km @ 4:30/km' },
      { id: 'long', type: 'long', label: 'Long Run', targetDistance: 23, targetPace: '5:15', description: '23km @ 5:15/km' },
    ],
  },
  {
    week: 4,
    sessions: [
      { id: 'easy', type: 'easy', label: 'Easy Run', targetDistance: 22, targetPace: '5:35', description: '22km @ 5:35/km' },
      { id: 'quality', type: 'quality', label: 'Quality/Intervals', targetDistance: null, targetPace: '3:45', description: '4x4min @ 3:45/km step-back' },
      { id: 'tempo', type: 'tempo', label: 'Tempo/MP', targetDistance: 6, targetPace: '4:35', description: '6km @ 4:35/km' },
      { id: 'long', type: 'long', label: 'Long Run', targetDistance: 21, targetPace: '5:15', description: '21km @ 5:15/km' },
    ],
  },
  {
    week: 5,
    sessions: [
      { id: 'easy', type: 'easy', label: 'Easy Run', targetDistance: 22, targetPace: '5:35', description: '22km @ 5:35/km' },
      { id: 'quality', type: 'quality', label: 'Quality/Intervals', targetDistance: null, targetPace: '3:42', description: '5x4min @ 3:42/km Norwegian' },
      { id: 'tempo', type: 'tempo', label: 'Tempo/MP', targetDistance: 9, targetPace: '4:25', description: '9km @ 4:25/km' },
      { id: 'long', type: 'long', label: 'Long Run', targetDistance: 25, targetPace: '5:10', description: '25km @ 5:10/km' },
    ],
  },
  {
    week: 6,
    sessions: [
      { id: 'easy', type: 'easy', label: 'Easy Run', targetDistance: 22, targetPace: '5:30', description: '22km @ 5:30/km' },
      { id: 'quality', type: 'quality', label: 'Quality/Intervals', targetDistance: null, targetPace: '3:42', description: '5x4min @ 3:42/km Norwegian' },
      { id: 'tempo', type: 'tempo', label: 'Tempo/MP', targetDistance: 10, targetPace: '4:25', description: '10km @ 4:25/km' },
      { id: 'long', type: 'long', label: 'Long Run', targetDistance: 26, targetPace: '5:10', description: '26km @ 5:10/km' },
    ],
  },
  {
    week: 7,
    sessions: [
      { id: 'easy', type: 'easy', label: 'Easy Run', targetDistance: 22, targetPace: '5:30', description: '22km @ 5:30/km' },
      { id: 'quality', type: 'quality', label: 'Quality/Intervals', targetDistance: null, targetPace: '3:40', description: '6x4min @ 3:40/km Norwegian' },
      { id: 'tempo', type: 'tempo', label: 'Tempo/MP', targetDistance: 10, targetPace: '4:22', description: '10km @ 4:22/km' },
      { id: 'long', type: 'long', label: 'Long Run', targetDistance: 27, targetPace: '5:05', description: '27km @ 5:05/km' },
    ],
  },
  {
    week: 8,
    sessions: [
      { id: 'easy', type: 'easy', label: 'Easy Run', targetDistance: 22, targetPace: '5:30', description: '22km @ 5:30/km' },
      { id: 'quality', type: 'quality', label: 'Quality/Intervals', targetDistance: null, targetPace: '3:38', description: '6x4min @ 3:38/km Norwegian' },
      { id: 'tempo', type: 'tempo', label: 'Tempo/MP', targetDistance: 11, targetPace: '4:20', description: '11km @ 4:20/km' },
      { id: 'long', type: 'long', label: 'Long Run', targetDistance: 28, targetPace: '5:00', description: '28km @ 5:00/km' },
    ],
  },

  // ─── PHASE 2: BUILD & RACE PREP (Weeks 9–20) ──────────────────────────────
  {
    week: 9,
    sessions: [
      { id: 'easy', type: 'easy', label: 'Easy Run', targetDistance: 22, targetPace: '5:30', description: '22km @ 5:30/km' },
      { id: 'quality', type: 'quality', label: 'Quality/Intervals', targetDistance: null, targetPace: '4:05', description: '10x1km @ 4:05/km' },
      { id: 'tempo', type: 'tempo', label: 'Tempo/MP', targetDistance: 10, targetPace: '4:20', description: '10km @ 4:20/km' },
      { id: 'long', type: 'long', label: 'Long Run', targetDistance: 29, targetPace: '5:05', description: '29km @ 5:05/km' },
    ],
  },
  {
    week: 10,
    sessions: [
      { id: 'easy', type: 'easy', label: 'Easy Run', targetDistance: 22, targetPace: '5:25', description: '22km @ 5:25/km' },
      { id: 'quality', type: 'quality', label: 'Quality/Intervals', targetDistance: null, targetPace: '3:50', description: '12x800m @ 3:50/km' },
      { id: 'tempo', type: 'tempo', label: 'Tempo/MP', targetDistance: 11, targetPace: '4:18', description: '11km @ 4:18/km' },
      { id: 'long', type: 'long', label: 'Long Run', targetDistance: 30, targetPace: '5:00', description: '30km @ 5:00/km' },
    ],
  },
  {
    week: 11,
    sessions: [
      { id: 'easy', type: 'easy', label: 'Easy Run', targetDistance: 22, targetPace: '5:25', description: '22km @ 5:25/km' },
      { id: 'quality', type: 'quality', label: 'Quality/Intervals', targetDistance: null, targetPace: '3:48', description: '12x800m @ 3:48/km' },
      { id: 'tempo', type: 'tempo', label: 'Tempo/MP', targetDistance: 12, targetPace: '4:15', description: '12km @ 4:15/km' },
      { id: 'long', type: 'long', label: 'Long Run', targetDistance: 31, targetPace: '5:00', description: '31km @ 5:00/km' },
    ],
  },
  {
    week: 12,
    sessions: [
      { id: 'easy', type: 'easy', label: 'Easy Run', targetDistance: 18, targetPace: '5:25', description: '18km @ 5:25/km' },
      { id: 'quality', type: 'race', label: '10K Time Trial', targetDistance: 10, targetPace: null, description: '10K TIME TRIAL — target sub-40:00' },
      { id: 'tempo', type: 'tempo', label: 'Tempo/MP', targetDistance: 8, targetPace: '4:20', description: '8km @ 4:20/km' },
      { id: 'long', type: 'long', label: 'Long Run', targetDistance: 26, targetPace: '5:00', description: '26km @ 5:00/km' },
    ],
  },
  {
    week: 13,
    sessions: [
      { id: 'easy', type: 'easy', label: 'Easy Run', targetDistance: 22, targetPace: '5:20', description: '22km @ 5:20/km' },
      { id: 'quality', type: 'quality', label: 'Quality/Intervals', targetDistance: null, targetPace: '4:10', description: '6x2km @ 4:10/km' },
      { id: 'tempo', type: 'tempo', label: 'Tempo/MP', targetDistance: 12, targetPace: '4:16', description: '12km last 6km @ 4:16 MP' },
      { id: 'long', type: 'long', label: 'Long Run', targetDistance: 32, targetPace: '4:55', description: '32km last 8km @ 4:16' },
    ],
  },
  {
    week: 14,
    sessions: [
      { id: 'easy', type: 'easy', label: 'Easy Run', targetDistance: 22, targetPace: '5:20', description: '22km @ 5:20/km' },
      { id: 'quality', type: 'quality', label: 'Quality/Intervals', targetDistance: null, targetPace: '4:08', description: '6x2km @ 4:08/km' },
      { id: 'tempo', type: 'tempo', label: 'Tempo/MP', targetDistance: 13, targetPace: '4:16', description: '13km last 8km @ 4:16 MP' },
      { id: 'long', type: 'long', label: 'Long Run', targetDistance: 33, targetPace: '4:55', description: '33km last 8km @ 4:16' },
    ],
  },
  {
    week: 15,
    sessions: [
      { id: 'easy', type: 'easy', label: 'Easy Run', targetDistance: 22, targetPace: '5:20', description: '22km @ 5:20/km' },
      { id: 'quality', type: 'quality', label: 'Quality/Intervals', targetDistance: null, targetPace: '4:00', description: '8x1km @ 4:00/km' },
      { id: 'tempo', type: 'tempo', label: 'Tempo/MP', targetDistance: 14, targetPace: '4:15', description: '14km @ 4:15/km' },
      { id: 'long', type: 'long', label: 'Long Run', targetDistance: 34, targetPace: '4:55', description: '34km last 10km @ 4:16' },
    ],
  },
  {
    week: 16,
    sessions: [
      { id: 'easy', type: 'easy', label: 'Easy Run', targetDistance: 22, targetPace: '5:15', description: '22km @ 5:15/km' },
      { id: 'quality', type: 'quality', label: 'Quality/Intervals', targetDistance: null, targetPace: '4:05', description: '6x2km @ 4:05/km' },
      { id: 'tempo', type: 'tempo', label: 'Tempo/MP', targetDistance: 14, targetPace: '4:16', description: '14km last 10km @ 4:16 MP' },
      { id: 'long', type: 'long', label: 'Long Run', targetDistance: 35, targetPace: '4:55', description: '35km last 12km @ 4:16' },
    ],
  },
  {
    week: 17,
    sessions: [
      { id: 'easy', type: 'easy', label: 'Easy Run', targetDistance: 18, targetPace: '5:20', description: '18km @ 5:20/km' },
      { id: 'quality', type: 'race', label: 'Half Marathon', targetDistance: 21.1, targetPace: null, description: 'HALF MARATHON — target sub-1:23:00' },
      { id: 'tempo', type: 'recovery', label: 'Recovery Run', targetDistance: 8, targetPace: null, description: '8km easy — recovery' },
      { id: 'long', type: 'long', label: 'Long Run', targetDistance: 28, targetPace: '4:55', description: '28km @ 4:55/km' },
    ],
  },
  {
    week: 18,
    sessions: [
      { id: 'easy', type: 'easy', label: 'Easy Run', targetDistance: 22, targetPace: '5:15', description: '22km @ 5:15/km' },
      { id: 'quality', type: 'quality', label: 'Quality/Intervals', targetDistance: null, targetPace: '4:03', description: '6x2km @ 4:03/km' },
      { id: 'tempo', type: 'tempo', label: 'Tempo/MP', targetDistance: 15, targetPace: '4:14', description: '15km last 12km @ 4:14 MP' },
      { id: 'long', type: 'long', label: 'Long Run', targetDistance: 35, targetPace: '4:55', description: '35km last 14km @ 4:16' },
    ],
  },
  {
    week: 19,
    sessions: [
      { id: 'easy', type: 'easy', label: 'Easy Run', targetDistance: 22, targetPace: '5:15', description: '22km @ 5:15/km' },
      { id: 'quality', type: 'quality', label: 'Quality/Intervals', targetDistance: null, targetPace: '4:03', description: '6x2km @ 4:03/km' },
      { id: 'tempo', type: 'tempo', label: 'Tempo/MP', targetDistance: 15, targetPace: '4:14', description: '15km @ 4:14/km' },
      { id: 'long', type: 'long', label: 'Long Run', targetDistance: 35, targetPace: '4:55', description: '35km last 16km @ 4:16' },
    ],
  },
  {
    week: 20,
    sessions: [
      { id: 'easy', type: 'easy', label: 'Easy Run', targetDistance: 22, targetPace: '5:15', description: '22km @ 5:15/km — step-back' },
      { id: 'quality', type: 'quality', label: 'Quality/Intervals', targetDistance: null, targetPace: '4:05', description: '6x2km @ 4:05/km step-back' },
      { id: 'tempo', type: 'tempo', label: 'Tempo/MP', targetDistance: 12, targetPace: '4:15', description: '12km @ 4:15/km' },
      { id: 'long', type: 'long', label: 'Long Run', targetDistance: 28, targetPace: '5:00', description: '28km @ 5:00/km — step-back' },
    ],
  },

  // ─── TAPER & RACE (Weeks 21–26) ────────────────────────────────────────────
  {
    week: 21,
    sessions: [
      { id: 'easy', type: 'easy', label: 'Easy Run', targetDistance: 20, targetPace: '5:15', description: '20km @ 5:15/km' },
      { id: 'quality', type: 'quality', label: 'Quality/Intervals', targetDistance: null, targetPace: '4:02', description: '8x1km @ 4:02/km' },
      { id: 'tempo', type: 'tempo', label: 'Tempo/MP', targetDistance: 10, targetPace: '4:15', description: '10km @ 4:15/km' },
      { id: 'long', type: 'long', label: 'Long Run', targetDistance: 26, targetPace: '4:55', description: '26km @ 4:55/km' },
    ],
  },
  {
    week: 22,
    sessions: [
      { id: 'easy', type: 'easy', label: 'Easy Run', targetDistance: 18, targetPace: '5:15', description: '18km @ 5:15/km' },
      { id: 'quality', type: 'quality', label: 'Quality/Intervals', targetDistance: null, targetPace: '4:00', description: '6x1km @ 4:00/km' },
      { id: 'tempo', type: 'tempo', label: 'Tempo/MP', targetDistance: 8, targetPace: '4:15', description: '8km @ 4:15/km' },
      { id: 'long', type: 'long', label: 'Long Run', targetDistance: 20, targetPace: '4:50', description: '20km @ 4:50/km' },
    ],
  },
  {
    week: 23,
    sessions: [
      { id: 'easy', type: 'easy', label: 'Easy Run', targetDistance: 16, targetPace: '5:15', description: '16km @ 5:15/km' },
      { id: 'quality', type: 'quality', label: 'Quality/Intervals', targetDistance: null, targetPace: '4:00', description: '5x1km @ 4:00/km sharpener' },
      { id: 'tempo', type: 'tempo', label: 'Tempo/MP', targetDistance: 8, targetPace: '4:15', description: '8km @ 4:15/km' },
      { id: 'long', type: 'long', label: 'Long Run', targetDistance: 18, targetPace: '4:50', description: '18km @ 4:50/km' },
    ],
  },
  {
    week: 24,
    sessions: [
      { id: 'easy', type: 'easy', label: 'Easy Run', targetDistance: 14, targetPace: '5:15', description: '14km @ 5:15/km' },
      { id: 'quality', type: 'quality', label: 'Quality/Intervals', targetDistance: null, targetPace: '3:58', description: '5x1km @ 3:58/km sharpener' },
      { id: 'tempo', type: 'tempo', label: 'Tempo/MP', targetDistance: 6, targetPace: '4:15', description: '6km @ 4:15/km' },
      { id: 'long', type: 'long', label: 'Long Run', targetDistance: 14, targetPace: '4:50', description: '14km @ 4:50/km' },
    ],
  },
  {
    week: 25,
    sessions: [
      { id: 'easy', type: 'recovery', label: 'Easy Run', targetDistance: 8, targetPace: null, description: '8km easy — pre-race week' },
      { id: 'quality', type: 'quality', label: 'Quality/Intervals', targetDistance: null, targetPace: '4:00', description: '3x1km @ 4:00 sharpener' },
      { id: 'tempo', type: 'recovery', label: 'Recovery Run', targetDistance: 5, targetPace: null, description: '5km easy — keep legs fresh' },
      { id: 'long', type: 'long', label: 'Long Run', targetDistance: 10, targetPace: '4:50', description: '10km @ 4:50/km' },
    ],
  },
  {
    week: 26,
    sessions: [
      { id: 'easy', type: 'recovery', label: 'Easy Run', targetDistance: 5, targetPace: null, description: '5km easy — recovery' },
      { id: 'quality', type: 'quality', label: 'Quality/Intervals', targetDistance: null, targetPace: '4:00', description: '3x1km @ 4:00 sharpener' },
      { id: 'tempo', type: 'recovery', label: 'Recovery Run', targetDistance: 3, targetPace: null, description: '3km easy — recovery' },
      { id: 'long', type: 'race', label: 'Auckland Marathon', targetDistance: 42.2, targetPace: null, description: 'AUCKLAND MARATHON — target sub-3:00:00' },
    ],
  },

  // ─── RECOVERY & HYROX BLOCK (Weeks 27–32) ─────────────────────────────────
  {
    week: 27,
    hyrox: true,
    dateRange: '2–8 Nov',
    focusNote: 'Full recovery. No structured training. Walk, swim, or easy cycling only.',
    sessions: [
      { id: 'easy', type: 'recovery', label: 'Easy Jog', targetDistance: 3, targetPace: null, description: 'Wed/Sat easy jogs — 20–30min @ 6:00/km if legs feel ok' },
      { id: 'quality', type: 'recovery', label: 'Rest', targetDistance: null, targetPace: null, description: 'REST — full recovery' },
      { id: 'tempo', type: 'recovery', label: 'Rest', targetDistance: null, targetPace: null, description: 'REST — full recovery' },
      { id: 'long', type: 'recovery', label: 'Easy Jog', targetDistance: null, targetPace: null, description: 'Sat easy 30min jog @ 5:50/km' },
    ],
    dailySchedule: [
      { day: 'Mon', activity: 'REST or easy 20min walk', type: 'rest' },
      { day: 'Tue', activity: 'REST', type: 'rest' },
      { day: 'Wed', activity: 'Easy 20–30min jog @ 6:00/km — only if legs feel ok', type: 'easy' },
      { day: 'Thu', activity: 'REST', type: 'rest' },
      { day: 'Fri', activity: 'REST', type: 'rest' },
      { day: 'Sat', activity: 'Easy 30min jog @ 5:50/km', type: 'easy' },
      { day: 'Sun', activity: 'REST', type: 'rest' },
    ],
  },
  {
    week: 28,
    hyrox: true,
    dateRange: '9–15 Nov',
    focusNote: 'Active recovery. Reintroduce easy movement. No heavy loading.',
    sessions: [
      { id: 'easy', type: 'easy', label: 'Easy Runs', targetDistance: 13, targetPace: '5:45', description: 'Tue 7km @ 5:50/km + Thu 6km @ 5:45/km' },
      { id: 'quality', type: 'recovery', label: 'Gym A (60%)', targetDistance: null, targetPace: null, description: 'Mon — Gym Session A at 60% effort, light loads' },
      { id: 'tempo', type: 'recovery', label: 'Gym B (60%)', targetDistance: null, targetPace: null, description: 'Wed — Gym Session B at 60% effort' },
      { id: 'long', type: 'easy', label: 'Easy Long Run', targetDistance: 10, targetPace: '5:30', description: 'Sat 10km @ 5:30/km' },
    ],
    dailySchedule: [
      { day: 'Mon', activity: 'Gym Session A — 60% effort, light loads only', type: 'gym' },
      { day: 'Tue', activity: 'Easy 7km @ 5:50/km', type: 'easy' },
      { day: 'Wed', activity: 'Gym Session B — 60% effort', type: 'gym' },
      { day: 'Thu', activity: 'Easy 6km @ 5:45/km', type: 'easy' },
      { day: 'Fri', activity: 'REST', type: 'rest' },
      { day: 'Sat', activity: 'Easy 10km @ 5:30/km', type: 'easy' },
      { day: 'Sun', activity: 'REST', type: 'rest' },
    ],
  },
  {
    week: 29,
    hyrox: true,
    dateRange: '16–22 Nov',
    focusNote: 'First proper Hyrox week. Reintroduce intervals and station work.',
    sessions: [
      { id: 'easy', type: 'quality', label: 'Intervals', targetDistance: 6, targetPace: '4:20', description: 'Tue — 6×1km @ 4:20/km, 90s rest' },
      { id: 'quality', type: 'tempo', label: 'Tempo', targetDistance: 8, targetPace: '4:50', description: 'Thu — 8km @ 4:50/km tempo' },
      { id: 'tempo', type: 'quality', label: 'Hyrox Circuit ×2', targetDistance: null, targetPace: null, description: 'Sat — Gym C: Hyrox circuit ×2 + BBJ + sled finisher' },
      { id: 'long', type: 'long', label: 'Long Run', targetDistance: 13, targetPace: '5:10', description: 'Sun — 13km @ 5:10/km easy long run' },
    ],
    dailySchedule: [
      { day: 'Mon', activity: 'Gym Session A — return to Phase 1 loads', type: 'gym' },
      { day: 'Tue', activity: '6×1km @ 4:20/km, 90s rest', type: 'quality' },
      { day: 'Wed', activity: 'Gym Session B', type: 'gym' },
      { day: 'Thu', activity: '8km @ 4:50/km tempo', type: 'tempo' },
      { day: 'Fri', activity: 'REST', type: 'rest' },
      { day: 'Sat', activity: 'Gym Session C — Hyrox circuit ×2 rounds + BBJ + sled finisher', type: 'hyrox' },
      { day: 'Sun', activity: '13km @ 5:10/km easy long run', type: 'long' },
    ],
  },
  {
    week: 30,
    hyrox: true,
    dateRange: '23–29 Nov',
    focusNote: 'Build circuit volume and running pace. Increase sled push toward race weight.',
    sessions: [
      { id: 'easy', type: 'quality', label: 'Run-Station Drill', targetDistance: 4, targetPace: '4:30', description: 'Tue — 4×(1km @ 4:30/km + 20 wall balls immediately)' },
      { id: 'quality', type: 'tempo', label: 'Tempo', targetDistance: 10, targetPace: '4:45', description: 'Thu — 10km @ 4:45/km tempo' },
      { id: 'tempo', type: 'quality', label: 'Hyrox Circuit ×3', targetDistance: null, targetPace: null, description: 'Sat — Gym C: Hyrox circuit ×3 + BBJ timed + sled @ race weight' },
      { id: 'long', type: 'long', label: 'Long Run + Strides', targetDistance: 14, targetPace: '5:05', description: 'Sun — 14km @ 5:05/km + strides' },
    ],
    dailySchedule: [
      { day: 'Mon', activity: 'Gym Session A', type: 'gym' },
      { day: 'Tue', activity: 'Run-station drill: 4×(1km @ 4:30/km + 20 wall balls immediately)', type: 'quality' },
      { day: 'Wed', activity: 'Gym Session B', type: 'gym' },
      { day: 'Thu', activity: '10km @ 4:45/km tempo', type: 'tempo' },
      { day: 'Fri', activity: 'REST', type: 'rest' },
      { day: 'Sat', activity: 'Gym Session C — Hyrox circuit ×3 rounds + BBJ timed + sled @ race weight', type: 'hyrox' },
      { day: 'Sun', activity: '14km @ 5:05/km + strides', type: 'long' },
    ],
  },
  {
    week: 31,
    hyrox: true,
    dateRange: '30 Nov–6 Dec',
    focusNote: 'Peak Hyrox week. Session C is a full race simulation.',
    sessions: [
      { id: 'easy', type: 'quality', label: 'Run-Station Drill', targetDistance: 6, targetPace: '4:20', description: 'Tue — 6×(1km @ 4:20/km + 20 wall balls + 25m sled pull)' },
      { id: 'quality', type: 'tempo', label: 'Tempo', targetDistance: 10, targetPace: '4:40', description: 'Thu — 10km @ 4:40/km tempo' },
      { id: 'tempo', type: 'race', label: 'Full Hyrox Simulation', targetDistance: null, targetPace: null, description: 'Sat — Full race simulation: all 8 stations + runs at race effort' },
      { id: 'long', type: 'easy', label: 'Flush Run', targetDistance: 14, targetPace: '5:15', description: 'Sun — 14km easy @ 5:15/km — flush the legs' },
    ],
    dailySchedule: [
      { day: 'Mon', activity: 'Gym Session A — maintain loads', type: 'gym' },
      { day: 'Tue', activity: 'Run-station drill: 6×(1km @ 4:20/km + 20 wall balls + 25m sled pull)', type: 'quality' },
      { day: 'Wed', activity: 'Gym Session B', type: 'gym' },
      { day: 'Thu', activity: '10km @ 4:40/km tempo', type: 'tempo' },
      { day: 'Fri', activity: 'REST', type: 'rest' },
      { day: 'Sat', activity: 'Full Hyrox simulation — race effort, all 8 stations + runs', type: 'race' },
      { day: 'Sun', activity: '14km easy @ 5:15/km — flush the legs', type: 'easy' },
    ],
  },
  {
    week: 32,
    hyrox: true,
    dateRange: '7–13 Dec',
    focusNote: 'Race week. Cut volume 50%. Sleep and nutrition are the performance levers.',
    sessions: [
      { id: 'easy', type: 'quality', label: 'Sharpener', targetDistance: 4, targetPace: '4:15', description: 'Tue — 4×1km @ 4:15/km, full rest between' },
      { id: 'quality', type: 'easy', label: 'Easy Run', targetDistance: 5, targetPace: '5:20', description: 'Thu — Easy 5km @ 5:20/km' },
      { id: 'tempo', type: 'recovery', label: 'REST', targetDistance: null, targetPace: null, description: 'Fri — REST. Prep gear, nutrition, sleep.' },
      { id: 'long', type: 'race', label: 'HYROX RACE', targetDistance: null, targetPace: null, description: 'Sat/Sun — HYROX RACE — target sub-1:05:00' },
    ],
    dailySchedule: [
      { day: 'Mon', activity: 'Gym Session A — 60% effort, light loads', type: 'gym' },
      { day: 'Tue', activity: '4×1km @ 4:15/km sharpener — full rest between reps', type: 'quality' },
      { day: 'Wed', activity: 'Gym Session B — upper only, light', type: 'gym' },
      { day: 'Thu', activity: 'Easy 5km @ 5:20/km', type: 'easy' },
      { day: 'Fri', activity: 'REST — prep gear, nutrition, sleep', type: 'rest' },
      { day: 'Sat/Sun', activity: 'HYROX RACE — target sub-1:05:00', type: 'race' },
    ],
  },
]
