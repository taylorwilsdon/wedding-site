import React from 'react'
import PropTypes from 'prop-types'
import us from '../images/us.png'

class Main extends React.Component {
  render() {

    let close = <div className="close" onClick={() => { this.props.onCloseArticle() }}></div>

    return (
      <div ref={this.props.setWrapperRef} id="main" style={this.props.timeout ? { display: 'flex' } : { display: 'none' }}>

        <article id="accommodations" className={`${this.props.article === 'accommodations' ? 'active' : ''} ${this.props.articleTimeout ? 'timeout' : ''}`} style={{ display: 'none' }}>
          <div align="center">
            <h2 className="major">Accommodations</h2>
            <h3>Bernardus Lodge & Spa</h3>
            <span className="image main"><img src="https://www.bernarduslodge.com/assets/images/home-spa.jpg" alt="" /></span>
            <p>The serene character of Bernardus Lodge & Spa echoes an authentic Wine Country retreat. Bernardus  nurtures a relaxing escape from the bustle of life—to calm and revitalize all of the senses, providing the finest resort experience of all Carmel Valley.</p>
            <p>
              Room block pricing available by phone, mention Zarin/Barrett-Wilsdon Wedding.</p>
            <a href="https://www.bernarduslodge.com">Website</a> | P: (831) 658-3400
          <p></p>
            <h3>Carmel Mission Inn</h3>
            <span className="image main"><img src="https://www.carmelmissioninn.com/wp-content/themes/connected/dist/images/home/cmi-home-blend-1-sm.jpg" alt="" /></span>
            <p>The Carmel Mission Inn combines convenient Carmel Valley lodging with approachable service, thoughtful amenities and value. The Mission Inn has a charmingly stylish setting with an array of amenities that include a heated pool, a spacious hot tub, a fitness room, and spa services.</p>
            <p>
              Discounted rate available by phone, mention Zarin/Barrett-Wilsdon Wedding.</p>
            <a href="https://www.carmelmissioninn.com">Website</a> | P: (800) 348-9090
          {close}
          </div>
        </article>

        <article id="registry" className={`${this.props.article === 'registry' ? 'active' : ''} ${this.props.articleTimeout ? 'timeout' : ''}`} style={{ display: 'none' }}>
          <h2 className="major">Registry</h2>
          <p>Registry is coming soon!</p>
          {close}
        </article>

        <article id="travel" className={`${this.props.article === 'travel' ? 'active' : ''} ${this.props.articleTimeout ? 'timeout' : ''}`} style={{ display: 'none' }}>
        <div align="center"><h2 className="major">Travel</h2></div>
          <div align="center" style={{float:'left', width:'45%'}}>
            <h3>To Carmel</h3>
            <h4>By Air</h4>
            Monterey Regional Airport (MRY) is located just a few minutes from Carmel, but it's a small airport and will have limited flights depending on where you are traveling from.
             San Jose International Airport (SJC) is located about 75 miles from the wedding, but has significantly more flight options.
           <br /><br />
            <h4>From The Bay Area</h4>
            Carmel is easily accessible by car from anywhere in the Bay Area.
            It is roughly two hours by car from San Francisco, and an hour and twenty minutes from San Jose.
        </div>
          <div align="center" style={{float:'right', width:'45%'}}>
            <h3>To Venue</h3>
            <h4>By Car</h4>
            A vehicle is highly recommended during your stay in Carmel, there are extremely limited public transportation and ridesharing options.<br />
            If you wish to drive to the event, Bernardus Lodge & Spa offers free parking with the option to leave your vehicle overnight.<br />
            <br />
            <h4>By Shuttle</h4>
            More information to follow closer to the date of the ceremony.
        </div>
          {close}
        </article>
        <article id="us" className={`${this.props.article === 'us' ? 'active' : ''} ${this.props.articleTimeout ? 'timeout' : ''}`} style={{ display: 'none' }}>
        <div align="center">
        <h2 className="major">Us</h2>
        <img src={us} /><br />
        <span>Engagement Party at Filoli Gardens, August 2018</span>
          {close}
          </div>
        </article>
        <article id="bigday" className={`${this.props.article === 'bigday' ? 'active' : ''} ${this.props.articleTimeout ? 'timeout' : ''}`} style={{ display: 'none' }}>
        <div align="center">
        <h2 className="major">Ceremony & Reception</h2>
            <h4>Four in the afternoon</h4>
            <h3>Bernardus Lodge & Spa</h3>
            <h4>415 W Carmel Valley Rd <br />Carmel Valley, CA 93924</h4>
            <h5>Black Tie Attire</h5>
          {close}
          </div>
        </article>
      </div>
    )
  }
}

Main.propTypes = {
  route: PropTypes.object,
  article: PropTypes.string,
  articleTimeout: PropTypes.bool,
  onCloseArticle: PropTypes.func,
  timeout: PropTypes.bool,
  setWrapperRef: PropTypes.func.isRequired,
}

export default Main