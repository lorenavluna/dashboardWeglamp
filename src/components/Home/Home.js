import {ContainerBig} from "../Container/ContainerBig"
import {ContainerSmall} from "../Container/ContainerSmall"
import "./Home.css"

export default function Home (){
    return (
        <section className ="home">
          <article>
            <h2 className = "box">  <a  href="#"> Domos</a>  </h2>
            <h2 className = "box"> <a href="#"> Usuarios</a> </h2>
            <h2 className = "box"> <a href="#"> Destino</a> </h2>
          
          </article>
          <article>
              <h2> 
              <h2 className = "bigBox">  <a  href="#"> Domo</a>  </h2>
            <h2 className = "bigBox"> <a href="#"> Usuarios</a> </h2>
            <h2 className = "bigBox"> <a href="#"> Destinos</a> </h2>
            </h2>
            </article>
        </section>
    )
}

