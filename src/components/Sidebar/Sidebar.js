import react from "react"
import './Sidebar.css';


export default function Sidebar ({title,subtitle}){
    return(
         <nav>
                <h1> {title}</h1>
                <p> {subtitle}</p>

                <a href="#"> Domos </a>
                <a href="#"> Destinos </a>
                
         </nav>
        )
}
