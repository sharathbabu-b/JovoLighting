import FooterTop from "./Footertop"
import jovipng from "../assets/primary-logo.png";
// import callIcon from "../assets/call-icon.png"
import {FaFacebookF,FaYoutube,FaInstagram,FaLinkedinIn, FaPinterestP} from "react-icons/fa"
import "./footerbottom.css"

export default function FooterBottom(){
    return (
      <div>
        <FooterTop/>
        <div className="bg-black py-2 dark-line d-flex justify-content-evenly align-items-center py-5  overflow-hidden" >
            <img  style={{ height: "100px" }} src={jovipng} alt="logo"/>
                  <h3 className="text-white text-center fontsize-10px" >Copyright©JÖVÖINDIA</h3>
                 <div className=" d-flex justify-content-center gap-3  py-3">
                  <a  href="https://www.facebook.com/jovoindia/" className="d-flex justify-content-center align-items-center rounded-circle border border-light text-light" style={{ width: "40px", height: "40px", fontSize: "18px" }}>
              <FaFacebookF />
            </a>

            <a href="https://www.youtube.com/channel/UCOyUzihzuxDJqNyuQFqR72w" className="d-flex justify-content-center align-items-center rounded-circle border border-light text-light" style={{ width: "40px", height: "40px", fontSize: "18px" }}
            >
              <FaYoutube />
            </a>

            <a href="https://www.instagram.com/JOVOINDIA/" className="d-flex justify-content-center align-items-center rounded-circle border border-light text-light"style={{ width: "40px", height: "40px", fontSize: "18px" }}
            >
              <FaInstagram />
            </a>
            
              <a href="https://www.linkedin.com/company/j%C3%B6v%C3%B6-india/" className="d-flex justify-content-center align-items-center rounded-circle border border-light text-light" style={{ width: "40px", height: "40px", fontSize: "18px" }}
            >
              <FaLinkedinIn />
            </a>

            <a href="hhttps://in.pinterest.com/jovoindia/" className="d-flex justify-content-center align-items-center rounded-circle border border-light text-light" style={{ width: "40px", height: "40px", fontSize: "18px" }}
            >
              <FaPinterestP />
            </a>       
                 </div>
        </div>
   
      
      </div>
        
        
    )
}