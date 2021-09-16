import './Sidebar.css';
import {Link} from "react-router-dom";

export default function Sidebar ({title, logo}){
    return(
    <nav>
        <img src={logo} alt="Logo"/>
        <h1> {title}</h1>
        <p></p>
        <Link to="/"><h2>Home</h2></Link>
        <Link to="/domes"><h2>Domos</h2></Link>
    </nav>
    );
}