import {ContainerBig} from "../Container/ContainerBig"
import {ContainerSmall} from "../Container/ContainerSmall"
import "./Home.css"

export default function Home (){
    return (
        <section className="home">
            <article className="top-bar">
                <ContainerSmall><h2>Domos</h2></ContainerSmall>
                <ContainerSmall><h2>Usuarios</h2></ContainerSmall>
                <ContainerSmall><h2>Destinos</h2></ContainerSmall>
            </article>
            <article className="bottom-bar">
                <ContainerBig><h2>Domo más reciente</h2></ContainerBig>
                <ContainerBig><h2>Domos por destino</h2></ContainerBig>
            </article>
        </section>
    )
}

