import { PayloadAction, createSlice } from '@reduxjs/toolkit'

type FilterType = 'all' | 'active' | 'completed'

type InitialStateType = {
  filter: FilterType
}

const initialState: InitialStateType = {
  filter: 'all',
}

const filterSlice = createSlice({
  name: 'filter',
  initialState,
  reducers: {
    changeFilterAC(state, action: PayloadAction<FilterType>) {
      state.filter = action.payload
    },
  },
  selectors: {
    selectFilter: (state) => state.filter,
  },
})

export const { changeFilterAC } = filterSlice.actions
export const filterReducer = filterSlice.reducer
export const { selectFilter } = filterSlice.selectors
