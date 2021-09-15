import Sidebar from './components/Sidebar/Sidebar';
import Domes from './components/DomesList/Domes';
import Home from './components/Home/Home';
import index, { title, logo } from './config/index';
import './App.css';



function App() {
  return (
        <main >
              <Sidebar 
                 logo ={logo}
                  title={title}
                  />

              <Home/>
         </main> 
    
  );
}
  
export default App;
