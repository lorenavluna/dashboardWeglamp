import propTypes from "prop-types"
import {DomeName, DomesList}from "../../config/index"
import {Card} from "../Card/Card"
import Domes from "../DomesList/Domes"
import "./Dome.css"

export default function Dome ({title, DomeImage,DomeName  } ){
    const dome = DomesList[0]
    return(
        <Card>
            <article className = "dome">
                    <h2> Nombre {dome.name}</h2>  
                    <p> id = {dome.id} </p>
                    <p> destination :{dome.destination} </p>
                    <p> pax :{dome.pax} </p>
                    <p>  price : {dome.prize}</p>
                    <img src= {dome.image} width="60%"/>
                
            </article>
        </Card>
    )
}
Dome.defaultProps={
    image :"logo.png"
}
Dome.propTypes = {
    name : propTypes.string.isRequired,
    id : propTypes.number.isRequired ,
    destination : propTypes.string,
    pax : propTypes.number ,
    image : propTypes.string ,
    prize : propTypes.number ,
}
