import React from 'react'
import PropTypes from 'prop-types'
import Button from './Button'

const Header = ({title}) => {
    
    const onClick = () => {
        console.log('Click')
    }

  return (
    <header className='header'>
        <h1>{title}</h1>
        <Button onClick={onClick} color='Green' text='Add' />
    </header>
  )
}

Header.defaultProps = {
    title: 'Task Tracker'
}

Header.propTypes = {
    title: PropTypes.string.isRequired
}

const headingStyle = {
    color: 'red', backgroundColor: 'black'
}

export default Header