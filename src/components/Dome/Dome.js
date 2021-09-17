import propTypes from "prop-types"
import {DomeName, DomesList}from "../../config/index"
import {Card} from "../Card/Card"
import "./Dome.css"

export default function Dome ({title, DomeImage, DomeName} ){
    const dome = DomesList[0];
    return(
        <Card>
            <article className="dome">
                <h2>{dome.name}</h2>  
                <p>Destino: {dome.destination} </p>
                <p>PAX: {dome.pax} </p>
                <p>Precio: {dome.prize}</p>
                <img src={dome.image} width="60%" alt=""/>
            </article>
        </Card>
    );
}
Dome.defaultProps = {
    image :"logo.png"
}
Dome.propTypes = {
    name : propTypes.string.isRequired,
    id : propTypes.number.isRequired,
    destination : propTypes.string,
    pax : propTypes.number,
    image : propTypes.string,
    prize : propTypes.number,
}