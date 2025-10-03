import {Helmet} from "react-helmet"
import Home from "./HomePage"

export default function HeroSection(){
    return(
        <div>
          <Helmet>
            <title>Customised light & Architectural Lighting Solutions in Bangalore |Jovo India </title>
            <meta name="description" content=" Jovo India offers customised lighting and architectural lighting solutions in Bangalore.Perferct for homes,offices,hotels and premium interior projects."/>
          </Helmet>
          <Home/>
        </div>
    )
}