/*eslint-disable*/
import {Component} from 'react'

import {
  AiFillLinkedin,
  AiOutlineTwitter,
  AiOutlineBars,
  AiOutlineDown,
} from 'react-icons/ai'
import {FaInstagramSquare} from 'react-icons/fa'
import {BsSearch, BsGlobe2, BsFacebook} from 'react-icons/bs'
import {RxCross2} from 'react-icons/rx'

import './index.css'

const activeStatus = {
  isActive: 'active',
  isInsights: 'insights',
  isServices: 'services',
  isIndustries: 'industries',
  isCareers: 'careers',
  isAbout: 'about',
  isCountries: 'country',
  isToggle: false,
}

class Header extends Component {
  state = {currentTab: activeStatus.isActive}

  cross = () => {
    const {isToggle} = this.state
    this.setState({isToggle: !isToggle})
  }

  bar = () => {
    const {isToggle} = this.state
    this.setState({isToggle: !isToggle})
  }

  renderSmallMainHeading = () => (
    <div>
      <h3 className="small-main-heading type-writer">
        REINVENT WHAT YOUR BUSINESS COULD BE
      </h3>
      <div className="change-container">
        <h4 className="small-main-para">Let there be change</h4>

        <img
          className=" small-change-img"
          alt="change"
          src="https://welba.s3.eu-west-2.amazonaws.com/c-286-logo.png"
        />
      </div>
    </div>
  )

  renderNavMenu = () => (
    <div className="main-nav-menu">
      <div>
        <div className="sub-heading">
          <h1 className="sub-head"> Insights</h1>
          <AiOutlineDown className="bar" />
        </div>
        <div className="sub-heading">
          <h1 className="sub-head"> Services</h1>
          <AiOutlineDown className="bar" />
        </div>
        <div className="sub-heading">
          <h1 className="sub-head"> Industries</h1>
          <AiOutlineDown className="bar" />
        </div>
        <div className="sub-heading">
          <h1 className="sub-head"> Careers</h1>
          <AiOutlineDown className="bar" />
        </div>
        <div className="sub-heading">
          <h1 className="sub-head"> About</h1>
          <AiOutlineDown className="bar" />
        </div>
      </div>
      <div className="sub-para">
        <p className="sub-head">Contact Us</p>
        <p className="sub-head">careers</p>
        <p className="sub-head">Location</p>
      </div>
      <div className=" sub-head social-container">
        <AiFillLinkedin />
        <AiOutlineTwitter />
        <BsFacebook />
        <FaInstagramSquare />
      </div>
    </div>
  )

  renderHeading = () => (
    <div>
      <h3 className="main-heading type-writer">
        REINVENT WHAT YOUR BUSINESS COULD BE
      </h3>
      <div className="change-container">
        <h4 className="main-para">Let there be change</h4>

        <img
          className="change-img"
          alt="change"
          src="https://welba.s3.eu-west-2.amazonaws.com/c-286-logo.png"
        />
      </div>
    </div>
  )

  insightsBtn = () => {
    this.setState({
      currentTab: activeStatus.isInsights,
    })
    this.setState(prevState => ({isActive: !prevState.isActive}))
  }

  renderInsights = () => (
    <div className="insights-container">
      <div className="insights-container-1">
        <p className="insights-title">FEATURED CONTENT</p>
        <h1 className="insights-heading">Voices of Change</h1>
        <p2 className="insights-description">
          The path to 360° value starts here—featuring our most provocative
          thinking, extensive research and compelling stories of shared success.
        </p2>
      </div>

      <div className="insights-content">
        <p>5G</p>
        <p>Customer Experience</p>
        <p>Edge Computing</p>
        <p>Supply Chain</p>
      </div>

      <div className="insights-content">
        <p>Artificial Intelligence</p>
        <p>Cybersecurity</p>
        <p>Future of Work</p>
        <p>Sustainability</p>
      </div>
      <div className="insights-content">
        <p>Blockchain</p>
        <p>Digital Engineering & Manufacturing</p>
        <p>Generative AI</p>
        <p>Podcasts</p>
      </div>
      <div className="insights-content">
        <p>Cloud</p>
        <p>Digital Transformation</p>
        <p>Metaverse </p>
        <p>Blogs</p>
      </div>
    </div>
  )

