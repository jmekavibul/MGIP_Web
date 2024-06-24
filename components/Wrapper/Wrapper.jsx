import React from 'react'
import PropTypes from 'prop-types'
// CSS
import classes from './Wrapper.module.css'

const Wrapper = (props) => {
  return (
    <div className={classes.Container}>
      {props.children}
    </div>
  )
}

Wrapper.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.any,
    PropTypes.object,
    PropTypes.element
  ])
}

export default Wrapper
