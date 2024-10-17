
import './App.css'
import Home from './Pages/Home'
import CaseStudy from './Pages/CaseStudy'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home/>
}
,{
  path: "/casestudy",
  element: <CaseStudy/>
}
])

export default function App(){
  return(
    <div>
    <RouterProvider router = {router} />
  </div>
  )
}
