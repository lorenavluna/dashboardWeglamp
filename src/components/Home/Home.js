import {ContainerBig} from "../Container/ContainerBig"
import {ContainerSmall} from "../Container/ContainerSmall"
import "./Home.css"
import {useState, useEffect} from "react";

export default function Home (){
    // Estados
    const [domesAmount, setDomesAmount] = useState("");
    const [usersAmount, setUsersAmount] = useState("");
    const [destinationsAmount, setDestinationsAmount] = useState("");
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
            });
        setLoading(false);
    }, []);

    return (
        <section className="home">
            <article className="top-bar">
                <ContainerSmall><h2>{loading ? <>Cargando...</> : `Domos: ${domesAmount}`}</h2></ContainerSmall>
                <ContainerSmall><h2>{loading ? <>Cargando...</> : `Usuarios: ${usersAmount}`}</h2></ContainerSmall>
                <ContainerSmall><h2>{loading ? <>Cargando...</> : `Destinos: ${destinationsAmount}`}</h2></ContainerSmall>
            </article>
            <article className="bottom-bar">
                <ContainerBig><h2>Domo más reciente</h2></ContainerBig>
                <ContainerBig><h2>Domos por destino</h2></ContainerBig>
            </article>
        </section>
    );
}

