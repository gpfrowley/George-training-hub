export const RUNNING_PLAN = [
  // ─── PHASE 1: STRENGTH FOUNDATION + MAINTAIN RUNNING (Weeks 1–6, 20 Jul–30 Aug) ───
  {
    week: 1,
    sessions: [
      { id: 'mon', type: 'easy', label: 'Easy Run', targetDistance: 8, targetPace: '5:40', description: '8km easy @ 5:30–5:50/km' },
      { id: 'tue', type: 'quality', label: 'Quality — Norwegian 4x4', targetDistance: null, targetPace: '3:45', description: '4x4min @ ~3:45/km, 3min jog recovery' },
      { id: 'thu', type: 'easy', label: 'Easy/Steady Run', targetDistance: 8, targetPace: '5:40', description: '8km easy/steady @ 5:30–5:50/km' },
      { id: 'sun', type: 'long', label: 'Long Run', targetDistance: 14, targetPace: '5:35', description: '14km easy long run @ 5:20–5:45/km' },
    ],
  },
  {
    week: 2,
    sessions: [
      { id: 'mon', type: 'easy', label: 'Easy Run', targetDistance: 8, targetPace: '5:40', description: '8km easy @ 5:30–5:50/km' },
      { id: 'tue', type: 'quality', label: 'Quality — Norwegian 4x4', targetDistance: null, targetPace: '3:45', description: '4x4min @ ~3:45/km, 3min jog recovery' },
      { id: 'thu', type: 'easy', label: 'Easy/Steady Run', targetDistance: 9, targetPace: '5:40', description: '9km easy/steady @ 5:30–5:50/km' },
      { id: 'sun', type: 'long', label: 'Long Run', targetDistance: 15, targetPace: '5:35', description: '15km easy long run @ 5:20–5:45/km' },
    ],
  },
  {
    week: 3,
    sessions: [
      { id: 'mon', type: 'easy', label: 'Easy Run', targetDistance: 9, targetPace: '5:35', description: '9km easy @ 5:25–5:45/km' },
      { id: 'tue', type: 'quality', label: 'Quality — Norwegian 4x4', targetDistance: null, targetPace: '3:45', description: '5x4min @ ~3:45/km, 3min jog recovery' },
      { id: 'thu', type: 'easy', label: 'Easy/Steady Run', targetDistance: 9, targetPace: '5:35', description: '9km easy/steady @ 5:25–5:45/km' },
      { id: 'sun', type: 'long', label: 'Long Run', targetDistance: 15, targetPace: '5:30', description: '15km easy long run @ 5:20–5:40/km' },
    ],
  },
  {
    week: 4,
    sessions: [
      { id: 'mon', type: 'easy', label: 'Easy Run', targetDistance: 9, targetPace: '5:35', description: '9km easy @ 5:25–5:45/km' },
      { id: 'tue', type: 'quality', label: 'Quality — Norwegian 4x4', targetDistance: null, targetPace: '3:45', description: '5x4min @ ~3:45/km, 3min jog recovery' },
      { id: 'thu', type: 'easy', label: 'Easy/Steady Run', targetDistance: 10, targetPace: '5:35', description: '10km easy/steady @ 5:25–5:45/km' },
      { id: 'sun', type: 'long', label: 'Long Run', targetDistance: 16, targetPace: '5:30', description: '16km easy long run @ 5:15–5:40/km' },
    ],
  },
  {
    week: 5,
    sessions: [
      { id: 'mon', type: 'easy', label: 'Easy Run', targetDistance: 10, targetPace: '5:30', description: '10km easy @ 5:20–5:40/km' },
      { id: 'tue', type: 'quality', label: 'Quality — Norwegian 4x4', targetDistance: null, targetPace: '3:42', description: '5x4min @ ~3:42/km, 3min jog recovery' },
      { id: 'thu', type: 'easy', label: 'Easy/Steady Run', targetDistance: 10, targetPace: '5:30', description: '10km easy/steady @ 5:20–5:40/km' },
      { id: 'sun', type: 'long', label: 'Long Run', targetDistance: 16, targetPace: '5:25', description: '16km easy long run @ 5:15–5:40/km' },
    ],
  },
  {
    week: 6,
    sessions: [
      { id: 'mon', type: 'easy', label: 'Easy Run', targetDistance: 10, targetPace: '5:30', description: '10km easy @ 5:20–5:40/km' },
      { id: 'tue', type: 'quality', label: 'Quality — Norwegian 4x4', targetDistance: null, targetPace: '3:42', description: '5x4min @ ~3:42/km, 3min jog recovery' },
      { id: 'thu', type: 'easy', label: 'Easy/Steady Run', targetDistance: 11, targetPace: '5:30', description: '11km easy/steady @ 5:20–5:40/km' },
      { id: 'sun', type: 'long', label: 'Long Run', targetDistance: 17, targetPace: '5:25', description: '17km easy long run @ 5:15–5:35/km — end of Phase 1' },
    ],
  },

  // ─── PHASE 2: HM BUILD + HYROX INTEGRATION (Weeks 7–11, 31 Aug–4 Oct) ─────────
  {
    week: 7,
    sessions: [
      { id: 'mon', type: 'easy', label: 'Easy Run', targetDistance: 10, targetPace: '5:35', description: '10km easy @ 5:25–5:45/km' },
      { id: 'tue', type: 'quality', label: 'Threshold Intervals', targetDistance: null, targetPace: '3:55', description: '5x1km @ ~3:55/km, 90s jog recovery' },
      { id: 'thu', type: 'tempo', label: 'Tempo Run', targetDistance: 9, targetPace: '4:10', description: '3km easy + 20min @ ~4:05/km threshold + 2km easy (~9km total)' },
      { id: 'fri', type: 'easy', label: 'Optional Easy Run', targetDistance: 6, targetPace: '5:40', description: 'Optional 6km easy @ 5:30–5:50/km — only if volume allows' },
      { id: 'sun', type: 'long', label: 'Long Run', targetDistance: 17, targetPace: '5:25', description: '17km long run, last 20min @ ~3:55/km HM effort' },
    ],
  },
  {
    week: 8,
    sessions: [
      { id: 'mon', type: 'easy', label: 'Easy Run', targetDistance: 10, targetPace: '5:35', description: '10km easy @ 5:25–5:45/km' },
      { id: 'tue', type: 'quality', label: 'Threshold Intervals', targetDistance: null, targetPace: '3:53', description: '5x1km @ ~3:53/km, 90s jog recovery' },
      { id: 'thu', type: 'tempo', label: 'Tempo Run', targetDistance: 11, targetPace: '4:08', description: '3km easy + 22min @ ~4:03/km threshold + 2km easy (~11km total)' },
      { id: 'fri', type: 'easy', label: 'Optional Easy Run', targetDistance: 7, targetPace: '5:40', description: 'Optional 7km easy @ 5:30–5:50/km — only if volume allows' },
      { id: 'sun', type: 'long', label: 'Long Run', targetDistance: 18, targetPace: '5:25', description: '18km long run, last 22min @ ~3:54/km HM effort' },
    ],
  },
  {
    week: 9,
    sessions: [
      { id: 'mon', type: 'easy', label: 'Easy Run', targetDistance: 8, targetPace: '5:40', description: '8km easy @ 5:30–5:50/km — time trial week, reduced volume' },
      { id: 'tue', type: 'race', label: '10K Time Trial', targetDistance: 10, targetPace: null, description: '10K TIME TRIAL — full effort, target sub-40:00 (CHECKPOINT)' },
      { id: 'thu', type: 'recovery', label: 'Shakeout', targetDistance: 6, targetPace: null, description: '6km easy shakeout + 4x100m strides' },
      { id: 'sun', type: 'long', label: 'Long Run', targetDistance: 14, targetPace: '5:40', description: '14km easy @ 5:30–5:50/km — reduced post time trial' },
    ],
  },
  {
    week: 10,
    sessions: [
      { id: 'mon', type: 'easy', label: 'Easy Run', targetDistance: 10, targetPace: '5:35', description: '10km easy @ 5:25–5:45/km' },
      { id: 'tue', type: 'quality', label: 'Threshold Intervals', targetDistance: null, targetPace: '3:52', description: '6x1km @ ~3:52/km, 90s jog recovery' },
      { id: 'thu', type: 'tempo', label: 'Tempo Run', targetDistance: 12, targetPace: '4:05', description: '3km easy + 24min @ ~4:00/km threshold + 2km easy (~12km total)' },
      { id: 'fri', type: 'easy', label: 'Optional Easy Run', targetDistance: 7, targetPace: '5:40', description: 'Optional 7km easy @ 5:30–5:50/km — only if volume allows' },
      { id: 'sun', type: 'long', label: 'Long Run', targetDistance: 18, targetPace: '5:20', description: '18km long run, last 25min @ ~3:55/km HM effort' },
    ],
  },
  {
    week: 11,
    sessions: [
      { id: 'mon', type: 'easy', label: 'Easy Run', targetDistance: 11, targetPace: '5:30', description: '11km easy @ 5:20–5:40/km' },
      { id: 'tue', type: 'quality', label: 'Threshold Intervals', targetDistance: null, targetPace: '3:50', description: '6x1km @ ~3:50/km, 90s jog recovery' },
      { id: 'thu', type: 'tempo', label: 'Tempo Run', targetDistance: 15, targetPace: '4:00', description: '3km easy + 9km @ ~3:58/km threshold + 3km easy (15km total)' },
      { id: 'fri', type: 'easy', label: 'Optional Easy Run', targetDistance: 8, targetPace: '5:35', description: 'Optional 8km easy @ 5:25–5:45/km — only if volume allows' },
      { id: 'sun', type: 'long', label: 'Long Run', targetDistance: 19, targetPace: '5:20', description: '19km long run, last 30min @ ~3:53/km HM effort — Phase 2 peak' },
    ],
  },

  // ─── PHASE 3: SHARPEN + TAPER FOR AUCKLAND HM (Weeks 12–15, 5 Oct–1 Nov) ─────
  {
    week: 12,
    sessions: [
      { id: 'mon', type: 'easy', label: 'Easy Run', targetDistance: 10, targetPace: '5:30', description: '10km easy @ 5:20–5:40/km' },
      { id: 'tue', type: 'quality', label: 'HM-Pace Intervals', targetDistance: null, targetPace: '3:54', description: '5x1.5km @ ~3:54/km HM pace, 2min jog recovery' },
      { id: 'thu', type: 'tempo', label: 'Tempo Run', targetDistance: 10, targetPace: '4:05', description: '3km easy + 25min @ ~3:58/km threshold + 2km easy (~10km total)' },
      { id: 'fri', type: 'easy', label: 'Optional Easy Run', targetDistance: 8, targetPace: '5:35', description: 'Optional 8km easy @ 5:25–5:45/km' },
      { id: 'sun', type: 'long', label: 'Long Run', targetDistance: 18, targetPace: '5:20', description: '18km long run, last 30min @ ~3:54/km HM race effort' },
    ],
  },
  {
    week: 13,
    sessions: [
      { id: 'mon', type: 'easy', label: 'Easy Run', targetDistance: 10, targetPace: '5:30', description: '10km easy @ 5:20–5:40/km' },
      { id: 'tue', type: 'quality', label: 'HM-Pace Intervals', targetDistance: null, targetPace: '3:52', description: '6x1km @ ~3:52/km HM pace, 90s jog recovery' },
      { id: 'thu', type: 'tempo', label: 'Tempo Run', targetDistance: 9, targetPace: '4:05', description: '3km easy + 20min @ ~3:58/km threshold + 2km easy (9km total)' },
      { id: 'fri', type: 'easy', label: 'Optional Easy Run', targetDistance: 7, targetPace: '5:35', description: 'Optional 7km easy @ 5:25–5:45/km' },
      { id: 'sun', type: 'long', label: 'Dress Rehearsal Long Run', targetDistance: 17, targetPace: '5:15', description: 'DRESS REHEARSAL — 17km with last 6km @ ~3:55/km HM race pace' },
    ],
  },
  {
    week: 14,
    sessions: [
      { id: 'mon', type: 'easy', label: 'Easy Run', targetDistance: 7, targetPace: '5:35', description: '7km easy @ 5:25–5:45/km — taper begins, volume down ~30%' },
      { id: 'tue', type: 'quality', label: 'HM-Pace Intervals', targetDistance: null, targetPace: '3:52', description: '4x1km @ ~3:52/km HM pace, 2min jog recovery — reduced volume, intensity maintained' },
      { id: 'thu', type: 'tempo', label: 'Tempo Run', targetDistance: 7, targetPace: '4:05', description: '2km easy + 15min @ ~3:58/km threshold + 2km easy (7km total)' },
      { id: 'fri', type: 'easy', label: 'Optional Easy Run', targetDistance: 5, targetPace: '5:35', description: 'Optional 5km easy @ 5:25–5:45/km' },
      { id: 'sun', type: 'long', label: 'Taper Long Run', targetDistance: 12, targetPace: '5:20', description: '12km easy, last 15min @ ~3:55/km HM effort — taper long run' },
    ],
  },
  {
    week: 15,
    sessions: [
      { id: 'mon', type: 'easy', label: 'Easy Run', targetDistance: 5, targetPace: '5:40', description: '5km easy shakeout @ 5:30–5:50/km' },
      { id: 'tue', type: 'quality', label: 'Strides', targetDistance: 4, targetPace: '5:40', description: '4km easy + 4x100m strides' },
      { id: 'thu', type: 'recovery', label: 'Strides', targetDistance: 3, targetPace: '5:40', description: '3km easy + 4x100m strides — legs staying fresh' },
      { id: 'sun', type: 'race', label: 'Auckland Half Marathon', targetDistance: 21.1, targetPace: null, description: 'AUCKLAND HALF MARATHON — Sunday 1 November 2026 — target sub-1:22:00 (CHECKPOINT). Supportive race, not primary goal.' },
    ],
  },

  // ─── PHASE 4: HYROX-SPECIFIC PEAK BLOCK (Weeks 16–20, 2 Nov–6 Dec) ────────────
  {
    week: 16,
    hyrox: true,
    dateRange: '2–8 Nov',
    focusNote: 'Bridge week after Auckland HM. Easy running only — no quality, no tempo. Legs recover before the Hyrox-specific block begins.',
    sessions: [
      { id: 'easy', type: 'easy', label: 'Easy Runs', targetDistance: 12, targetPace: '5:45', description: 'Mon 6km + Thu 6km @ 5:35–5:55/km — bridge week, easy only' },
      { id: 'quality', type: 'recovery', label: 'Gym A', targetDistance: null, targetPace: null, description: 'Tue — Gym Session A, return to base loads' },
      { id: 'tempo', type: 'recovery', label: 'Gym B', targetDistance: null, targetPace: null, description: 'Fri — Gym Session B' },
      { id: 'long', type: 'easy', label: 'Easy Long Run', targetDistance: 10, targetPace: '5:30', description: 'Sun 10km easy @ 5:20–5:40/km' },
    ],
    dailySchedule: [
      { day: 'Mon', activity: 'Easy 6km @ 5:35–5:55/km — flush the legs post-HM', type: 'easy' },
      { day: 'Tue', activity: 'Gym Session A — return to base loads', type: 'gym' },
      { day: 'Wed', activity: 'REST', type: 'rest' },
      { day: 'Thu', activity: 'Easy 6km @ 5:35–5:55/km', type: 'easy' },
      { day: 'Fri', activity: 'Gym Session B', type: 'gym' },
      { day: 'Sat', activity: 'REST', type: 'rest' },
      { day: 'Sun', activity: 'Easy long run — 10km @ 5:20–5:40/km', type: 'easy' },
    ],
  },
  {
    week: 17,
    hyrox: true,
    dateRange: '9–15 Nov',
    focusNote: 'Running drops to a secondary role (~30–40km/week). Race-pace 1km efforts with short rest, plus compromised running directly after strength stations.',
    sessions: [
      { id: 'easy', type: 'easy', label: 'Easy Recovery Run', targetDistance: 8, targetPace: '5:50', description: 'Thu — 8km easy recovery @ 5:45–6:00/km' },
      { id: 'quality', type: 'quality', label: 'Race-Pace Efforts', targetDistance: 6, targetPace: '3:53', description: 'Tue — 6x1km @ ~3:53/km race pace, 60s rest' },
      { id: 'tempo', type: 'quality', label: 'Compromised Running', targetDistance: 2, targetPace: null, description: 'Wed — Gym Session D, then immediately 4x500m @ race effort (compromised running)' },
      { id: 'long', type: 'long', label: 'Long Run', targetDistance: 14, targetPace: '5:35', description: 'Sun — 14km easy @ 5:25–5:45/km' },
    ],
    dailySchedule: [
      { day: 'Mon', activity: 'Gym Session A', type: 'gym' },
      { day: 'Tue', activity: '6x1km @ ~3:53/km race pace, 60s rest', type: 'quality' },
      { day: 'Wed', activity: 'Gym Session D, then immediately 4x500m @ race effort — compromised running', type: 'hyrox' },
      { day: 'Thu', activity: 'Easy recovery 8km @ 5:45–6:00/km', type: 'easy' },
      { day: 'Fri', activity: 'Gym Session B', type: 'gym' },
      { day: 'Sat', activity: 'Gym Session C', type: 'gym' },
      { day: 'Sun', activity: '14km easy @ 5:25–5:45/km', type: 'long' },
    ],
  },
  {
    week: 18,
    hyrox: true,
    dateRange: '16–22 Nov',
    focusNote: 'Hyrox Simulation checkpoint this week — partial or full race simulation, log splits.',
    sessions: [
      { id: 'easy', type: 'easy', label: 'Easy Recovery Run', targetDistance: 8, targetPace: '5:50', description: 'Thu — 8km easy recovery @ 5:45–6:00/km' },
      { id: 'quality', type: 'quality', label: 'Race-Pace Efforts', targetDistance: 6, targetPace: '3:52', description: 'Tue — 6x1km @ ~3:52/km race pace, 60s rest' },
      { id: 'tempo', type: 'quality', label: 'Compromised Running', targetDistance: 2, targetPace: null, description: 'Wed — Gym Session D, then immediately 4x500m @ race effort (compromised running)' },
      { id: 'long', type: 'race', label: 'Hyrox Simulation', targetDistance: null, targetPace: null, description: 'Sat — Partial/full Hyrox race simulation: stations + runs at race effort — log splits (CHECKPOINT)' },
    ],
    dailySchedule: [
      { day: 'Mon', activity: 'Gym Session A', type: 'gym' },
      { day: 'Tue', activity: '6x1km @ ~3:52/km race pace, 60s rest', type: 'quality' },
      { day: 'Wed', activity: 'Gym Session D, then immediately 4x500m @ race effort — compromised running', type: 'hyrox' },
      { day: 'Thu', activity: 'Easy recovery 8km @ 5:45–6:00/km', type: 'easy' },
      { day: 'Fri', activity: 'REST — prep for simulation', type: 'rest' },
      { day: 'Sat', activity: 'Hyrox Simulation — partial/full race simulation, log splits', type: 'race' },
      { day: 'Sun', activity: 'Easy flush run — 8km @ 5:45–6:00/km', type: 'easy' },
    ],
  },
  {
    week: 19,
    hyrox: true,
    dateRange: '23–29 Nov',
    focusNote: 'Continue race-pace efforts and compromised running. Running stays secondary to the Hyrox strength/conditioning block.',
    sessions: [
      { id: 'easy', type: 'easy', label: 'Easy Recovery Run', targetDistance: 8, targetPace: '5:50', description: 'Thu — 8km easy recovery @ 5:45–6:00/km' },
      { id: 'quality', type: 'quality', label: 'Race-Pace Efforts', targetDistance: 6, targetPace: '3:52', description: 'Tue — 6x1km @ ~3:52/km race pace, 60s rest' },
      { id: 'tempo', type: 'quality', label: 'Compromised Running', targetDistance: 2, targetPace: null, description: 'Wed — Gym Session D, then immediately 4x500m @ race effort (compromised running)' },
      { id: 'long', type: 'long', label: 'Long Run', targetDistance: 14, targetPace: '5:35', description: 'Sun — 14km easy @ 5:25–5:45/km' },
    ],
    dailySchedule: [
      { day: 'Mon', activity: 'Gym Session A', type: 'gym' },
      { day: 'Tue', activity: '6x1km @ ~3:52/km race pace, 60s rest', type: 'quality' },
      { day: 'Wed', activity: 'Gym Session D, then immediately 4x500m @ race effort — compromised running', type: 'hyrox' },
      { day: 'Thu', activity: 'Easy recovery 8km @ 5:45–6:00/km', type: 'easy' },
      { day: 'Fri', activity: 'Gym Session B', type: 'gym' },
      { day: 'Sat', activity: 'Gym Session C', type: 'gym' },
      { day: 'Sun', activity: '14km easy @ 5:25–5:45/km', type: 'long' },
    ],
  },
  {
    week: 20,
    hyrox: true,
    dateRange: '30 Nov–6 Dec',
    focusNote: 'Taper-in week — running and gym volume down ~20–30% vs weeks 17–19. Intensity and technique stay sharp: short race-pace running touches, technique-only (not fatigue) work on sled push and burpee broad jumps. This begins the taper into Melbourne, not another peak week.',
    sessions: [
      { id: 'easy', type: 'easy', label: 'Easy Recovery Run', targetDistance: 6, targetPace: '5:50', description: 'Thu — 6km easy recovery @ 5:45–6:00/km — reduced' },
      { id: 'quality', type: 'quality', label: 'Race-Pace Touches', targetDistance: 4, targetPace: '3:50', description: 'Tue — 4x1km @ ~3:50/km race pace, 90s rest — shorter, sharp touches, not a full-volume session' },
      { id: 'tempo', type: 'recovery', label: 'Technique Touches', targetDistance: null, targetPace: null, description: 'Wed — Gym Session D, technique-only sled push & burpee broad jump touches (no fatigue, no conditioning finisher, no compromised running attached this week)' },
      { id: 'long', type: 'long', label: 'Long Run', targetDistance: 11, targetPace: '5:35', description: 'Sun — 11km easy @ 5:25–5:45/km — reduced ahead of the Dec 7 taper' },
    ],
    dailySchedule: [
      { day: 'Mon', activity: 'Gym Session A — reduced load (~70-75% of working weights), technique focus', type: 'gym' },
      { day: 'Tue', activity: '4x1km @ ~3:50/km race pace, 90s rest — short, sharp touches', type: 'quality' },
      { day: 'Wed', activity: 'Gym Session D — technique-only sled push & burpee broad jump touches, no fatigue, no finisher, no compromised running', type: 'gym' },
      { day: 'Thu', activity: 'Easy recovery 6km @ 5:45–6:00/km', type: 'easy' },
      { day: 'Fri', activity: 'Gym Session B — reduced load (~70-75% of working weights)', type: 'gym' },
      { day: 'Sat', activity: 'Gym Session C — reduced load (~70-75% of working weights)', type: 'gym' },
      { day: 'Sun', activity: '11km easy @ 5:25–5:45/km', type: 'long' },
    ],
  },

  // ─── PHASE 5: TAPER + RACE — HYROX MELBOURNE (Week 21, 7–10 Dec) ─────────────
  {
    week: 21,
    hyrox: true,
    dateRange: '7–10 Dec',
    focusNote: 'Sharp taper — volume down 50–60%. RACE: Thursday 10 December — Hyrox Melbourne, target sub-1:05:00.',
    sessions: [
      { id: 'easy', type: 'easy', label: 'Shakeout + Activation', targetDistance: 4, targetPace: '5:40', description: 'Mon — 4km easy shakeout + Gym: Race Week Activation' },
      { id: 'quality', type: 'recovery', label: 'Rest', targetDistance: null, targetPace: null, description: 'Tue — optional light mobility or rest' },
      { id: 'tempo', type: 'recovery', label: 'Rest', targetDistance: null, targetPace: null, description: 'Wed — REST, prep gear/nutrition/sleep' },
      { id: 'long', type: 'race', label: 'HYROX MELBOURNE', targetDistance: null, targetPace: null, description: 'Thu 10 Dec — HYROX MELBOURNE — target sub-1:05:00 (CHECKPOINT)' },
    ],
    dailySchedule: [
      { day: 'Mon', activity: '4km easy shakeout + Gym: Race Week Activation (light squat/hang pull, submax sled push & burpee broad jump touches, no finisher)', type: 'gym' },
      { day: 'Tue', activity: 'Optional light mobility or rest', type: 'rest' },
      { day: 'Wed', activity: 'REST — prep gear, nutrition, sleep', type: 'rest' },
      { day: 'Thu', activity: 'HYROX MELBOURNE — RACE DAY — target sub-1:05:00', type: 'race' },
    ],
  },
]
