import { useState } from 'react'
import { ETaskAction } from '../types.ts'
import { useTaskDispatch } from '../context/TaskProvider.tsx'

export const AddTask = () => {
  const [task, setTask] = useState<string>('')
  const dispatch = useTaskDispatch()

  function handleAddTask(value: string) {
    if (dispatch) {
      dispatch({
        type: ETaskAction.add,
        id: nextId++,
        text: value,
      })
    }
  }

  return (
    <div className="flex gap-2 justify-center">
      <div>
        <input
          type="text"
          className="border"
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

let nextId = 3
