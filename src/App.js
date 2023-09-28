
import "./App.css"

import Header from "./components/common/heading/Header"
import {BrowserRouter as Router,Route, Routes} from "react-router-dom"
import Home from "./components/common/heading/home/hero/Home"
import About from "./components/about/About"
import CourseHome from "./components/all courses/CourseHome"
import Blog from "./components/blog/Blog"
import Contact from "./components/contact/Contact"
import Footer from "./components/common/footer/Footer"

const App = () => {
  return (
    <div>

    <Router>
       <Header/>
       
            <Routes>

             <Route path='/' element = {<Home/>}/>
             <Route path='/about' element = {<About/>}/>
             <Route path='/courses' element = {<CourseHome/>}/>
             
          
             <Route path='/journal' element={<Blog/>}/>
             <Route path='/contact' element={<Contact/>}/>
            
          
     
      </Routes>
      <Footer/>
    
    </Router>
    </div>
  ) 
}

export default App
