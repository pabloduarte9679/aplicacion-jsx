import './App.css'
import {useState} from 'react';
import deb from "./assets/guajolote.jpg"
import crr from "./assets/correcaminos.jpg"
import aguila from "./assets/aguila.png"
const rootContainer = {
  width: "100vw",
  height: "100vh",
  backgroundColor: "#000000",
  fontFamily: "Arial",
  fontSize: "15px",
  margin: "0",
  padding: "0",
  boxSizing: "border-box",
  display: "flex",
  flexDirection: "column",
  alignItems: "center"
};

const NavBarStyle = {
  width: "80vh",
  display: "flex",
  flexDirection: "row",
  justifyContent: "space-between"
};

const ItemStyle = {
  listStyleType: "none",
  '&:hover':{
    backgroundColor: "#ffffff",
  },
};
const MainHeader = () => {
  return (
    <header><h1>Casa Ravenclaw</h1></header>
  );
};

const NavBar = (props) => {
  return (
    <nav>
      <ul style={NavBarStyle}>
      {
        props.housesData.map((house) => (
          <li key={house.id} style={ItemStyle} onClick={() => props.fcn(house)}>
            <img src={house.img} alt={house.name} 
	    style={{width: "30px", height: "30px", marginRight: "4px", verticalAlign: "middle", borderRadius: "5px"}}
	    />
	    {house.name}
	  </li>
	))
      }
      </ul>
    </nav>
  );
};

const MainContent = (props) =>{
  return (
    <main style={{display: "flex", flexDirection: "column", alignItems: "center"}}>
      <section>
        <h2>{props.data && props.data.name}</h2>
	<p>{props.data && props.data.team}</p>
      </section>
    </main>
  );
}

const AsideContent = (props) => {
  return (
    <aside style={{display: "flex", flexDirection: "column", alignItems: "center"}}>
      <img src={props.data ? props.data.img : ''} alt={props.data ? props.data.title : ''} 
      style={{width: "200px", height: "200px", margin: "10px", borderRadius: "10px"}} />
    </aside>
  );
}

function App() {

  const handleClick = (data) => {
    setHouse(data);
    console.log(data);
  }

  const [house, setHouse] = useState();
  const houseData = [
    {
      id: 1,
      name: "Correcaminos",
      team: "Pablo, Cristian, Paulina, Azul",
      img: crr
    },
    {
      id: 2,
      name: "Debugjolote",
      team: "Kevin, Carlos, Daniel, Salvador",
      img: deb
    },
    {
      id: 3,
      name: "aguila",
      team: "Angel, Emiliano, Angel",
      img: aguila
    }
  ];
  return (
   <div style={rootContainer}>
     <MainHeader />
     <NavBar housesData={houseData} fcn={handleClick}/>
     <div>
     <MainContent data={house} />
     <AsideContent data={house}/>
     </div>
   </div> 
  );
}

export default App
