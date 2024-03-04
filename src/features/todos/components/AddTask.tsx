import { useState } from 'react'

type Props = {
  handleAddTask: (task: string) => void
}
export const AddTask = ({ handleAddTask }: Props) => {
  const [task, setTask] = useState<string>('')

  return (
    <div className="flex gap-2 justify-center">
      <div>
        <input
          type="text"
          value={task}
          onChange={(event) => {
            setTask(event.target.value)
          }}
        />
      </div>
      <div>
        <button
          onClick={() => {
            handleAddTask(task)
            setTask('')
          }}
        >
          Add
        </button>
      </div>
    </div>
  )
}
