import { ETaskAction, TTask } from '../types.ts'

export type Action = { type: ETaskAction; text: string; id: number }

export function tasksReducer(tasks: TTask[], action: Action): TTask[] {
  switch (action.type) {
    case ETaskAction.add:
      return [
        ...tasks,
        {
          id: action.id,
          text: action?.text,
          done: false,
        },
      ]

    case ETaskAction.edit:
      return tasks.map((task) => {
        if (task.id === action.id) {
          return { ...task, text: action.text }
        }
        return task
      })

    case ETaskAction.delete:
      return tasks.filter((task) => task.id !== action.id)

    case ETaskAction.done:
      return tasks.map((task) => {
        if (task.id === action.id) {
          return { ...task, done: true }
        }
        return task
      })
  }
}
