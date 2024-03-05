import { Task } from './Task.tsx'
import { useTasks } from '../context/TaskProvider.tsx'

export const TaskList = () => {
  const tasks = useTasks()

  return (
    <div className="flex flex-col gap-4">
      {tasks.map((task) => (
        <Task key={task.id} task={task} />
      ))}
    </div>
  )
}
