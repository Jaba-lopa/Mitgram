import './App.module.scss'
import { RouterProvider, createBrowserRouter, createRoutesFromElements, Navigate, Route } from 'react-router-dom'
import LayoutPage from 'pages/LayoutPage/LayoutPage'
import { useEffect } from 'react'
import UserStore from './user/store/UserStore'
import AuthPage from 'pages/AuthPage/AuthPage'
import { observer } from 'mobx-react-lite'

function App() {
  useEffect(() => {
    UserStore.checkIsAuth()
  }, [])
  return (
    <RouterProvider router={createBrowserRouter(createRoutesFromElements(
      <Route>
        {/* Auth routing */}
        <Route path='/auth' element={UserStore.user ? <Navigate to={'/'}/> : <AuthPage/> }/>
        {/* Other routing */}
        <Route path='/' element={UserStore.user ? <LayoutPage/> : <Navigate to='/auth'/>}></Route>
      </Route> 
    ))}
    />
  )
}

export default observer(App)