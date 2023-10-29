/*eslint-disable*/
import {HiChevronDoubleRight} from 'react-icons/hi'
import './index.css'

const TextCarousel = () => (
  <>
    <div className="main-info-container">
      <div className="images-container">
        <img
          className="img-1"
          alt="img"
          src="https://dynamicmedia.accenture.com/is/image/accenture/A1-A.com-Careers-Module-Image?qlt=85&ts=1693590803300&$1024-PNG$&dpr=off"
        />
        <img
          className="img-1"
          alt="img-2"
          src="https://dynamicmedia.accenture.com/is/content/accenture/Added%20Media-1?ts=1691997294380&dpr=off"
        />
      </div>
      <div className="text-container">
        <h1 className="card-heading-1">OUR CULTURE</h1>
        <h1 className="card-title-1">We make change, together</h1>
        <h1 className="card-description-1">
          We combine technology with human ingenuity to solve some of the worlds
          biggest challenges. When you work with us, the possibilities are
          endless.
        </h1>
        <p className="read-btn">
          JOIN US <HiChevronDoubleRight />{' '}
        </p>
      </div>
    </div>
    <h1 className="card-heading-1 news-heading ">Accenture news</h1>
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
            <div className="news-container">
              <h1 className="card-heading-1">2023 September 12</h1>
              <h1 className="card-title-1">
                Accenture to Announce Fourth-Quarter and Full-Year Fiscal 2023
                Results
              </h1>
            </div>
          </div>
          <div className="carousel-item ">
            <div className="news-container">
              <h1 className="card-heading-1">2023 September 11</h1>
              <h1 className="card-title-1">
                Accenture Invests in Open Cosmos to Expand Access to Satellite
                Data
              </h1>
            </div>
          </div>
          <div className="carousel-item">
            <div className="news-container">
              <h1 className="card-heading-1">2023 September 07</h1>
              <h1 className="card-title-1">
                Accenture and Workday Expands PartnerShip to Help Organizations
                Accelerate Finance Transformation
              </h1>
            </div>
          </div>
          <div className="carousel-item">
            <div className="news-container">
              <h1 className="card-heading-1">2023 August 09</h1>
              <h1 className="card-title-1">
                Coca-Cola Bottlers Japan and Accenture to Establish Joint
                venture
              </h1>
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
  </>
)

export default TextCarousel
