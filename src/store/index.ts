import { configureStore } from '@reduxjs/toolkit'
import { todoReducer } from './todo-slice'
import { filterReducer } from './filter-slice'
import { useDispatch, useSelector } from 'react-redux'

export const store = configureStore({
  reducer: {
    todos: todoReducer,
    filter: filterReducer
  },
})

export type RootState = ReturnType<typeof store.getState>
type AppDispatch = typeof store.dispatch

export const useAppDispatch = useDispatch.withTypes<AppDispatch>()
export const useAppSelector = useSelector.withTypes<RootState>()
