
import './App.css'; // You can create your own CSS file for styling
import Home from './pages/Home';
import Chest from './pages/Chest';
import Shoulder from './pages/Shoulder';
import Arms from './pages/Arms';
import Legs from './pages/Legs';
import Back from './pages/Back';
import Core from './pages/Core';
import Cardio from './pages/Cardio';
import { BrowserRouter,Routes, Route} from 'react-router-dom';



function App  () {


  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path ="/" element ={<Home />}/>
        <Route path="Chest" element ={<Chest />}/>
        <Route path="Shoulder" element ={<Shoulder />}/>
        <Route path="Arms" element ={<Arms />}/>
        <Route path="Legs" element ={<Legs />}/>
        <Route path="Back" element ={<Back />}/>
        <Route path="Core" element ={<Core />}/>
        <Route path="Cardio" element ={<Cardio />}/>
      </Routes>
    </BrowserRouter>

    </>
  );
};

export default App;