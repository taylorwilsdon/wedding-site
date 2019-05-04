import React from 'react'
import PropTypes from 'prop-types'

const Header = (props) => (
    <header id="header" style={props.timeout ? {display: 'none'} : {}}>
        <div className="content">
            <div className="inner">
                <p>Join us in celebrating the marriage of</p>
                <h1>Mileen Zarin & Taylor Barrett-Wilsdon</h1>
                <p>October Twenty, Two Thousand Nineteen</p>
            </div>
        </div>
        <nav>
            <ul>
                <li><a href="javascript:;" onClick={() => {props.onOpenArticle('bigday')}}>Wedding</a></li>
                <li><a href="javascript:;" onClick={() => {props.onOpenArticle('accommodations')}}>Stay</a></li>
                <li><a href="javascript:;" onClick={() => {props.onOpenArticle('travel')}}>Travel</a></li>
                <li><a href="javascript:;" onClick={() => {props.onOpenArticle('registry')}}>Registry</a></li>
                <li><a href="javascript:;" onClick={() => {props.onOpenArticle('us')}}>Us</a></li>
            </ul>
        </nav>
    </header>
)

Header.propTypes = {
    onOpenArticle: PropTypes.func,
    timeout: PropTypes.bool
}

export default Header
