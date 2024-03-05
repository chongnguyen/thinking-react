import { AddTask, TaskList } from './components'
import { TaskProvider } from './context/TaskProvider.tsx'

export const TodoList = () => {
  return (
    <TaskProvider>
      <h1>Prague itinerary</h1>
      <AddTask />
      <TaskList />
    </TaskProvider>
  )
}
