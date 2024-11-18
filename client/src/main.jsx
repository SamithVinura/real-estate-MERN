import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import {
  BrowserRouter,
  createBrowserRouter,
  Outlet,
  Route,
  RouterProvider,
  Routes,
} from "react-router-dom";
import Home from "../src/pages/Home.jsx";
import SignIn from "../src/pages/SignIn.jsx";
import Profile from "../src/pages/Profile.jsx";
import About from "../src/pages/About.jsx";
import Header from "../src/components/Header.jsx";
import Signup from "./pages/Signup.jsx";
import { store, persistore } from "./redux/store.js";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import PrivateRouter from "./components/PrivateRouter.jsx";

createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistore}>
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route element={<PrivateRouter/>} >
        <Route path="/profile" element={<Profile />} />
        </Route>
        <Route path="/sign-in" element={<SignIn />} />
        <Route path="/sign-up" element={<Signup />} />
      </Routes> 
    </BrowserRouter>
    </PersistGate>
  </Provider>
);
