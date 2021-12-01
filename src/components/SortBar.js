import React,{useState,useContext} from 'react'
import {AppContext} from '../context'

function SortBar() {
    const [btnAsc,setBtnAsc]=useState(false)
    const [btnDsc,setBtnDsc]=useState(false)
    const{dispatchCardEvent}=useContext(AppContext)
    const handelSortAscend=()=>{
        dispatchCardEvent('SET_ASCENDING',null)
        setBtnAsc(true)
        setBtnDsc(false)
    }
    const handelSortDscend=()=>{
        dispatchCardEvent('SET_DSCENDING',null)
        setBtnAsc(false)
        setBtnDsc(true)
    }
    return (
        <div className="sortOp">
            <h3>Sort By: </h3>
            <button onClick={handelSortAscend} className={`btnSort ${btnAsc?" selected":null}`}>Price:low-high</button>
            <button onClick={handelSortDscend} className={`btnSort ${btnDsc?" selected":null}`}>Price:high-low</button>
        </div>
    )
}

export default SortBar
