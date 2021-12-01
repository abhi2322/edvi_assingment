import axios from 'axios';
import {useEffect, useState} from 'react';
import Cards from './components/Cards';
import ErrorBox from './components/ErrorBox';
import './App.css'

function App() {
  const [cards,setCards]=useState([]);
  const [error,setError]=useState("");
  const [btnAsc,setBtnAsc]=useState(false)
  const [btnDsc,setBtnDsc]=useState(false)
  const handelSortAscend=()=>{
    setCards([...cards].sort((a,b)=>{return a.price-b.price}))
    setBtnAsc(true)
    setBtnDsc(false)
  }
  const handelSortDscend=()=>{
    setCards([...cards].sort((a,b)=>{return a.price-b.price}))
    setCards([...cards].reverse())
    setBtnAsc(false)
    setBtnDsc(true)
  }
  useEffect(()=>{
    axios.get('https://fakestoreapi.com/products')
    .then((response)=>{
      setCards(cards=>[...cards,...response.data])
    })
    .catch((err)=>{
      console.log(err)
      setError("Data cannot be fetched");
    })
  },[])
  return (
          <div>
              <div className="sortOp">
                <h3>Sort By: </h3>
                <button onClick={handelSortAscend} className={`btnSort ${btnAsc?" selected":null}`}>Price:low-high</button>
                <button onClick={handelSortDscend} className={`btnSort ${btnDsc?" selected":null}`}>Price:high-low</button>
              </div>
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
        </div>
  );
}

export default App;
