import React,{useContext, useEffect,useState} from 'react';
import axios from 'axios';
import {AppContext} from '../context'
import ErrorBox from './ErrorBox';
import Cards from './Cards';

function DashBoard() {
    const [error,setError]=useState("");
    const{cards,dispatchCardEvent}=useContext(AppContext)
    useEffect(()=>{
        axios.get('https://fakestoreapi.com/products')
        .then((response)=>{
            dispatchCardEvent('Add_CARDS',{Newcards:response.data})
        })
        .catch((err)=>{
          setError("Data cannot be fetched");
        })
      },[dispatchCardEvent])
    return (
        <div className="DashBoard">
            {error!==""?<ErrorBox error={error}/>:null}
            { cards.map((card)=>{
                return(
                      <Cards
                        key={card.id}
                        data={card}
                      />
                    )
                  })
            }
        </div>
    )
}

export default DashBoard
