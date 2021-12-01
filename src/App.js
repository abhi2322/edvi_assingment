import axios from 'axios';
import {useEffect, useState} from 'react';
import Cards from './components/Cards';
import ErrorBox from './components/ErrorBox';
import './App.css'

function App() {
  const [cards,setCards]=useState([]);
  const [error,setError]=useState("");
  useEffect(()=>{
    axios.get('https://fakestoreapi.com/products')
    .then((response)=>{
      console.log(response.data);
      setCards(cards=>[...cards,...response.data])
    })
    .catch((err)=>{
      console.log(err)
      setError("Data cannot be fetched");
    })
  },[])
  return (
    <div className="DashBoard">
        {error!==""?<ErrorBox error={error}/>:null}
        {cards.length!==0?
        cards.map((card)=>{
          return(
            <Cards
              key={card.id}
              data={card}
            />
          )
        })
        :null}
    </div>
  );
}

export default App;
