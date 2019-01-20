import React, { Component } from 'react'
import PropTypes from 'prop-types'

const Header = (props) => (
    <header id="header" style={props.timeout ? {display: 'none'} : {}}>
        <div className="content">
            <div className="inner">
                <p>
                To access, please enter the password you were provided</p>
                <form>
                    <input type="password"></input><br />
                    <button type="submit">Submit</button>
                </form>
            </div>
        </div>
    </header>
)

Header.propTypes = {
    onOpenArticle: PropTypes.func,
    timeout: PropTypes.bool
}

export default Header