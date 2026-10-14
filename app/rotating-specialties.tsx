"use client";

import { useEffect, useState } from "react";

const specialties = ["AI Automation", "CRM Systems", "IT Operations"] as const;

export default function RotatingSpecialties() {
  const [text, setText] = useState<string>(specialties[0]);

  useEffect(() => {
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
    let timer: number | undefined;
    let phraseIndex = 0;
    let characterCount = 0;
    let deleting = false;

    function tick() {
      const phrase = specialties[phraseIndex];
      characterCount += deleting ? -1 : 1;
      setText(phrase.slice(0, characterCount));
      let delay = deleting ? 55 : 100;

      if (!deleting && characterCount === phrase.length) {
        deleting = true;
        delay = 1600;
      } else if (deleting && characterCount === 0) {
        deleting = false;
        phraseIndex = (phraseIndex + 1) % specialties.length;
        delay = 300;
      }
      timer = window.setTimeout(tick, delay);
    }

    function syncAnimation() {
      window.clearTimeout(timer);
      if (reducedMotion.matches) {
        setText(specialties[0]);
        return;
      }
      if (document.hidden) return;

      phraseIndex = 0;
      characterCount = 0;
      deleting = false;
      setText("");
      timer = window.setTimeout(tick, 250);
    }

    syncAnimation();
    reducedMotion.addEventListener("change", syncAnimation);
    document.addEventListener("visibilitychange", syncAnimation);
    return () => {
      window.clearTimeout(timer);
      reducedMotion.removeEventListener("change", syncAnimation);
      document.removeEventListener("visibilitychange", syncAnimation);
    };
  }, []);

  return (
    <p className="hero-typing">
      <span className="sr-only">{specialties.join(", ")}</span>
      <span className="typing-visual" aria-hidden="true">
        <span className="typing-text">{text}</span>
        <span className="typing-cursor" />
      </span>
    </p>
  );
}
