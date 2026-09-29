// Rutina de entrenamiento. Para cambiar un ejercicio edita este archivo.
// `img` es el prefijo del archivo en /public/ex (se usan `-0.webp` y `-1.webp`,
// posición inicial y final, que se alternan como un GIF).

export type Exercise = {
  id: string;
  name: string;
  note?: string;
  reps?: string;
  tip: string;
  img: string;
};

export type Block = {
  id: string;
  sets?: string;
  exercises: Exercise[];
};

export type Section = {
  title?: string;
  blocks: Block[];
};

export type Routine = {
  id: string;
  name: string;
  short: string;
  sections: Section[];
};

const pecho: Routine = {
  id: "pecho",
  name: "Pecho, bíceps y tríceps",
  short: "Pecho y brazos",
  sections: [
    {
      title: "Pecho",
      blocks: [
        {
          id: "p1",
          sets: "3 × 12",
          exercises: [
            {
              id: "pecho-cristos",
              name: "Cristos con mancuerna",
              note: "Banco inclinado",
              tip: "Codos semiflexionados, abre en arco hasta sentir el estiramiento del pecho.",
              img: "incline-dumbbell-flyes",
            },
            {
              id: "pecho-press",
              name: "Press con mancuerna",
              note: "Banco inclinado",
              tip: "Baja controlado a la altura del pecho y empuja sin chocar las mancuernas.",
              img: "incline-dumbbell-press",
            },
          ],
        },
        {
          id: "p2",
          sets: "3 × 12",
          exercises: [
            {
              id: "pecho-peckdeck",
              name: "Peck deck",
              tip: "Espalda pegada al respaldo, junta los brazos apretando el pecho.",
              img: "butterfly",
            },
            {
              id: "pecho-crossover",
              name: "Cross over en polea",
              tip: "Torso ligeramente inclinado, cruza las manos al frente a la altura del ombligo.",
              img: "cable-crossover",
            },
          ],
        },
      ],
    },
    {
      title: "Bíceps y tríceps",
      blocks: [
        {
          id: "b1",
          sets: "3 × 15",
          exercises: [
            {
              id: "brazo-martillo",
              name: "Curl martillo",
              tip: "Palmas mirándose, codos fijos al costado del cuerpo.",
              img: "hammer-curls",
            },
            {
              id: "brazo-copa",
              name: "Copa a dos manos",
              tip: "Mancuerna sobre la cabeza, baja detrás de la nuca sin abrir los codos.",
              img: "standing-dumbbell-triceps-extension",
            },
          ],
        },
        {
          id: "b2",
          sets: "3 × 15",
          exercises: [
            {
              id: "brazo-curlz",
              name: "Curl con barra Z",
              tip: "Sube sin balancear el torso, baja lento hasta extender.",
              img: "ez-bar-curl",
            },
            {
              id: "brazo-fondos",
              name: "Fondos en banco",
              tip: "Manos en el banco, cadera cerca, baja hasta 90° de codo.",
              img: "bench-dips",
            },
          ],
        },
        {
          id: "b3",
          sets: "3 × 12",
          exercises: [
            {
              id: "brazo-curlsoga",
              name: "Curl con soga en polea",
              tip: "Codos pegados, sube la soga hacia los hombros.",
              img: "cable-hammer-curls-rope-attachment",
            },
            {
              id: "brazo-extsoga",
              name: "Extensión con soga en polea",
              tip: "Codos fijos, extiende y separa la soga abajo.",
              img: "triceps-pushdown-rope-attachment",
            },
          ],
        },
      ],
    },
  ],
};

const pierna: Routine = {
  id: "pierna",
  name: "Femoral y glúteo",
  short: "Pierna",
  sections: [
    {
      blocks: [
        {
          id: "g1",
          exercises: [
            {
              id: "pierna-hipthrust",
              name: "Hip thrust",
              reps: "12 reps",
              tip: "Espalda alta en el banco, empuja con talones y aprieta glúteo arriba.",
              img: "barbell-hip-thrust",
            },
            {
              id: "pierna-femacostado",
              name: "Femoral acostado",
              reps: "10 + 10",
              tip: "Cadera pegada al banco, flexiona hasta llevar talones al glúteo.",
              img: "lying-leg-curls",
            },
          ],
        },
        {
          id: "g2",
          exercises: [
            {
              id: "pierna-perfecta",
              name: "Perfecta",
              reps: "12 reps",
              tip: "Espalda apoyada, baja profundo y sube empujando con los talones.",
              img: "hack-squat",
            },
            {
              id: "pierna-abductor",
              name: "Abductor",
              reps: "15 reps",
              tip: "Abre las piernas contra la máquina y regresa lento.",
              img: "thigh-abductor",
            },
          ],
        },
        {
          id: "g3",
          sets: "4 × 12",
          exercises: [
            {
              id: "pierna-patada",
              name: "Patada de glúteo en polea",
              tip: "Tobillera en polea baja, patea hacia atrás sin arquear la espalda.",
              img: "one-legged-cable-kickback",
            },
          ],
        },
        {
          id: "g4",
          exercises: [
            {
              id: "pierna-femsentado",
              name: "Femoral sentado",
              reps: "12 reps",
              tip: "Rodillas alineadas al eje de la máquina, flexiona hacia abajo.",
              img: "seated-leg-curl",
            },
            {
              id: "pierna-pesomuerto",
              name: "Peso muerto a 1 pierna",
              reps: "12 reps",
              tip: "Cadera hacia atrás, espalda recta, la pierna libre sube en línea con el torso.",
              img: "kettlebell-one-legged-deadlift",
            },
          ],
        },
        {
          id: "g5",
          sets: "4 × 12",
          exercises: [
            {
              id: "pierna-aductor",
              name: "Aductor",
              tip: "Cierra las piernas contra la máquina con control.",
              img: "thigh-adductor",
            },
            {
              id: "pierna-femdepie",
              name: "Femoral de pie",
              tip: "Torso estable, lleva el talón hacia el glúteo.",
              img: "standing-leg-curl",
            },
          ],
        },
      ],
    },
  ],
};

