import Link from "next/link";


export default function DashboardPage(){

  const projects = [

    {
      name:"Solar Africa",
      status:"Active",
      raised:"$41,250",
      progress:"82%"
    },

    {
      name:"Smart Farming AI",
      status:"Draft",
      raised:"$0",
      progress:"0%"
    },

  ];


  return (

    <main>


      <nav className="navbar">


        <div className="logo">
          Sahara
        </div>


        <div className="nav-links">


          <Link href="/campaigns">
            Discover
          </Link>


          <Link href="/create" className="nav-button">
            New Campaign
          </Link>


        </div>


      </nav>





      <section className="dashboard">


        <div className="badge">

          Creator Dashboard

        </div>



        <h1 className="section-title">

          Welcome back 👋

        </h1>



        <p className="section-text">

          Manage your campaigns, track support,
          and grow your community.

        </p>






        <div className="trust">


          <div>

            <strong>
              $41K
            </strong>

            <p>
              Total Raised
            </p>

          </div>



          <div>

            <strong>
              2
            </strong>

            <p>
              Campaigns
            </p>

          </div>



          <div>

            <strong>
              840
            </strong>

            <p>
              Supporters
            </p>

          </div>



        </div>







        <section className="campaign-section">


          <h2 className="section-title">

            Your Campaigns

          </h2>




          <div className="campaign-grid">


            {projects.map((project)=>(


              <div
                className="campaign-card"
                key={project.name}
              >


                <div className="campaign-image">

                </div>




                <div className="campaign-content">


                  <div className="badge">

                    {project.status}

                  </div>



                  <h3>

                    {project.name}

                  </h3>



                  <p>

                    Funding progress

                  </p>




                  <div className="progress">

                    <div
                      style={{
                        width:project.progress
                      }}
                    />

                  </div>



                  <strong>

                    {project.raised}

                  </strong>



                </div>


              </div>


            ))}


          </div>



        </section>




      </section>





      <footer>

        © 2026 Sahara

      </footer>


    </main>

  );

}
