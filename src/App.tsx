import { FilterableProductTable } from './FilterableProductTable.tsx'
import { ListPlaces } from './Places.tsx'
import { TodoList } from './features/todos'
import { SectionHeading } from './features/heading'

function App() {
  return (
    <div className="container flex flex-col mx-auto mt-10">
      <FilterableProductTable />
      <hr />
      <br />
      <ListPlaces />

      <hr />
      <br />
      <TodoList />

      <hr />
      <br />
      <SectionHeading />
    </div>
  )
}

export default App
