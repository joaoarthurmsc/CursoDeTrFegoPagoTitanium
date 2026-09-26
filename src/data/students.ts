export const students = [
  {
    id: "arthur",
    name: "Arthur",
    initials: "A",
  },
  {
    id: "rafael",
    name: "Rafael",
    initials: "R",
  },
] as const

export type StudentProfile = (typeof students)[number]
export type StudentId = StudentProfile["id"]

export function getStudentById(id?: string | null) {
  return students.find((student) => student.id === id)
}
