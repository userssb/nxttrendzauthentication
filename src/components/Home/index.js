import './index.css'

const Home = () => (
  <div className="home-cont">
    <div className="info-cont">
      <h1 className="header">Clothes That Get YOU Noticed</h1>
      <p className="info-text">
        Fashion is part of the daily air and it does not quite help that it
        changes all the time. Clothes have always been a market of the era and
        we are in a revolution. Your fashion makes you been seen and heard that
        way you are. So, celebrate the seasons new and exciting fashion in your
        own way.
      </p>
      <button className="btn-shop" type="button">
        Shop Now
      </button>
    </div>
    <img
      src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-home-img.png"
      alt="clothes that get you noticed"
      className="home-img"
    />
  </div>
)

export default Home
