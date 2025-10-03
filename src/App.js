import PopupForm from './components/Popupform';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './components/Home/home';
import About from "./components/About"
import ContactUs from './components/Contactus';
import Career from "./components/Carrer"
import Blog from './components/Blogs/Blog';
import BlogDetails from "./components/Blogs/BlogsDetails"
import Event from "./components/events"
import Lighting from './components/Lighting/Lighting';
import "./App.css";
import { Route, Routes } from 'react-router-dom';
import Automation from './components/Automation/Automation';

function App() {
  return (
    <>
<PopupForm/>
      <Routes>
        <Route 
        path="/" element={<Home/>}/>
         <Route 
        path="/lighting" element={<Lighting/>}/>
          <Route 
        path="/Automation" element={<Automation/>}/>
      </Routes>
      <Routes>
         
  <Route path="/ContactUs" element={<ContactUs />} />
  <Route path="/Aboutus" element={<About />} />
  <Route path="/Event" element={<Event />} />
  <Route path="/blog" element={<Blog />} />
  <Route  path="/blogs/:slug" element={<BlogDetails/>}/>
  <Route path="/career" element={<Career/>} />
 

   
        </Routes>


    </>

  );
}

export default App; 





