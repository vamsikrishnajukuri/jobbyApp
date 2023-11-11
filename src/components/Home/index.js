import Header from '../Header'

import './index.css'

const Home = () => (
  <div className="home-container">
    <Header />
    <div className="half-container">
      <div>
        <h1 className="home-heading">Find The Job That Fits Your Life</h1>
        <p className="home-para">
          Millions of people are searching for jobs, salary information, company
          reviews. Find the job that fits your abilities and potential.
        </p>
        <div>
          <button className="home-button" type="button">
            Find Jobs
          </button>
        </div>
      </div>
    </div>
  </div>
)

export default Home
