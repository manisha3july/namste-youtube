import { useState } from 'react'
import Head from './component/Head'
import Body from './component/Body'
import './App.css'
import { Provider } from 'react-redux'
import store from './component/utils/store'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import MainContanier from './component/MainContanier'
import WatchPage from './component/WatchPage'

const appRouter = createBrowserRouter([{
    path: "/",
    element: <Body />,
    children : [
      {
        path: "/",
        element: <MainContanier />
      },
      {
        path: 'watch',
        element: <WatchPage />
      }
    ]
  }
    

  ])


function App() {
  
  

  return (
    <>
      <Provider store={store}>
      <Head />
      <RouterProvider  router={appRouter} />
     
      </Provider>
    </>
  )
}

export default App
