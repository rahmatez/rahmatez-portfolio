import React, { useState, useEffect } from "react";

interface TypeWriterProps {
  words: string[];
  delay?: number;
  infinite?: boolean;
}

export function TypeWriter({
  words,
  delay = 100,
  infinite = true,
}: TypeWriterProps) {
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [currentText, setCurrentText] = useState("|"); // Start with the cursor
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const word = words[currentWordIndex];

    const timeout = setTimeout(() => {
      if (!isDeleting) {
        // Typing Effect
        if (currentText.length < word.length + 1) {
          setCurrentText(word.slice(0, currentText.length) + "|"); // Keep the cursor at the end
        } else {
          // Pause before deleting (slightly shorter pause for fluidity)
          setTimeout(() => setIsDeleting(true), 1000);
        }
      } else {
        // Deleting Effect
        if (currentText.length > 1) {
          setCurrentText(word.slice(0, currentText.length - 2) + "|"); // Keep the cursor at the end
        } else {
          setIsDeleting(false);
          setCurrentWordIndex((prev) =>
            infinite ? (prev + 1) % words.length : Math.min(prev + 1, words.length - 1)
          );
        }
      }
    }, isDeleting ? delay / 1.5 : delay); // Faster deleting for smoother transition

    return () => clearTimeout(timeout);
  }, [currentText, isDeleting, currentWordIndex, words, delay, infinite]);

  return (
    <span className="relative font-semibold text-slate-600 dark:text-slate-300">
      <span className="whitespace-nowrap">{currentText}</span>
    </span>
  );
}
