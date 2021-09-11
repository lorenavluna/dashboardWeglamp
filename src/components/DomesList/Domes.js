
import {DomeImage, DomesList} from "../../config/index"
import Dome from "../Dome/Dome"
import "./Domes"

export default function Domes (){
    return (
        <section className ="domes">
            
                {DomesList.map(dome => {
                      return (
                       <Dome 
                                   id = {DomesList.id}
                                   Destination ={DomesList.destination}
                                   title ={DomesList.name}
                                   pax ={DomesList.pax}
                                   price ={DomesList.prize}
                                  DomeImage = {DomeImage} 
                            />
                 ) } )}
            
        </section>
    )
}

