// Wave format: each exercise's setsScheme reads as "sets x wave reps", where the
// 3-week wave is 8 reps @ RPE7 → 6 reps @ RPE8 → 4 reps @ RPE9, then repeats with
// increased load. E.g. "4x8/6/4" = 4 sets, running that rep wave across the cycle.

const SESSION_A = {
  id: 'A',
  label: 'Session A — Heavy Compound (Posterior Chain)',
  supersets: [
    {
      id: 'ss1',
      label: 'Superset 1',
      exercises: [
        { name: 'Back Squat', setsScheme: '4x8/6/4', defaultSets: 4 },
        { name: 'Weighted Pull-Up', setsScheme: '4x8/6/4', defaultSets: 4 },
      ],
    },
    {
      id: 'ss2',
      label: 'Superset 2',
      exercises: [
        { name: 'Romanian Deadlift', setsScheme: '3x8/6/4', defaultSets: 3 },
        { name: 'Weighted Calf Raise', setsScheme: '3x15', defaultSets: 3 },
      ],
    },
    {
      id: 'ss3',
      label: 'Superset 3',
      exercises: [
        { name: 'Single-Leg Hip Bridge on Bench', setsScheme: '3x10-12/side', defaultSets: 3 },
        { name: 'Copenhagen Plank', setsScheme: '3x20-30s/side', defaultSets: 3 },
      ],
    },
  ],
  core: [
    { name: 'Pallof press', scheme: '3x12/side' },
  ],
  finisher: null,
}

const SESSION_B = {
  id: 'B',
  label: 'Session B — Upper + Core',
  supersets: [
    {
      id: 'ss1',
      label: 'Superset 1',
      exercises: [
        { name: 'Bench Press', setsScheme: '4x8/6/4', defaultSets: 4 },
        { name: 'Weighted Chin-ups', setsScheme: '4x8/6/4', defaultSets: 4 },
      ],
    },
    {
      id: 'ss2',
      label: 'Superset 2',
      exercises: [
        { name: 'Overhead Press BB', setsScheme: '4x8/6/5', defaultSets: 4 },
        { name: 'BB Row', setsScheme: '4x8/6/5', defaultSets: 4 },
      ],
    },
    {
      id: 'ss3',
      label: 'Superset 3',
      exercises: [
        { name: 'Weighted Dips', setsScheme: '3x10/10/8', defaultSets: 3 },
        { name: 'Leaning Lateral Raise (cable)', setsScheme: '3x10/10/8', defaultSets: 3 },
      ],
    },
  ],
  core: [
    { name: 'Plank', scheme: '3x45s' },
    { name: 'Side plank', scheme: '3x30s each' },
    { name: 'Weighted Russian twist', scheme: '3x12' },
    { name: 'Face pull', scheme: '3x15' },
  ],
  finisher: null,
}

const SESSION_C = {
  id: 'C',
  label: 'Session C — Strength-Endurance',
  restNote: '60–90s rest between supersets — shorter than A/B, since sustained output under fatigue is the point.',
  supersets: [
    {
      id: 'ss1',
      label: 'Superset 1',
      exercises: [
        { name: 'Hang Pull / Hang Clean', setsScheme: '4x3-5', defaultSets: 4 },
        { name: 'Box Jump / Broad Jump Combo', setsScheme: '4x5+5', defaultSets: 4 },
      ],
    },
    {
      id: 'ss2',
      label: 'Superset 2',
      exercises: [
        { name: 'Front Squat or Goblet Squat', setsScheme: '4x10-15', defaultSets: 4 },
        { name: 'Farmers Carry or Suitcase Carry', setsScheme: '4x40-60m', defaultSets: 4 },
      ],
    },
    {
      id: 'ss3',
      label: 'Superset 3',
      exercises: [
        { name: 'Weighted Walking Lunges', setsScheme: '3x12-16/leg', defaultSets: 3 },
        { name: 'Weighted Step-Ups', setsScheme: '3x10-12/leg', defaultSets: 3 },
      ],
    },
  ],
  core: [],
  finisher: null,
}

function makeSessionD({ reducedFrom = null } = {}) {
  return {
    id: 'D',
    label: 'Session D — Weak-Point Accessory + Hyrox Conditioning',
    reducedFrom,
    supersets: [
      {
        id: 'ss1',
        label: 'Superset 1 — Weak-Point Work',
        exercises: [
          { name: 'Sled Push', setsScheme: '4x20-25m', defaultSets: 4 },
          { name: 'Sled Pull', setsScheme: '4x20-25m', defaultSets: 4 },
        ],
      },
      {
        id: 'ss2',
        label: 'Superset 2 — Weak-Point Work',
        exercises: [
          { name: 'Burpee Broad Jump', setsScheme: '4x8-10', defaultSets: 4 },
          { name: 'Wall Balls', setsScheme: '4x15-20', defaultSets: 4 },
        ],
      },
    ],
    core: [],
    finisher: 'Conditioning finisher — rotate weekly, pick one: (1) EMOM 12min: sled push on odd minutes / 8 burpee broad jumps on even minutes; (2) AMRAP 6min: 10 wall balls + 10m sled push + 8 burpee broad jumps; (3) For time, 4 rounds: 20m sled push + 15 wall balls + 20m sled pull',
  }
}

export const GYM_PLAN = {
  phases: [
    {
      id: 'phase1',
      label: 'Phase 1 — Strength Foundation',
      weeks: [1, 6],
      sessions: [SESSION_A, SESSION_B, SESSION_C, makeSessionD()],
    },
    {
      id: 'phase2',
      label: 'Phase 2 — HM Build + Hyrox Integration',
      weeks: [7, 11],
      sessions: [SESSION_A, SESSION_B, SESSION_C, makeSessionD()],
    },
    {
      id: 'phase3',
      label: 'Phase 3 — Sharpen + Taper (Auckland HM)',
      weeks: [12, 15],
      sessions: [SESSION_A, SESSION_B, SESSION_C, makeSessionD({ reducedFrom: 14 })],
    },
    {
      id: 'phase4',
      label: 'Phase 4 — Hyrox-Specific Peak Block',
      weeks: [16, 20],
      sessions: [SESSION_A, SESSION_B, SESSION_C, makeSessionD()],
    },
    {
      id: 'phase5',
      label: 'Phase 5 — Taper + Race (Hyrox Melbourne)',
      weeks: [21, 21],
      focusNote: 'Mon 7 Dec: light activation only — no conditioning finisher. Tue 8 Dec: optional light mobility or rest. Wed 9 Dec & Thu 10 Dec (RACE DAY): no gym.',
      sessions: [
        {
          id: 'ACT',
          label: 'Race Week Activation (Mon 7 Dec)',
          supersets: [
            {
              id: 'ss1',
              label: 'Light Activation (2-3 sets, low volume/moderate load)',
              exercises: [
                { name: 'Back Squat or Hang Pull (light)', setsScheme: '2-3x5 @ moderate load', defaultSets: 3 },
              ],
            },
            {
              id: 'ss2',
              label: 'Technique Touches (submaximal, no finisher)',
              exercises: [
                { name: 'Sled Push (technique touch)', setsScheme: '2x15m submaximal', defaultSets: 2 },
                { name: 'Burpee Broad Jump (technique touch)', setsScheme: '2x5 submaximal', defaultSets: 2 },
              ],
            },
          ],
          core: [],
          finisher: null,
        },
      ],
    },
  ],
}
