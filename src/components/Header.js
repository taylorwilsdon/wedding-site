import React from 'react'
import PropTypes from 'prop-types'

const Header = (props) => (
    <header id="header" style={props.timeout ? {display: 'none'} : {}}>
        <div className="content">
            <div className="inner">
                <p>
                Join us in celebrating the marriage of</p>
                <h1>Mileen Zarin & Taylor Barrett-Wilsdon</h1>
                <p>October 20th, 2019</p>
            </div>
        </div>
        <nav>
            <ul>
                <li><a href="javascript:;" onClick={() => {props.onOpenArticle('details')}}>Details</a></li>
                <li><a href="javascript:;" onClick={() => {props.onOpenArticle('accommodations')}}>Accommodations</a></li>
                <li><a href="javascript:;" onClick={() => {props.onOpenArticle('registry')}}>Registry</a></li>
            </ul>
        </nav>
    </header>
)

Header.propTypes = {
    onOpenArticle: PropTypes.func,
    timeout: PropTypes.bool
}

export default Header
