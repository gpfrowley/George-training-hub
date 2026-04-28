export const GYM_PLAN = {
  phases: [
    {
      id: 'phase1',
      label: 'Phase 1',
      weeks: [1, 7],
      sessions: [
        {
          id: 'A',
          label: 'Session A — Posterior Chain',
          supersets: [
            {
              id: 'ss1',
              label: 'Superset 1',
              exercises: [
                { name: 'Paused Bulgarian Split Squat', setsScheme: '4x8/6/5', defaultSets: 4 },
                { name: 'Single-leg RDL', setsScheme: '4x8/6/5', defaultSets: 4 },
              ],
            },
            {
              id: 'ss2',
              label: 'Superset 2',
              exercises: [
                { name: 'Nordic Hamstring Curl', setsScheme: '4x10/8/8', defaultSets: 4 },
                { name: 'Single-leg Hip Bridge on Bench', setsScheme: '4x10/8/8', defaultSets: 4 },
              ],
            },
            {
              id: 'ss3',
              label: 'Superset 3',
              exercises: [
                { name: 'Single-leg Calf Raise (slow eccentric)', setsScheme: '3x15', defaultSets: 3 },
                { name: 'Copenhagen Plank', setsScheme: '3x20s/25s/30s', defaultSets: 3 },
              ],
            },
          ],
          core: [
            { name: 'Dead bug', scheme: '3x10' },
            { name: 'Pallof press', scheme: '3x12' },
            { name: 'Reverse crunch', scheme: '3x12' },
          ],
          finisher: null,
        },
        {
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
        },
        {
          id: 'C',
          label: 'Session C — Full Body + Hyrox Prep',
          supersets: [
            {
              id: 'ss1',
              label: 'Superset 1',
              exercises: [
                { name: 'Back Squat (rotating variation)', setsScheme: '4x8/6/4', defaultSets: 4 },
                { name: 'Weighted Pull-ups', setsScheme: '4x8/6/4', defaultSets: 4 },
              ],
            },
            {
              id: 'ss2',
              label: 'Superset 2',
              exercises: [
                { name: 'Hang Pull / Hang Power Clean', setsScheme: '4x5/5/4', defaultSets: 4 },
                { name: 'Goblet Squat (heels elevated)', setsScheme: '4x10/10/8', defaultSets: 4 },
              ],
            },
            {
              id: 'ss3',
              label: 'Superset 3',
              exercises: [
                { name: 'Close Grip Bench / Skull Crusher (alternating)', setsScheme: '3x10/10/8', defaultSets: 3 },
                { name: 'EZ Bar Curl / Incline DB Curl (alternating)', setsScheme: '3x10/10/8', defaultSets: 3 },
              ],
            },
          ],
          core: [
            { name: 'OH KB Side Bend', scheme: '3x12' },
            { name: 'Weighted Hanging Knee Raise', scheme: '3x10' },
            { name: 'Plank', scheme: '2x45s' },
          ],
          finisher: '3x20 Burpee Broad Jumps (timed) + 2x25m Sled Push',
          reducedFrom: null,
        },
      ],
    },
    {
      id: 'phase2',
      label: 'Phase 2',
      weeks: [8, 18],
      sessions: [
        {
          id: 'A',
          label: 'Session A — Posterior Chain',
          supersets: [
            {
              id: 'ss1',
              label: 'Superset 1',
              exercises: [
                { name: 'Paused Bulgarian Split Squat', setsScheme: '4x8/6/5', defaultSets: 4 },
                { name: 'Single-leg RDL', setsScheme: '4x8/6/5', defaultSets: 4 },
              ],
            },
            {
              id: 'ss2',
              label: 'Superset 2',
              exercises: [
                { name: 'Nordic Hamstring Curl', setsScheme: '4x10/8/8', defaultSets: 4 },
                { name: 'Single-leg Hip Bridge on Bench', setsScheme: '4x10/8/8', defaultSets: 4 },
              ],
            },
            {
              id: 'ss3',
              label: 'Superset 3',
              exercises: [
                { name: 'Single-leg Calf Raise (slow eccentric)', setsScheme: '3x15', defaultSets: 3 },
                { name: 'Copenhagen Plank', setsScheme: '3x20s/25s/30s', defaultSets: 3 },
              ],
            },
          ],
          core: [
            { name: 'Dead bug', scheme: '3x10' },
            { name: 'Pallof press', scheme: '3x12' },
            { name: 'Reverse crunch', scheme: '3x12' },
          ],
          finisher: null,
        },
        {
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
        },
        {
          id: 'C',
          label: 'Session C — Full Body + Hyrox Prep',
          reducedFrom: 14,
          supersets: [
            {
              id: 'ss1',
              label: 'Superset 1',
              exercises: [
                { name: 'Back Squat (rotating variation)', setsScheme: '4x8/6/4 (3 sets from wk14)', defaultSets: 4 },
                { name: 'Weighted Pull-ups', setsScheme: '4x8/6/4 (3 sets from wk14)', defaultSets: 4 },
              ],
            },
            {
              id: 'ss2',
              label: 'Superset 2',
              exercises: [
                { name: 'Hang Pull / Hang Power Clean', setsScheme: '4x5/5/4 (3 sets from wk14)', defaultSets: 4 },
                { name: 'Goblet Squat (heels elevated)', setsScheme: '4x10/10/8 (3 sets from wk14)', defaultSets: 4 },
              ],
            },
            {
              id: 'ss3',
              label: 'Superset 3',
              exercises: [
                { name: 'Close Grip Bench / Skull Crusher (alternating)', setsScheme: '3x10/10/8', defaultSets: 3 },
                { name: 'EZ Bar Curl / Incline DB Curl (alternating)', setsScheme: '3x10/10/8', defaultSets: 3 },
              ],
            },
          ],
          core: [
            { name: 'OH KB Side Bend', scheme: '3x12' },
            { name: 'Weighted Hanging Knee Raise', scheme: '3x10' },
            { name: 'Plank', scheme: '2x45s' },
          ],
          finisher: '3x20 Burpee Broad Jumps (timed) + 2x25m Sled Push',
        },
      ],
    },
    {
      id: 'phase4',
      label: 'Phase 4 — Hyrox Prep',
      weeks: [23, 26],
      sessions: [
        {
          id: 'A',
          label: 'Session A — Posterior Chain',
          supersets: [
            {
              id: 'ss1',
              label: 'Superset 1',
              exercises: [
                { name: 'Paused Bulgarian Split Squat', setsScheme: '4x8/6/5 (Phase 1 loads)', defaultSets: 4 },
                { name: 'Single-leg RDL', setsScheme: '4x8/6/5 (Phase 1 loads)', defaultSets: 4 },
              ],
            },
            {
              id: 'ss2',
              label: 'Superset 2',
              exercises: [
                { name: 'Nordic Hamstring Curl', setsScheme: '4x10/8/8 (Phase 1 loads)', defaultSets: 4 },
                { name: 'Single-leg Hip Bridge on Bench', setsScheme: '4x10/8/8 (Phase 1 loads)', defaultSets: 4 },
              ],
            },
            {
              id: 'ss3',
              label: 'Superset 3',
              exercises: [
                { name: 'Single-leg Calf Raise (slow eccentric)', setsScheme: '3x15', defaultSets: 3 },
                { name: 'Copenhagen Plank', setsScheme: '3x20s/25s/30s', defaultSets: 3 },
              ],
            },
          ],
          core: [
            { name: 'Dead bug', scheme: '3x10' },
            { name: 'Pallof press', scheme: '3x12' },
            { name: 'Reverse crunch', scheme: '3x12' },
          ],
          finisher: null,
        },
        {
          id: 'B',
          label: 'Session B — Upper + Core',
          supersets: [
            {
              id: 'ss1',
              label: 'Superset 1',
              exercises: [
                { name: 'Bench Press', setsScheme: '4x8/6/4 (Phase 1 loads)', defaultSets: 4 },
                { name: 'Weighted Chin-ups', setsScheme: '4x8/6/4 (Phase 1 loads)', defaultSets: 4 },
              ],
            },
            {
              id: 'ss2',
              label: 'Superset 2',
              exercises: [
                { name: 'Overhead Press BB', setsScheme: '4x8/6/5 (Phase 1 loads)', defaultSets: 4 },
                { name: 'BB Row', setsScheme: '4x8/6/5 (Phase 1 loads)', defaultSets: 4 },
              ],
            },
            {
              id: 'ss3',
              label: 'Superset 3',
              exercises: [
                { name: 'Weighted Dips', setsScheme: '3x10/10/8 (Phase 1 loads)', defaultSets: 3 },
                { name: 'Leaning Lateral Raise (cable)', setsScheme: '3x10/10/8 (Phase 1 loads)', defaultSets: 3 },
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
        },
        {
          id: 'C',
          label: 'Session C — Hyrox Circuit',
          supersets: [
            {
              id: 'ss1',
              label: 'Hyrox Circuit',
              exercises: [
                { name: 'Hang Pull opener', setsScheme: '3x5 (warm-up)', defaultSets: 3 },
                { name: 'SkiErg 1000m', setsScheme: '1 effort', defaultSets: 1 },
                { name: 'Sled Push 50m', setsScheme: '1 effort', defaultSets: 1 },
                { name: 'Sled Pull 50m', setsScheme: '1 effort', defaultSets: 1 },
                { name: 'Burpee Broad Jumps 80m', setsScheme: '1 effort', defaultSets: 1 },
                { name: 'Rowing 1000m', setsScheme: '1 effort', defaultSets: 1 },
                { name: 'Farmers Carry 200m', setsScheme: '1 effort', defaultSets: 1 },
                { name: 'Sandbag Lunges 100m', setsScheme: '1 effort', defaultSets: 1 },
                { name: 'Wall Balls 100 reps', setsScheme: '1 effort', defaultSets: 1 },
              ],
            },
          ],
          core: [],
          finisher: 'Full Hyrox simulation — record total time',
        },
      ],
    },
  ],
}
