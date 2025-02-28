import React from 'react'

const CustomBadge = ({ color='green', title='example badge' }) => {
  return (
    <button className={`custom-badge status-${color}`} style={{ marginRight: '1rem', marginBottom: '1rem' }}>
        { title }
    </button>
  )
}

export default CustomBadge
