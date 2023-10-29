/*eslint-disable*/ 
import {HiChevronDoubleRight} from 'react-icons/hi'
import './index.css'

const DemoCarousel = () => (
  <div>
    <div id="myCarousel" className="carousel slide" data-ride="carousel">
      <ol className="carousel-indicators">
        <li data-target="#myCarousel" data-slide-to="0" className="active">
          {' '}
        </li>
        <li data-target="#myCarousel" data-slide-to="1">
          {' '}
        </li>
        <li data-target="#myCarousel" data-slide-to="2">
          {' '}
        </li>
      </ol>

      <div className="carousel-inner">
        <div className="carousel-item active ">
          <div className="carousel-container">
            <img
              className="carousel-img"
              src="https://dynamicmedia.accenture.com/is/image/accenture/Accenture-Barlcays-Generative-AI%3Arad-3x2?ts=1693310890610&dpr=off"
              alt="Image3"
            />

            <div className="carousel-content-container">
              <h1 className="card-title-1">
                Generative AI transforming customer service
              </h1>
              <h1 className="card-description-1">
                Sifting through thousands of emails daily is tedious work, but
                generative AI makes it easy. A multinational bank is using
                generative AI to quickly process and respond to client emails
                used for the settling, asset servicing and reconciliation of
                trades – normally a massive manual task. It directs emails to
                the right teams and drafts responses for employees to check. The
                result? Faster and more enjoyable customer service, a boost in
                worker efficiency and more cost-effective operations.
              </h1>
              <p className="read-btn">
                Read more <HiChevronDoubleRight />{' '}
              </p>
            </div>
          </div>
        </div>
        <div className="carousel-item ">
          <div className="carousel-container">
            <img
              className="carousel-img"
              src="https://preview1.assetsadobe.com/is/image/accenture/Cybersecurity-in-orbit-Not-Used%3Arad-3x2?ts=1693559173350&dpr=off"
              alt="Image3"
            />

            <div className="carousel-content-container">
              <h1 className="card-title-1">Cybersecurity in orbit</h1>
              <h1 className="card-description-1">
                As outer space gets more crowded and contested, QuSecure is
                protecting communications and data transmission with the agility
                required for the world of post-quantum computing.
              </h1>
              <p className="read-btn">
                Read more <HiChevronDoubleRight />{' '}
              </p>
            </div>
          </div>
        </div>
        <div className="carousel-item">
          <div className="carousel-container">
            <img
              className="carousel-img"
              src="https://dynamicmedia.accenture.com/is/image/accenture/Accenture-Father-Daughter-Breakfast-768x768%3Arad-3x2?ts=1693561432848&dpr=off"
              alt="Image3"
            />

            <div className="carousel-content-container">
              <h1 className="card-title-1">
                Mondelēz International’s Data and AI Transformation
              </h1>
              <h1 className="card-description-1">
                The global snacking giant is laying a tasty foundation for
                reinvention and growth. Accenture is helping Mondelēz
                International to embrace the power of data and AI, build a
                strong digital core and implement interoperable cloud-enabled
                technology.
              </h1>
              <p className="read-btn">
                Read more <HiChevronDoubleRight />{' '}
              </p>
            </div>
          </div>
        </div>
        <div className="carousel-item">
          <div className="carousel-container">
            <img
              className="carousel-img"
              src="https://dynamicmedia.accenture.com/is/image/accenture/Accenture-Sustainability-Feeding-The-World%3Arad-3x2?ts=1693565028311&dpr=off"
              alt="Image3"
            />

            <div className="carousel-content-container">
              <h1 className="card-title-1">Sustainably feeding the world </h1>
              <h1 className="card-description-1">
                Our global food system is on an unsustainable path. The Good
                Food Institute is working to accelerate protein innovation to
                diversify how meat is made.
              </h1>
              <p className="read-btn">
                Read more <HiChevronDoubleRight />{' '}
              </p>
            </div>
          </div>
        </div>
        <div className="carousel-item">
          <div className="carousel-container">
            <img
              className="carousel-img"
              src="https://dynamicmedia.accenture.com/is/image/accenture/Accenture-Luxury-Product-Customization%3Arad-3x2?ts=1693310892099&dpr=off"
              alt="Image3"
            />

            <div className="carousel-content-container">
              <h1 className="card-title-1">
                Prada personalizes a cult classic
              </h1>
              <h1 className="card-description-1">
                Prada leveraged innovative digital twin technology, offering new
                experiences in luxury product personalization.
              </h1>
              <p className="read-btn">
                Read more <HiChevronDoubleRight />{' '}
              </p>
            </div>
          </div>
        </div>
        <div className="carousel-item">
          <div className="carousel-container">
            <img
              className="carousel-img"
              src="https://dynamicmedia.accenture.com/is/image/accenture/Accenture-Microsoft-Cloud-Supply-Chain-Control-Tower%3Arad-3x2?ts=1693310892733&dpr=off"
              alt="Image3"
            />

            <div className="carousel-content-container">
              <h1 className="card-title-1">
                Bringing blue-sky thinking to global operations
              </h1>
              <h1 className="card-description-1">
                Rapid growth of the cloud changed Microsoft’s supply chain
                network significantly. The solution? Data-led transformation to
                a supply chain control tower.
              </h1>
              <p className="read-btn">
                Read more <HiChevronDoubleRight />{' '}
              </p>
            </div>
          </div>
        </div>
      </div>

      <a
        className="carousel-control-prev"
        href="#myCarousel"
        role="button"
        data-slide="prev"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true">
          {' '}
        </span>
        <span className="sr-only">Previous</span>
      </a>
      <a
        className="carousel-control-next"
        href="#myCarousel"
        role="button"
        data-slide="next"
      >
        <span className="carousel-control-next-icon" aria-hidden="true">
          {' '}
        </span>
        <span className="sr-only">Next</span>
      </a>
    </div>
  </div>
)

export default DemoCarousel
