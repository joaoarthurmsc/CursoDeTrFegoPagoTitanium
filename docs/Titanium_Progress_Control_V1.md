# Titanium Progress Control V1

## Purpose

Arthur and Rafael have independent progress. The Progress Control Room at `/controle` is the official way to review, restart and test learning progress without mixing profiles.

## Non-destructive action

### Open from start

Moves the lesson player to stage 1/page 1 while preserving completion, answers, time, attempts and scores. Use this for review.

## Destructive actions

### Restart lesson

Clears the current lesson state. The previous lesson snapshot is archived in `resetHistory` and remains visible in Performance.

### Restart lesson exam

Clears only exam attempts, score and completion state for that lesson, preserving content progress.

### Restart diagnostic

Clears the Aula 00 baseline and its 20 answers, preserves the teaching portion, and locks Module 01 until the diagnostic is submitted again.

### Restart Aula 00

Clears the full immersion and its diagnostic. Module 01 becomes locked, but Module 01 data is not deleted.

### Restart module

Clears lesson states, module final exam and module progress for that module. Prerequisite locks are recalculated from the resulting state.

### Restart profile

Hard reset for the active student only. It removes current progress and reset archive. The other student is untouched. A typed-name confirmation is required.

## Historical integrity

Lesson/module/exam resets archive the previous learning snapshot before clearing current progress. `/desempenho` includes archived attempts and archived active time.

## Safety

- no reset acts on both profiles;
- destructive actions require confirmation;
- profile reset requires typing the active student's name;
- the control room has no sidebar and is accessed through the user menu.
