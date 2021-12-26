import React from 'react'
import Button from './Button'
import PropTypes from 'prop-types'


const Header = (props) => {

    const onClick = () => {
        console.log('click');
    }

    return (
        <header className='header'>
            <h1>{props.title}</h1>
            <Button color='green' text='Add' onClick={onClick}/>
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
