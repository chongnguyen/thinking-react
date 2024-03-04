import { TTask } from '../types.ts'
import { Task } from './Task.tsx'

type TaskListProps = {
  tasks: Array<TTask>
  handleCompleted: (id: number) => void
  handleEdit: (id: number, value: string) => void
  handleDelete: (id: number) => void
}
export const TaskList = ({
  tasks,
  handleCompleted,
  handleEdit,
  handleDelete,
}: TaskListProps) => {
  return (
    <div className="flex flex-col gap-4">
      {tasks.map((task) => (
        <Task
          key={task.id}
          task={task}
          handleCompleted={handleCompleted}
          handleDelete={handleDelete}
          handleEdit={handleEdit}
        />
      ))}
    </div>
  )
}
