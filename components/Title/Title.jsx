import React from 'react'
import PropTypes from 'prop-types'
// CSS
import classes from './Title.module.css'

const Title = (props) => {
  return (
    <h1 className={classes.Container}>
      {props.children}
    </h1>
  )
}

Title.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.object
  ])
}

export default Title
