import React from "react";

interface WordDisplayProps {
  word: string;
  guessedLetters: string[];
}

export function WordDisplay({ word, guessedLetters }: WordDisplayProps) {
  return (
    <p className="text-2xl font-mono my-4">
      {word
        .split("")
        .map((char) =>
          char === " " ? " " : guessedLetters.includes(char) ? char : "_"
        )
        .join(" ")}
    </p>
  );
}
