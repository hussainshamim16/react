import React from 'react'

const Cards = ({ Name, pro, age }) => {
    return (
        <>
            <div className="cardsmain">
                <h2>User Details</h2>
                <h1>{Name}</h1>
                <h3>Profassion {pro}</h3>
                <h4>Age {age}</h4>
            </div>
        </>
    )
}

export default Cards