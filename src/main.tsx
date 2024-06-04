import ReactDOM from 'react-dom/client'
import { Provider } from 'react-redux'
import { store } from './store/index.ts'
import { ChakraProvider } from '@chakra-ui/react'
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from 'react-router-dom'
import { MainLayout } from './layouts/MainLayout.tsx'
import { HomePage, LoginPage, ErrorPage } from './pages'
import './index.css'

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

ReactDOM.createRoot(document.getElementById('root')!).render(
  <Provider store={store}>
    <ChakraProvider>
      <RouterProvider router={router} />
    </ChakraProvider>
  </Provider>
)
