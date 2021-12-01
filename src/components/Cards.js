import React from 'react'

function Cards(props) {
    const {image,description,title,price}=props.data
    return (
        <div className="cardBox">
            <img className="productImage" src={image} alt="product"/>
            <p className="cardTitle">{title}</p>
            <p className="cardDescription">{description}</p>
            <p className="cardPrice">$ {price}</p>
        </div>
    )
}

export default Cards
