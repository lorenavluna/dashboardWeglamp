import {DomeImage, DomesList} from "../../config/index"
import Dome from "../Dome/Dome"
import "./Domes.css"

export default function Domes(){
    return(
        <section className="domes">
            <h2>Contamos con {DomesList.length} Domos disponibles al momento</h2>
                {DomesList.map(dome => {
                    return(<Dome 
                        Destination={dome.destination}
                        title={dome.name}
                        pax={dome.pax}
                        price={dome.prize}
                        DomeImage={dome.DomeImage}
                        key={`dome-${dome.id}`}
                    />)
                })}
        </section>
    );
}

