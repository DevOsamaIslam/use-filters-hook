import { useCallback } from "react"
import { $useFilters, IFilter } from "./types"

const useFilters: $useFilters = (currentFilters, dispatch) => {
  const updateFilters = useCallback(
    (filters: IFilter[]) => {
      // Dispatch the updated filters to a state management tool.
      dispatch(filters)
    },
    [currentFilters]
  )

  const addFilter = useCallback(
    (...filters: IFilter[]) => {
      if (!currentFilters.length) return updateFilters(filters)

      const changes: IFilter[] = []

      // Iterates over each filter to be added or updated.
      filters.forEach((filter) => {
        // Finds the index of the filter with the same field, if it exists.
        const index = currentFilters.findIndex(
          (item) => item && item.field === filter.field
        )

        if (index !== -1) {
          // If filter for the field already exists, updates it.
          currentFilters[index] = filter
        } else {
          // Otherwise, adds the filter to changes.
          changes.push(filter)
        }
      })

      // Merges the updated filters and changes.
      currentFilters = [...currentFilters, ...changes]

      // Updates the filters in the context, state, etc.
      updateFilters(currentFilters)
    },
    [currentFilters]
  )

  const clearFilter = useCallback(
    (field?: string) => {
      if (field) {
        dispatch(currentFilters.filter((filter) => field !== filter.field))
      } else {
        dispatch([])
      }
    },
    [currentFilters]
  )

  return [currentFilters, { addFilter, updateFilters, clearFilter }]
}

export default useFilters
