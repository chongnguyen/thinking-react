import { FilterableProductTable } from './FilterableProductTable.tsx'
import { ListPlaces } from './Places.tsx'

function App() {
  return (
    <div className="container flex flex-col mx-auto mt-10">
      <FilterableProductTable />
      <hr />
      <br />
      <br />
      <br />
      <ListPlaces />
    </div>
  )
}

export default App
