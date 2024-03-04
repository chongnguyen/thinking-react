import { FilterableProductTable } from './FilterableProductTable.tsx'
import { ListPlaces } from './Places.tsx'
import { TodoList } from './features/todos'

function App() {
  return (
    <div className="container flex flex-col mx-auto mt-10">
      <FilterableProductTable />
      <hr />
      <br />
      <br />
      <br />
      <ListPlaces />

      <hr />
      <br />
      <br />
      <br />
      <TodoList />
    </div>
  )
}

export default App
