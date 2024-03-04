import { TTask } from '../types.ts'
import { useEffect, useRef, useState } from 'react'

type Props = {
  task: TTask
  handleCompleted: (id: number) => void
  handleEdit: (id: number, value: string) => void
  handleDelete: (id: number) => void
}
export const Task = ({
  task,
  handleCompleted,
  handleEdit,
  handleDelete,
}: Props) => {
  const [isEditing, setIsEditing] = useState(false)
  const [taskValue, setTaskValue] = useState(task.text)

  const inputRef = useRef<HTMLInputElement>(null)

  function handleUpdateTask(id: number, value: string) {
    setIsEditing(false)
    handleEdit(id, value)
  }

  useEffect(() => {
    if (inputRef?.current) {
      inputRef.current.focus()
    }
  }, [isEditing])

  return (
    <li className="flex gap-3">
      <div>
        <input
          type="checkbox"
          checked={task.done}
          onChange={() => handleCompleted(task.id)}
        />
      </div>
      <div>
        {isEditing ? (
          <input
            ref={inputRef}
            type="text"
            value={taskValue}
            onChange={(event) => setTaskValue(event.target.value)}
            onBlur={(e) => handleUpdateTask(task.id, e.target.value)}
          />
        ) : (
          <label>{taskValue}</label>
        )}
      </div>
      <div className="flex gap-2">
        <button
          onClick={() => {
            setIsEditing((prev) => {
              return !prev
            })
          }}
        >
          Edit
        </button>
        <button onClick={() => handleDelete(task.id)}>Delete</button>
      </div>
    </li>
  )
}
