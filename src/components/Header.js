import React from 'react'
import Button from './Button'
import PropTypes from 'prop-types'


const Header = (props) => {


    return (
        <header className='header'>
            <h1>{props.title}</h1>
            <Button color={props.showAdd ?'red' : 'green'} 
            text={props.showAdd ?'Close' : 'Add'} 
            onClick={props.onClick}/>
        </header>
    )
}


Header.defaultProps = {
    title: 'default Prop',
}

Header.propTypes = {
    title: PropTypes.string
}


export default Header
