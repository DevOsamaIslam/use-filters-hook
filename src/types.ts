export type $BaseRow<T = {}> = T & {
  id: string
  createdAt: string
  updatedAt: string
  deletedAt: null
  createdBy: null
  updatedBy: string
}

export interface IFilter {
  field: string
  label?: string
  value: any
  condition: string
}

export type $useFiltersReturnType = [
  IFilter[],
  {
    addFilter: (...v: IFilter[]) => void
    updateFilters: (v: IFilter[]) => void
    clearFilter: (field?: string) => void
  }
]

export type $useFilters = (
  filters: IFilter[],
  dispatch: (filters: IFilter[]) => void
) => $useFiltersReturnType
