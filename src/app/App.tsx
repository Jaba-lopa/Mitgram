import './App.module.scss'
import { RouterProvider, createBrowserRouter, createRoutesFromElements, Navigate, Route } from 'react-router-dom'
import LayoutPage from 'pages/LayoutPage/LayoutPage'
import { useEffect } from 'react'
import UserStore from './user/store/UserStore'
import AuthPage from 'pages/AuthPage/AuthPage'
import { observer } from 'mobx-react-lite'
import { SocketContext, socket } from './socket/socketContext'
import ActiveRoomPage from 'pages/ActiveRoomPage/ActiveRoomPage'
import ActiveRoomStore from './activeRoom/store/ActiveRoomStore'
import NullRoomPage from 'pages/NullRoomPage/NullRoomPage'

function App() {
  useEffect(() => {
    UserStore.checkIsAuth()
  }, [])
  return (
    <SocketContext.Provider value={socket}>
      <RouterProvider router={createBrowserRouter(createRoutesFromElements(
        <Route>
          {/* Other routing */}
          <Route path='/' element={UserStore.isAuth ? <LayoutPage/> : <Navigate to='/auth'/>}>
            <Route path='/' element={
            ActiveRoomStore.activeRoom.room_id
            ? <Navigate to={`room/${ActiveRoomStore.activeRoom.room_id}`}/>
            : <NullRoomPage />}
            />
            <Route path='room/:room_id' element={ActiveRoomStore.activeRoom.room_id ? <ActiveRoomPage /> : <Navigate to='/'/>}/>
          </Route>
          {/* Auth routing */}
          <Route path='/auth' element={UserStore.isAuth ? <Navigate to={'/'}/> : <AuthPage/> }/>
        </Route> 
      ))}
      />
    </SocketContext.Provider> 
  )
}

export default observer(App)