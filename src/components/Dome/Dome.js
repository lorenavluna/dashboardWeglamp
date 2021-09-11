import {DomesList}from "../../config/index"
import {Card} from "../Card/Card"
import "./Dome.css"

export default function Dome ({title, DomeColor, DomeImage}){
    return(
        <Card>
            <article className = "dome">
                    <h2> {DomesList.name}</h2>  
                    <p> color :{DomesList.pax} </p>
                    <p> destination :{DomesList.destination} </p>
                    <p> pax :{DomesList.pax} </p>
                    <p>  price : {DomesList.prize}</p>
                    <img src= {DomeImage} width="100%"/>
                
            </article>
        </Card>
    )
}