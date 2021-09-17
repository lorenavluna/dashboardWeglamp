import {DomeImage, DomesList} from "../../config/index"
import Dome from "../Dome/Dome"
import "./Domes.css"
import {useState, useEffect} from "react";

export default function Domes(){
    //Estados
    const [domesList, setDomesList] = useState([]);
    const [domesAmountMessage, setDomesAmountMessage] = useState("");
    const [loading, setLoading] = useState(true);

    // Montado
    useEffect(() => {
        // Cantidad de domos y listado desde API
        fetch("http://localhost:3000/api/booking", {mode: "cors"})
            .then(res => res.json())
            .then(data => {
                setDomesAmountMessage(`Contamos con ${data.meta.count} domos disponibles al momento`);
                setDomesList(data.data.domes);
                setLoading(false);
            });
    }, []);

    return(
        <section className="domes">
            <h2>{loading ? <>Cargando...</> : domesAmountMessage}</h2>
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

