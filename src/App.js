import {useCallback, useState} from 'react';
import './App.css'
import DashBoard from './components/DashBoard';
import SortBar from './components/SortBar';
import { AppContext } from './context';

function App() {
  const [cards,setCards]=useState([]);
  const dispatchCardEvent=useCallback((actionType,payload)=>{
    switch(actionType){
          case 'Add_CARDS':
                    setCards(cards=>[...cards,...payload.Newcards])
                    return
          case 'SET_ASCENDING':
                    setCards(cards=>[...cards].sort((a,b)=>{return a.price-b.price}))
                    return
          case 'SET_DSCENDING':
                    setCards(cards=>[...cards].sort((a,b)=>{return a.price-b.price}))
                    setCards(cards=>[...cards].reverse())
                    return
          default:
            return
    }
  },[])
  return (
          <div>
              <AppContext.Provider value={{cards,dispatchCardEvent}}>
                  <SortBar/>
                  <DashBoard/>
              </AppContext.Provider>
        </div>
  );
}

export default App;
