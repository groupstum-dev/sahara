export default function Home() {
  return (
    <main className="page">

      <nav className="navbar">
        <div className="logo">
          Sahara
        </div>

        <div className="nav-links">
          <a href="#">Discover</a>
          <a href="#">Start a Campaign</a>
          <a href="#">Login</a>
        </div>
      </nav>


      <section className="hero">

        <div className="hero-content">

          <h1>
            Empowering African
            <span> Innovation </span>
            Through Global Support
          </h1>

          <p>
            Sahara is a reward-based crowdfunding platform helping African
            creators, entrepreneurs, and innovators bring their ideas to life
            with support from people around the world.
          </p>


          <div className="buttons">

            <button className="primary">
              Start a Campaign
            </button>

            <button className="secondary">
              Explore Projects
            </button>

          </div>

        </div>


        <div className="card">

          <h3>
            Featured Project
          </h3>

          <p>
            Solar-powered solutions built by African innovators.
          </p>

          <div className="progress">
            <div></div>
          </div>

          <small>
            $25,000 raised of $50,000 goal
          </small>

        </div>

      </section>


      <section className="features">

        <div>
          <h2>Creators</h2>
          <p>
            Launch ideas, products and innovations.
          </p>
        </div>


        <div>
          <h2>Backers</h2>
          <p>
            Discover and support meaningful projects.
          </p>
        </div>


        <div>
          <h2>Global Community</h2>
          <p>
            Connect Africa with supporters worldwide.
          </p>
        </div>

      </section>


      <footer>
        © 2026 Sahara. Building the future of African innovation.
      </footer>

    </main>
  );
}