const espalda: Routine = {
  id: "espalda",
  name: "Hombro y espalda",
  short: "Hombro y espalda",
  sections: [
    {
      title: "Hombro",
      blocks: [
        {
          id: "h1",
          sets: "4 × 12",
          exercises: [
            {
              id: "hombro-flyinv",
              name: "Fly invertido",
              tip: "Brazos casi rectos, abre hacia atrás juntando omóplatos.",
              img: "reverse-machine-flyes",
            },
            {
              id: "hombro-lateral",
              name: "Elevación lateral con mancuerna",
              tip: "Sube hasta la altura de los hombros, codos ligeramente flexionados.",
              img: "side-lateral-raise",
            },
          ],
        },
        {
          id: "h2",
          sets: "4 × 12",
          exercises: [
            {
              id: "hombro-facepull",
              name: "Face pull",
              tip: "Soga a la altura de la cara, tira separando las manos hacia las orejas.",
              img: "face-pull",
            },
            {
              id: "hombro-menton",
              name: "Remo al mentón",
              tip: "Agarre medio, sube con los codos por encima de las manos.",
              img: "upright-barbell-row",
            },
          ],
        },
        {
          id: "h3",
          sets: "4 × 12",
          exercises: [
            {
              id: "hombro-militar",
              name: "Press militar con mancuerna",
              tip: "Empuja sobre la cabeza sin arquear la espalda baja.",
              img: "dumbbell-shoulder-press",
            },
            {
              id: "hombro-frontal",
              name: "Elevación frontal con mancuerna",
              tip: "Sube al frente hasta la altura de los ojos, sin balanceo.",
              img: "front-dumbbell-raise",
            },
          ],
        },
      ],
    },
    {
      title: "Espalda",
      blocks: [
        {
          id: "e1",
          sets: "4 × 15",
          exercises: [
            {
              id: "espalda-pulldown",
              name: "Pull down abierto",
              tip: "Agarre ancho, baja la barra al pecho sacando el pecho.",
              img: "wide-grip-lat-pulldown",
            },
            {
              id: "espalda-remobarra",
              name: "Remo con barra",
              tip: "Torso inclinado y espalda recta, lleva la barra al ombligo.",
              img: "bent-over-barbell-row",
            },
          ],
        },
        {
          id: "e2",
          sets: "4 series",
          exercises: [
            {
              id: "espalda-pullover",
              name: "Pull over",
              reps: "15 reps",
              tip: "Brazos casi rectos, lleva la mancuerna detrás de la cabeza y regresa.",
              img: "straight-arm-dumbbell-pullover",
            },
            {
              id: "espalda-hiper",
              name: "Hiperextensiones",
              reps: "20 reps",
              tip: "Baja con la espalda recta y sube hasta alinear el cuerpo.",
              img: "hyperextensions-back-extensions",
            },
          ],
        },
      ],
    },
  ],
};

export const routines = { pecho, pierna, espalda };

// Índice = Date.getDay() (0 = domingo). null = descanso.
export const schedule: (Routine | null)[] = [
  null,
  pecho,
  espalda,
  pierna,
  pecho,
  espalda,
  pierna,
];

// Orden de la semana empezando en lunes.
export const week = [
  { day: 1, label: "Lun" },
  { day: 2, label: "Mar" },
  { day: 3, label: "Mié" },
  { day: 4, label: "Jue" },
  { day: 5, label: "Vie" },
  { day: 6, label: "Sáb" },
  { day: 0, label: "Dom" },
];

export const dayNames = [
  "Domingo",
  "Lunes",
  "Martes",
  "Miércoles",
  "Jueves",
  "Viernes",
  "Sábado",
];
