import React from "react"
import "./App.css"
import { BrowserRouter as Router,Routes, Route } from "react-router-dom"
import Footer from "./components/home/Footer"
import Header from "./components/home/header/Header"
import HomePages from "./components/pages/HomePages"
import Pages from "./components/pageContent/Pages"
import About from "./components/home/about/About"
import Form from "./components/pages/Contact/Contact"
import Admin from "./components/pages/Admin/Admin"

const App = () => {
  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route path='/'  element={ <HomePages/> } ></Route>
          <Route path='/pages'  element={<Pages/> } ></Route>
          <Route path='/about'  element={<About/> }></Route>
          <Route path='/contact'  element={<Form/> }></Route>
          <Route path='/admin'  element={<Admin/> }></Route>
        </Routes>
        <Footer />
      </Router>
    </>
  )
}

export default App
