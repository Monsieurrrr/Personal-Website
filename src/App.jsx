import './App.css'
import Home from './Pages/Home'
import CaseStudy from './Pages/CaseStudy'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import ScrollTop from './Components/ScrollTop'

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home/>
}
,{
  path: "/case-study",
  element: <CaseStudy/>
}
])

export default function App(){
  return(
    <div>
    <RouterProvider router = {router} > 
        <ScrollTop/>
    </RouterProvider>
  </div>
  )
}
