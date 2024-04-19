import './Appam.css';
import Navbar from './components/Navbar';
import Textform from './components/Textform';


function App() {
  return (
    <div className="App">
      <>
        <Navbar title="MoYE-MoYE" />
       <div className='container my-3' id='txt '>
        <Textform TextHead="START WRITING THE CONTAINT"/>
       </div>
      </>

    </div>
  );
}

export default App;
