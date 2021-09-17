import propTypes from "prop-types"
import {useState, useEffect} from "react"
import {Card} from "../Card/Card"
import "./Dome.css"

export default function Dome ({domeDetailURL}){
    const [detailURL, setDetailURL] = useState(domeDetailURL);
    const [dome, setDome] = useState({});

    useEffect(() => {
        fetch(detailURL, {mode: "cors"})
            .then(res => res.json())
            .then(data => {
                setDome(data.data);
                console.log(data.data);
            });
    }, [detailURL]);

    return(
        <Card>
            {dome ? <article className="dome">
                <h2>{dome.name}</h2>  
                <p>Destino: {dome.destination ? dome.destination.name : ""} </p>
                <p>PAX: {dome.pax} </p>
                <p>Precio: {dome.price}</p>
                <img src={dome.image} width="60%" alt=""/>
            </article>
            : <p>Cargando</p>}  
        </Card>
    );
}
Dome.defaultProps = {
    image :"logo.png"
}
