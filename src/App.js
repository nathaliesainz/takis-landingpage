import { useState } from 'react'
import Logo from '../src/img/logo.png'
import Burger from '../src/img/Burger.png'
import Huakamole from '../src/img/Huakamole.png'
import Fuego from '../src/img/Fuego.png'
import Original from '../src/img/Original.png'
import Volcano from '../src/img/Volcano.png'
import './App.css';


function App() {

  const [color, setColor] = useState('white');
  const [image, setImage] = useState([Huakamole]);


  return (
    <div className="App-container" style={ { background: [color] } } >

      <header className="App-header"> 
        <nav className="App-nav">
          <a href={App}>
            <img src={Logo} alt='Logo' className='Logo'/>
          </a>
          <img src={Burger} alt='Menu icon' className='Burger'/>
          <ul>
            <li>Home</li>
            <li>Our Products</li>
            <li>Contact</li>
          </ul>
        </nav>
      </header>

      <div className="App-body">
        <div className='App-text'>
          <h1>Takis</h1>
          <p>Do you have what it takes to handle the <br/>
             intensity of Takis® rolled tortilla chips?</p>
          <button>All Products</button>
        </div>
        <div className='App-image'>
          <img src={ [image] } alt='Takis' height='550px' className='MainImage' />
        </div>
        <div className='App-options'>
          <img 
            src={Fuego} 
            alt='Takis Fuego' 
            height='90px'
            className='icon' 
            onClick={ () => {
              setColor('#4E1588');
              setImage([Fuego]);
            }}
           />
          <img
            src={Original}
            alt='Takis Original' 
            height='90px'
            className='icon'
            onClick={ () => { 
              setColor("#00B33B");
              setImage([Original]);
            }}
            />
          <img 
            src={Huakamole} 
            alt='Takis Huakamole' 
            height='90px' 
            className='icon'
            onClick={ () => { 
              setColor("white");
              setImage([Huakamole]);
            }}
          />
          <img 
            src={Volcano}
            alt='Takis Volcano' 
            height='90px' 
            className='icon'
            onClick={ () => { 
              setColor("#F28B35");
              setImage([Volcano]);
          }}
          />
        </div>
      </div>

    </div>
  );
}

export default App;