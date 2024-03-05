import {
  createContext,
  Dispatch,
  ReactNode,
  useContext,
  useReducer,
} from 'react'
import { TTask } from '../types.ts'
import { Action, tasksReducer } from './tasks-reducer.ts'

export const TaskContext = createContext<TTask[]>([])
export const TaskDispatchContext = createContext<Dispatch<Action>>(() => {})

export const TaskProvider = ({ children }: { children: ReactNode[] }) => {
  const [tasks, dispatch] = useReducer(tasksReducer, initialTasks)

  return (
    <TaskContext.Provider value={tasks}>
      <TaskDispatchContext.Provider value={dispatch}>
        {children}
      </TaskDispatchContext.Provider>
    </TaskContext.Provider>
  )
}

export const useTasks = () => {
  return useContext(TaskContext)
}

export const useTaskDispatch = () => {
  return useContext(TaskDispatchContext)
}

const initialTasks: TTask[] = [
  { id: 0, text: 'Visit Kafka Museum', done: true },
  { id: 1, text: 'Watch a puppet show', done: false },
  { id: 2, text: 'Lennon Wall pic', done: false },
]
