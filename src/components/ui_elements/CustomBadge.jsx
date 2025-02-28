import React from 'react'

const CustomBadge = ({ color='green', title='example badge', border='', mr='1rem', mb='1rem', onClick=() => {} }) => {
  return (
    <button className={`custom-badge status-${color}`} style={{ marginRight: mr, marginBottom: mb, border: border }} onClick={ () => onClick(title) }>
        { title }
    </button>
  )
}

export default CustomBadge
