import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from '../src/pages/Home.jsx'
import SignIn from '../src/pages/SignIn.jsx'
import SignOut from '../src/pages/SignOut.jsx'
import Profile from '../src/pages/Profile.jsx'
import About from '../src/pages/About.jsx'
const router = createBrowserRouter([
  {
    path: "/",
    element: <Home/>,
  },
  {
    path: "/sign-in",
    element: <SignIn/>,
  },
  {
    path: "/sign-out",
    element: <SignOut/>,
  },
  {
    path: "/profile",
    element: <Profile/>,
  },
  {
    path: "/about",
    element: <About/>,
  },
]);
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
