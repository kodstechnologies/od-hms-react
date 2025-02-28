import React from 'react'

const Card = ({ children, sx }) => {
    return (
        <div className='card' style={sx}>
           {children}
        </div>
    )
}

export default Card