  servicesBtn = () => {
    this.setState({
      currentTab: activeStatus.isServices,
    })
    this.setState(prevState => ({isActive: !prevState.isActive}))
  }

  renderServices = () => (
    <div className="service-container">
      <div>
        <p>Application Services</p>
        <p>Business Strategy</p>
        <p>Data & Analytics</p>
        <p>Finance Consulting</p>
        <p>Metaverse</p>
        <p>Sustainability</p>
      </div>
      <div>
        <p>Artificial Intelligence</p>
        <p>Change Management</p>
        <p>Digital Commerce</p>
        <p>Infrastructure</p>
        <p>Operating Models</p>
        <p>Technology Consulting</p>
      </div>
      <div>
        <p>Automation</p>
        <p>Cloud</p>
        <p>Digital Engineering & Manufacturing</p>
        <p>Marketing</p>
        <p>Security</p>
        <p>Technology Innovation</p>
      </div>
      <div>
        <p>Business Process Outsourcing</p>
        <p>Customer Experience</p>
        <p>Enterprise Platforms</p>
        <p>Mergers & Acquisitions (M&A)</p>
        <p>Supply Chain Management</p>
        <p>Zero-Based Transformation</p>
      </div>
    </div>
  )

  industriesBtn = () => {
    this.setState({
      currentTab: activeStatus.isIndustries,
    })
    this.setState(prevState => ({isActive: !prevState.isActive}))
  }

  renderIndustries = () => (
    <div className="service-container">
      <div>
        <p>Aerospace and Defense</p>
        <p>Chemicals</p>
        <p>Health</p>
        <p>Life Sciences</p>
        <p>Software and Platforms</p>
      </div>
      <div>
        <p>Automotive</p>
        <p>Communications and Media</p>
        <p>High Tech</p>
        <p>Natural Resources</p>
        <p>Travel</p>
      </div>
      <div>
        <p>Banking</p>
        <p>Consumer Goods and Services</p>
        <p>Industrial</p>
        <p>Public Service</p>
        <p>US Federal Government</p>
      </div>
      <div>
        <p>Capital Markets</p>
        <p>Energy</p>
        <p>Insurance</p>
        <p>Retail</p>
        <p>Utilities</p>
      </div>
    </div>
  )

  careersBtn = () => {
    this.setState({
      currentTab: activeStatus.isCareers,
    })
    this.setState(prevState => ({isActive: !prevState.isActive}))
  }

  renderCareers = () => (
    <div className="career-container">
      <div className="career-head-container">
        <h1>Careers Home</h1>
        <h1>Search Jobs</h1>
      </div>
      <p>JOIN US</p>
      <div className="join-container">
        <p className="join-list">Executive Leaders</p>
        <p className="join-list">Experienced Professionals</p>
        <p className="join-list">Entry-level Jobs & Internships</p>
        <p className="join-list">Military and Veterans</p>
        <p className="join-list">Training & Development</p>
        <p className="join-list">Recruiting Process</p>
        <p className="join-list">Rewards & Benefits</p>
      </div>
      <p>EXPLORE JOBS</p>
      <p>Search Jobs by Areas of Expertise</p>
      <div className="join-container">
        <p className="join-list">Consulting Jobs</p>
        <p className="join-list">Corporate Jobs</p>
        <p className="join-list">Digital Jobs</p>
        <p className="join-list">Digital Engineering and Manufacturing Jobs</p>
        <p className="join-list">Operations Jobs</p>
        <p className="join-list">Strategy Jobs</p>
        <p className="join-list">Metaverse Jobs</p>
        <p className="join-list">Technology Jobs</p>
        <p className="join-list">AI Jobs</p>
        <p className="join-list">Cloud Jobs</p>
        <p className="join-list">Cybersecurity Jobs</p>
        <p className="join-list">Federal Jobs</p>
        <p className="join-list">SAP Jobs</p>
        <p className="join-list">Salesforce Jobs</p>
      </div>
    </div>
  )

  aboutBtn = () => {
    this.setState({
      currentTab: activeStatus.isAbout,
    })
    this.setState(prevState => ({isActive: !prevState.isActive}))
  }

