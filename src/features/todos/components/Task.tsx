import { ETaskAction, TTask } from '../types.ts'
import { useEffect, useRef, useState } from 'react'
import { useTaskDispatch } from '../context/TaskProvider.tsx'

type Props = {
  task: TTask
}
export const Task = ({ task }: Props) => {
  const dispatch = useTaskDispatch()

  const [isEditing, setIsEditing] = useState(false)
  const [taskValue, setTaskValue] = useState(task.text)

  const inputRef = useRef<HTMLInputElement>(null)

  useEffect(() => {
    if (inputRef?.current) {
      inputRef.current.focus()
    }
  }, [isEditing])

  function handleDelete(id: number) {
    dispatch({
      type: ETaskAction.delete,
      id,
      text: '',
    })
  }

  function handleEdit(id: number, value: string) {
    dispatch({
      type: ETaskAction.edit,
      id,
      text: value,
    })
  }

  function handleCompleted(id: number) {
    dispatch({
      type: ETaskAction.done,
      id,
      text: '',
    })
  }

  function handleUpdateTask(id: number, value: string) {
    setIsEditing(false)
    handleEdit(id, value)
  }

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
