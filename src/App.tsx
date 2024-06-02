import { useEffect } from 'react'
import { useAppDispatch } from './store'
import { getTodosTC } from './store/todo-thunks'
import { MainLayout } from './layouts/MainLayout'
import { HomePage } from './pages/HomePage'
import { LoginPage } from './pages/LoginPage'
import { ErrorPage } from './pages/ErrorPage'
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from 'react-router-dom'
import './App.css'

export const App = () => {
  const dispatch = useAppDispatch()

  useEffect(() => {
    dispatch(getTodosTC())
  }, [])

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route
        path="/"
        element={<MainLayout />}
      >
        <Route
          index
          element={<HomePage />}
        />
        <Route
          path="login"
          element={<LoginPage />}
        />
        <Route
          path="*"
          element={<ErrorPage />}
        />
      </Route>
    )
  )

  return <RouterProvider router={router} />
}
