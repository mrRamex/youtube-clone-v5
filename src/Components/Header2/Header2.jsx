import React from 'react'
import './Header.scss'
import { elements } from './header_elements'

const header2 = () => {
  return (
    <div className="second-header">
        {elements.map((item) => (
            <div className='box' key={item.id}>
                <p>{item.name}</p>
            </div>
        ))}
    </div>
  )
}

export default header2