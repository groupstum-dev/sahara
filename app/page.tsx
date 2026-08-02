import Link from "next/link";


export default function Home() {

  return (

    <main>


      {/* NAVBAR */}

      <nav className="navbar">

        <div className="logo">
          Sahara
        </div>


        <div className="nav-links">

          <Link href="/campaigns">
            Discover
          </Link>


          <Link href="/create">
            Create
          </Link>


          <Link href="/login">
            Login
          </Link>


          <Link
            href="/create"
            className="nav-button"
          >
            Start Campaign
          </Link>

        </div>

      </nav>




      {/* HERO */}

      <section className="hero">


        <div className="hero-left">


          <div className="badge">

            🚀 Africa's Innovation Platform

          </div>



          <h1>

            Build ideas.

            <span>
              Fund innovation.
            </span>

            Change Africa.

          </h1>



          <p>

            Sahara connects African creators,
            entrepreneurs, and innovators with
            supporters around the world.

            Launch campaigns, grow communities,
            and turn ambitious ideas into reality.

          </p>



          <div className="hero-buttons">


            <Link
              href="/create"
              className="btn-primary"
            >

              Start Building

            </Link>



            <Link
              href="/campaigns"
              className="btn-secondary"
            >

              Explore Projects

            </Link>


          </div>




          <div className="trust">


            <div>

              <strong>
                $18M+
              </strong>

              <p>
                Raised
              </p>

            </div>



            <div>

              <strong>
                3,400+
              </strong>

              <p>
                Campaigns
              </p>

            </div>



            <div>

              <strong>
                52
              </strong>

              <p>
                Countries
              </p>

            </div>


          </div>


        </div>





        {/* FEATURE CARD */}


        <div className="hero-card">


          <div className="glass-card">


            <div className="badge">

              Featured Campaign

            </div>



            <h2>
              Solar Africa Project
            </h2>



            <p>

              Bringing affordable solar
              energy solutions to communities.

            </p>



            <div className="progress">

              <div></div>

            </div>




            <div className="fund">

              $41,250

              <span>
                / $50,000
              </span>

            </div>



            <button>

              Support Project

            </button>


          </div>


        </div>



      </section>






      {/* CAMPAIGNS */}


      <section className="campaign-section">


        <h2 className="section-title">

          Featured Campaigns

        </h2>



        <p className="section-text">

          Discover innovative projects
          creating impact across Africa.

        </p>



        <div className="campaign-grid">


          {[
            "Green Energy",
            "African Technology",
            "Smart Agriculture"

          ].map((item)=> (

            <div
              className="campaign-card"
              key={item}
            >


              <div className="campaign-image"></div>


              <div className="campaign-content">


                <h3>
                  {item}
                </h3>


                <p>

                  Support creators building
                  solutions for tomorrow.

                </p>


                <div className="progress">

                  <div></div>

                </div>


              </div>


            </div>

          ))}


        </div>


      </section>






      {/* FEATURES */}


      <section className="features">


        <div className="feature">


          <div className="feature-icon">
            🌍
          </div>


          <h3>
            Global Support
          </h3>


          <p>
            Connect African innovators
            with supporters worldwide.
          </p>


        </div>




        <div className="feature">


          <div className="feature-icon">
            🚀
          </div>


          <h3>
            Launch Faster
          </h3>


          <p>
            Create campaigns and build
            communities easily.
          </p>


        </div>




        <div className="feature">


          <div className="feature-icon">
            🔒
          </div>


          <h3>
            Trusted Platform
          </h3>


          <p>
            Secure and transparent
            crowdfunding experience.
          </p>


        </div>


      </section>







      {/* CTA */}


      <section className="cta">


        <h2>

          Ready to build the future?

        </h2>


        <p>

          Start your campaign today
          and connect with the world.

        </p>



        <Link
          href="/create"
          className="btn-primary"
        >

          Create Campaign

        </Link>


      </section>






      <footer>

        © 2026 Sahara.
        Building Africa's innovation future.

      </footer>


    </main>

  );

}
