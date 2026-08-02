import Link from "next/link";


const campaigns = [

  {
    title:"Solar Africa",
    category:"Clean Energy",
    raised:"$41,250",
    goal:"$50,000",
    progress:"82%"
  },

  {
    title:"Smart Farming AI",
    category:"Agriculture",
    raised:"$28,400",
    goal:"$40,000",
    progress:"71%"
  },

  {
    title:"African Health Tech",
    category:"Healthcare",
    raised:"$65,000",
    goal:"$80,000",
    progress:"81%"
  },

  {
    title:"Future Learning Hub",
    category:"Education",
    raised:"$19,500",
    goal:"$30,000",
    progress:"65%"
  },

];


export default function CampaignsPage(){

  return (

    <main>


      <nav className="navbar">

        <div className="logo">
          Sahara
        </div>


        <div className="nav-links">

          <Link href="/">
            Home
          </Link>

          <Link href="/create">
            Create
          </Link>

          <Link href="/login">
            Login
          </Link>

        </div>

      </nav>



      <section className="campaign-section">


        <div className="badge">

          Discover Projects

        </div>



        <h1 className="section-title">

          Explore African Innovation

        </h1>



        <p className="section-text">

          Discover campaigns from entrepreneurs,
          creators, and innovators building
          the future.

        </p>




        <div className="campaign-grid">


          {campaigns.map((campaign)=>(


            <Link

              href={`/campaigns/${campaign.title
                .toLowerCase()
                .replaceAll(" ","-")}`}

              className="campaign-card"

              key={campaign.title}

            >


              <div className="campaign-image">


              </div>



              <div className="campaign-content">


                <div className="badge">

                  {campaign.category}

                </div>



                <h3>

                  {campaign.title}

                </h3>



                <p>

                  Helping communities through
                  innovative solutions.

                </p>



                <div className="progress">

                  <div></div>

                </div>



                <strong>

                  {campaign.raised}

                </strong>


                <span>

                  {" "}of {campaign.goal}

                </span>



              </div>


            </Link>


          ))}



        </div>


      </section>




      <footer>

        © 2026 Sahara

      </footer>


    </main>

  );

}
