import {
  getStudentById,
  type StudentId,
  type StudentProfile,
} from "../data/students"

const ACTIVE_STUDENT_KEY = "titanium-active-student-v1"

function canUseSessionStorage() {
  return typeof window !== "undefined" && typeof window.sessionStorage !== "undefined"
}

export const studentRepository = {
  getActiveStudentId(): StudentId | undefined {
    if (!canUseSessionStorage()) return undefined
    const stored = window.sessionStorage.getItem(ACTIVE_STUDENT_KEY)
    return getStudentById(stored)?.id
  },

  getActiveStudent(): StudentProfile | undefined {
    return getStudentById(this.getActiveStudentId())
  },

  select(studentId: StudentId) {
    if (!canUseSessionStorage()) return
    window.sessionStorage.setItem(ACTIVE_STUDENT_KEY, studentId)
    window.dispatchEvent(new Event("titanium:student"))
  },

  clear() {
    if (!canUseSessionStorage()) return
    window.sessionStorage.removeItem(ACTIVE_STUDENT_KEY)
    window.dispatchEvent(new Event("titanium:student"))
  },
}
