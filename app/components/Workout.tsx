"use client";

import { useEffect, useState } from "react";
import {
  dayNames,
  schedule,
  week,
  type Block,
  type Exercise,
  type Routine,
} from "../data/routine";

const STORAGE_KEY = "my-workout:done";

function todayKey() {
  const d = new Date();
  return `${d.getFullYear()}-${d.getMonth() + 1}-${d.getDate()}`;
}

// Los ejercicios completados se guardan solo para el día de hoy:
// al día siguiente se empieza de cero.
function loadDone(): Set<string> {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return new Set();
    const saved = JSON.parse(raw) as { date: string; ids: string[] };
    return saved.date === todayKey() ? new Set(saved.ids) : new Set();
  } catch {
    return new Set();
  }
}

function saveDone(done: Set<string>) {
  try {
    localStorage.setItem(
      STORAGE_KEY,
      JSON.stringify({ date: todayKey(), ids: [...done] }),
    );
  } catch {
    // Sin almacenamiento (modo privado): el progreso vive solo en memoria.
  }
}

function exerciseIds(routine: Routine) {
  return routine.sections.flatMap((s) =>
    s.blocks.flatMap((b) => b.exercises.map((e) => e.id)),
  );
}

export default function Workout() {
  const [today, setToday] = useState<number | null>(null);
  const [selected, setSelected] = useState<number | null>(null);
  const [done, setDone] = useState<Set<string>>(new Set());
  const [open, setOpen] = useState<string | null>(null);

  useEffect(() => {
    const day = new Date().getDay();
    setToday(day);
    setSelected(day);
    setDone(loadDone());
  }, []);

  function toggle(id: string) {
    setDone((prev) => {
      const next = new Set(prev);
      if (next.has(id)) next.delete(id);
      else next.add(id);
      saveDone(next);
      return next;
    });
  }

  function reset(routine: Routine) {
    setDone((prev) => {
      const next = new Set(prev);
      exerciseIds(routine).forEach((id) => next.delete(id));
      saveDone(next);
      return next;
    });
  }

  if (selected === null) return <main className="app" aria-busy="true" />;

  const routine = schedule[selected];
  const ids = routine ? exerciseIds(routine) : [];
  const completed = ids.filter((id) => done.has(id)).length;
  const pct = ids.length ? Math.round((completed / ids.length) * 100) : 0;

  return (
    <main className="app">
      <header className="top">
        <p className="eyebrow">
          {selected === today ? `Hoy · ${dayNames[selected]}` : dayNames[selected]}
        </p>
        <h1>{routine ? routine.name : "Descanso"}</h1>

        {routine && (
          <div className="progress">
            <div
              className="bar"
              role="progressbar"
              aria-valuemin={0}
              aria-valuemax={ids.length}
              aria-valuenow={completed}
              aria-label="Ejercicios completados"
            >
              <span style={{ width: `${pct}%` }} />
            </div>
            <span className="count">
              {completed}/{ids.length}
            </span>
          </div>
        )}
      </header>

      <nav className="days" aria-label="Días de la semana">
        {week.map(({ day, label }) => (
          <button
            key={day}
            className="day"
            aria-pressed={day === selected}
            data-today={day === today || undefined}
            onClick={() => {
              setSelected(day);
              setOpen(null);
            }}
          >
            <span>{label}</span>
            <small>{schedule[day]?.short.split(" ")[0] ?? "—"}</small>
          </button>
        ))}
      </nav>

      {routine ? (
        <>
          {completed === ids.length && (
            <p className="finished">Rutina completa. ¡Buen trabajo! 💪</p>
          )}

          {routine.sections.map((section, i) => (
            <section key={i} className="section">
              {section.title && <h2>{section.title}</h2>}
              {section.blocks.map((block) => (
                <BlockCard
                  key={block.id}
                  block={block}
                  done={done}
                  open={open}
                  onToggle={toggle}
                  onOpen={(id) => setOpen(open === id ? null : id)}
                />
              ))}
            </section>
          ))}

          {completed > 0 && (
            <button className="reset" onClick={() => reset(routine)}>
              Reiniciar rutina
            </button>
          )}
        </>
      ) : (
        <div className="rest">
          <p className="rest-icon" aria-hidden="true">
            ☾
          </p>
          <p>Hoy toca recuperar. Descansa, hidrátate y come bien.</p>
          <p className="muted">Toca otro día arriba para ver su rutina.</p>
        </div>
      )}
    </main>
  );
}

function BlockCard({
  block,
  done,
  open,
  onToggle,
  onOpen,
}: {
  block: Block;
  done: Set<string>;
  open: string | null;
  onToggle: (id: string) => void;
  onOpen: (id: string) => void;
}) {
  const isSuperset = block.exercises.length > 1;
  const allDone = block.exercises.every((e) => done.has(e.id));

  return (
    <article className="block" data-done={allDone || undefined}>
      <div className="block-head">
        {isSuperset && <span className="tag">Superserie</span>}
        {block.sets && <span className="sets">{block.sets}</span>}
      </div>
      <ul>
        {block.exercises.map((ex, i) => (
          <ExerciseRow
            key={ex.id}
            exercise={ex}
            linked={isSuperset && i > 0}
            checked={done.has(ex.id)}
            expanded={open === ex.id}
            onToggle={() => onToggle(ex.id)}
            onOpen={() => onOpen(ex.id)}
          />
        ))}
      </ul>
    </article>
  );
}

function ExerciseRow({
  exercise,
  linked,
  checked,
  expanded,
  onToggle,
  onOpen,
}: {
  exercise: Exercise;
  linked: boolean;
  checked: boolean;
  expanded: boolean;
  onToggle: () => void;
  onOpen: () => void;
}) {
  const panelId = `demo-${exercise.id}`;

  return (
    <li className="exercise" data-checked={checked || undefined}>
      {linked && <span className="vs">+</span>}
      <div className="row">
        <button
          className="check"
          role="checkbox"
          aria-checked={checked}
          aria-label={`Marcar ${exercise.name} como completado`}
          onClick={onToggle}
        >
          <svg viewBox="0 0 24 24" aria-hidden="true">
            <path d="M5 12.5l4.5 4.5L19 7.5" />
          </svg>
        </button>
        <button
          className="info"
          aria-expanded={expanded}
          aria-controls={panelId}
          onClick={onOpen}
        >
          <span className="name">{exercise.name}</span>
          {(exercise.note || exercise.reps) && (
            <span className="meta">
              {[exercise.reps, exercise.note].filter(Boolean).join(" · ")}
            </span>
          )}
          <svg className="chev" viewBox="0 0 24 24" aria-hidden="true">
            <path d="M6 9l6 6 6-6" />
          </svg>
        </button>
      </div>
      {expanded && (
        <div className="demo" id={panelId}>
          <div className="frames">
            <img
              src={`/ex/${exercise.img}-0.webp`}
              alt={`${exercise.name}: posición inicial`}
              width={480}
              height={320}
              decoding="async"
            />
            <img
              className="frame-2"
              src={`/ex/${exercise.img}-1.webp`}
              alt=""
              width={480}
              height={320}
              decoding="async"
            />
          </div>
          <p className="tip">{exercise.tip}</p>
        </div>
      )}
    </li>
  );
}
