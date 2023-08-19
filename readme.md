# useFilters Hook

A React hook to easily manage filters for data fetching or UI manipulation.

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [API](#api)
  - [Methods](#methods)
  - [Filter Anatomy](#filter-anatomy)
- [Contribution](#contribution)

## Installation

Install using npm:

```bash
npm install use-filters-hook
```

Or with yarn:

```bash
yarn add use-filters-hook
```

**Peer Dependencies**: Ensure that you have `react` installed in your project.

## Usage

First, import the `useFilters` hook:

```javascript
import useFilters from "use-filters-hook"
```

Then, in your component:

```javascript
const [currentFilters, dispatch] = useFilters(initialFilters, dispatchFunction)
```

## API

### Methods

| Method          | Description                                                                                     | Example Usage                             |
| --------------- | ----------------------------------------------------------------------------------------------- | ----------------------------------------- |
| `addFilter`     | Add or update filters. Updates if a filter for a given field exists; adds if not.               | `actions.addFilter({field: 'name', ...})` |
| `updateFilters` | Directly update the filter array.                                                               | `actions.updateFilters(newFilters)`       |
| `clearFilter`   | Clear a specific filter by providing a field name. If no field is provided, clears all filters. | `actions.clearFilter('name')`             |

### Filter Anatomy

Each filter has the following structure:

| Property    | Type     | Description                                               | Optional |
| ----------- | -------- | --------------------------------------------------------- | -------- |
| `field`     | `string` | Specifies the name of the field to filter on.             | No       |
| `label`     | `string` | An optional display label for the filter.                 | Yes      |
| `value`     | `any`    | Specifies the value to filter by.                         | No       |
| `condition` | `string` | Specifies the condition under which the filtering occurs. | No       |

## Example

```typescript
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
      Filters: {JSON.stringify(filters)}
    </>
  )
}
```

## Contribution

Pull requests are welcome! For major changes, please open an issue first to discuss what you would like to change. Ensure to update tests as appropriate.

---