  renderAbout = () => (
    <div className="career-container">
      <p>WHO WE ARE</p>
      <div className="join-container">
        <p className="join-list">About Accenture</p>
        <p className="join-list">Leadership</p>
        <p className="join-list">Case Studies</p>
        <p className="join-list">Newsroom</p>
        <p className="join-list">Investor Relations</p>
        <p className="join-list">Inclusion & Diversity</p>
        <p className="join-list">Sustainability</p>
      </div>
      <p>HOW WE ARE ORGANIZED</p>
      <div className="join-container">
        <p className="join-list">Strategy & Consulting</p>
        <p className="join-list">Song</p>
        <p className="join-list">Technology</p>
        <p className="join-list">Operations</p>
        <p className="join-list">Industry X</p>
      </div>
      <p>IN THE U.S.</p>
      <div className="join-container">
        <p className="join-list">About Accenture In the U.S.</p>
        <p className="join-list">Inclusion & Diversity in the U.S.</p>
      </div>
    </div>
  )

  countryBtn = () => {
    this.setState({
      currentTab: activeStatus.isCountries,
    })
    this.setState(prevState => ({isActive: !prevState.isActive}))
  }

  renderCountries = () => <p>Countries</p>

  renderTags = () => {
    const {currentTab} = this.state

    switch (currentTab) {
      case activeStatus.isInsights:
        return this.renderInsights()
      case activeStatus.isServices:
        return this.renderServices()
      case activeStatus.isIndustries:
        return this.renderIndustries()
      case activeStatus.isCareers:
        return this.renderCareers()
      case activeStatus.isAbout:
        return this.renderAbout()
      case activeStatus.isActive:
        return this.renderHeading()
      case activeStatus.isCountries:
        return this.renderCountries()
      default:
        return this.renderHeading()
    }
  }

  render() {
    const {isActive, isToggle} = this.state
    return (
      <>
        <div className="mobile-view">
          <div>
            <div className="small-nav-container">
              {isToggle ? (
                <RxCross2 onClick={this.cross} className="bar" />
              ) : (
                <AiOutlineBars onClick={this.bar} className="bar" />
              )}

              <img
                className="small-logo"
                alt="llogo"
                src="https://thedrum-media.imgix.net/thedrum-prod/s3/news/tmp/147154/accenture_ineractive.jpg?w=1280&ar=default&fit=crop&crop=faces,edges&auto=format"
              />
              <BsSearch className="bar" />
            </div>
          </div>
          {isToggle ? this.renderNavMenu() : this.renderSmallMainHeading()}
        </div>
        <div className="desktop-view">
          <div>
            <div className="header-container">
              <div className="outer">
                <img
                  src="https://thedrum-media.imgix.net/thedrum-prod/s3/news/tmp/147154/accenture_ineractive.jpg?w=1280&ar=default&fit=crop&crop=faces,edges&auto=format"
                  className="header-logo"
                  alt="outer-logo"
                />
                <div className="inner">
                  <img
                    className="header-logo-2"
                    alt="inner-logo"
                    src="https://companieslogo.com/img/orig/ACN_BIG.D-871a76ce.png?t=1633439499"
                  />
                </div>
              </div>

              <div className="button-container">
                <button
                  className="drop-button"
                  onClick={this.insightsBtn}
                  type="button"
                >
                  Insights <AiOutlineDown />
                </button>
                <button
                  className="drop-button"
                  onClick={this.servicesBtn}
                  type="button"
                >
                  Services <AiOutlineDown />
                </button>
                <button
                  className="drop-button"
                  onClick={this.industriesBtn}
                  type="button"
                >
                  Industries <AiOutlineDown />
                </button>
                <button
                  className="drop-button"
                  onClick={this.careersBtn}
                  type="button"
                >
                  Careers <AiOutlineDown />
                </button>
                <button
                  className="drop-button"
                  onClick={this.aboutBtn}
                  type="button"
                >
                  About <AiOutlineDown />
                </button>
              </div>
              <div className="country-container">
                <BsSearch />
                <div>
                  <button
                    onClick={this.countryBtn}
                    className="drop-button"
                    type="button"
                  >
                    <BsGlobe2 className="globe" />
                    USA <AiOutlineDown />
                  </button>
                </div>
              </div>
            </div>

            {isActive ? this.renderTags() : this.renderHeading()}
          </div>
        </div>
      </>
    )
  }
}
export default Header
