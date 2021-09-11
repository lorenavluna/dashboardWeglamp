import Sidebar from './components/Sidebar/Sidebar';
import Domes from './components/DomesList/Domes';
import index, { subtitle, title } from './config/index';
import './App.css';



function App() {
  return (
        <main >
              <Sidebar 
                  title={title}
                  subtitle={subtitle}/>

              <Domes/>
         </main> 
    
  );
}
  
export default App;
