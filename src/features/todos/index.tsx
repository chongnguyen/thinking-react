import { AddTask, TaskList } from './components'
import { useReducer } from 'react'
import { ETaskAction, TTask } from './types.ts'
import { tasksReducer } from './tasks-reducer.ts'

export const TodoList = () => {
  const [tasks, dispatch] = useReducer(tasksReducer, initialTasks)

  function handleAddTask(value: string) {
    dispatch({
      type: ETaskAction.add,
      id: nextId++,
      text: value,
    })
  }

  function handleRemoveTask(id: number) {
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

  return (
    <div>
      <h1>Prague itinerary</h1>
      <AddTask handleAddTask={handleAddTask} />

      <div>
        <TaskList
          tasks={tasks}
          handleCompleted={handleCompleted}
          handleEdit={handleEdit}
          handleDelete={handleRemoveTask}
        />
      </div>
    </div>
  )
}

let nextId = 3
const initialTasks: TTask[] = [
  { id: 0, text: 'Visit Kafka Museum', done: true },
  { id: 1, text: 'Watch a puppet show', done: false },
  { id: 2, text: 'Lennon Wall pic', done: false },
]
