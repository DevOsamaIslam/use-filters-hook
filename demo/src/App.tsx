import { useState } from "react"
import useFilters from "../../src/useFilters"
import { IFilter } from "../../src/types"

function App() {
  const [filters, setFilters] = useState<IFilter[]>([])
  const [, { addFilter, updateFilters, clearFilter }] = useFilters(
    filters,
    setFilters
  )

  const onAdd = () => {
    addFilter({
      field: `Field ${Math.random()}`,
      condition: `Condition ${Math.random()}`,
      value: Math.random(),
    })
  }

  return (
    <>
      <button onClick={onAdd}>Add Filter</button>
      <button
        onClick={() =>
          updateFilters([
            {
              field: `Field ${Math.random()}`,
              condition: `Condition ${Math.random()}`,
              value: Math.random(),
            },
          ])
        }>
        Update Filter
      </button>
      <button onClick={() => clearFilter()}>Clear</button>
      <br />
      <br />
      <br />
      Filters: {JSON.stringify(filters)}
    </>
  )
}

export default App
