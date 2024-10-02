import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter, createBrowserRouter, Outlet, Route, RouterProvider, Routes } from 'react-router-dom';
import Home from '../src/pages/Home.jsx'
import SignIn from '../src/pages/SignIn.jsx'
import SignOut from '../src/pages/SignOut.jsx'
import Profile from '../src/pages/Profile.jsx'
import About from '../src/pages/About.jsx'
import Header from '../src/components/Header.jsx';
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
     <BrowserRouter>
      <Header />
      <Routes>
      <Route path="/" element={<Home />}/>
      <Route path="/about" element={<About />}/>
      <Route path="/profile" element={<Profile />}/>
      <Route path="/sign-in" element={<SignIn />}/>  
       <Route path="/sign-out" element={<SignOut />}/>  
      
    </Routes>
    </BrowserRouter>
    
  </StrictMode>,
)
