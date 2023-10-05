import './App.css';
import HeaderSection from './components/header'
import SimpleMap from './components/map'
import Footer from './components/Footer'
alert("always remember that the fbi is always watching what you do online \n Don't forget to have fun !" );
function App() {
  
  return (
    
    <div className="App">
     <HeaderSection/>
     <hr></hr>
     <SimpleMap/>
     <hr></hr>
     <Footer/>

    </div>
  );
}

export default App;
