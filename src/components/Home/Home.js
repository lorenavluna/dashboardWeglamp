import {ContainerBig} from "../Container/ContainerBig"
import {ContainerSmall} from "../Container/ContainerSmall"
import "./Home.css"
import "../DomesList/Domes.css"
import {useState, useEffect} from "react";
import {Card} from "../Card/Card"
import Dome from "../Dome/Dome"

export default function Home (){
    // Estados
    const [domesAmount, setDomesAmount] = useState("");
    const [usersAmount, setUsersAmount] = useState("");
    const [destinationsAmount, setDestinationsAmount] = useState("");
    const [mostRecentDome, setMostRecentDome] = useState({});
    const [mostRecentDomeURL, setMostRecentDomeURL] = useState({});
    const [domesByDestination, setDomesByDestination] = useState();
    const [loading, setLoading] = useState(true);

    // Montado
    useEffect(() => {
        // Cantidad de usuarios desde API
        fetch("http://localhost:3000/api/users", {mode: "cors"})
            .then(res => res.json())
            .then(data => {
                setUsersAmount(data.meta.count);
            });
        // Cantidad de domos y destinos desde API
        fetch("http://localhost:3000/api/booking", {mode: "cors"})
            .then(res => res.json())
            .then(data => {
                setDomesAmount(data.meta.count);
                setDestinationsAmount(data.meta.categoryCount);
                return data.data.domes[data.data.domes.length-1].detail;
            }).then(detailURL => {
                console.log(detailURL);
                setMostRecentDomeURL(detailURL);
                fetch(detailURL, {mode: "cors"})
                    .then(res => res.json())
                    .then(data => {
                        console.log(data);
                        setMostRecentDome(data.data);
                        setLoading(false);
                    })
            });
    }, []);

    return (
        <section className="home">
            <article className="top-bar">
                <ContainerSmall><h2>{loading ? <>Cargando...</> : `Domos: ${domesAmount}`}</h2></ContainerSmall>
                <ContainerSmall><h2>{loading ? <>Cargando...</> : `Usuarios: ${usersAmount}`}</h2></ContainerSmall>
                <ContainerSmall><h2>{loading ? <>Cargando...</> : `Destinos: ${destinationsAmount}`}</h2></ContainerSmall>
            </article>
            {/* <article className="bottom-bar">
                <ContainerBig>
                    <h2>Domo más reciente</h2>
                    <Dome domeDetailURL={mostRecentDomeURL}/>
                    { <Card>
                        {mostRecentDome ? <article className="dome">
                            <h2>{mostRecentDome.name}</h2>  
                            <p>Destino: {mostRecentDome.destination ? mostRecentDome.destination.name : ""} </p>
                            <p>PAX: {mostRecentDome.pax} </p>
                            <p>Precio: {mostRecentDome.price}</p>
                            <img src={mostRecentDome.image} width="60%" alt=""/>
                        </article>
                        : <p>Cargando</p>}  
                    </Card> }
                </ContainerBig>
            </article> */}
        </section>
    );
}

