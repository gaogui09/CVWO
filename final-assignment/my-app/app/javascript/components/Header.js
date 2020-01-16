import React from "react"
import PropTypes from "prop-types"
class Header extends React.Component {
  render () {
    const style = {
      fontFamily: 'Verdana',
      color: '#651fff',
      fontSize: '50px',
      fontWeight: '700',
    }
    return (
      <React.Fragment>
        <div style={style}>Todo Manager</div>
      </React.Fragment>
    );
  }
}

export default Header
