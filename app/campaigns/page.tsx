import Link from "next/link";


const campaigns = [

  {
    id: "solar-africa",

    title: "Solar Energy Solutions",

    category: "Energy",

    creator: "Amina Mwangi",

    country: "Kenya 🇰🇪",

    description:
      "Affordable solar-powered solutions helping rural communities access clean energy.",

    raised: 25000,

    goal: 50000,

    supporters: 120

  },


  {
    id: "smart-farming",

    title: "Smart Farming Technology",

    category: "Agriculture",

    creator: "David Okoro",

    country: "Nigeria 🇳🇬",

    description:
      "IoT farming tools helping small farmers improve crop production.",

    raised: 18000,

    goal: 40000,

    supporters: 86

  },


  {
    id: "clean-water",

    title: "Clean Water Initiative",

    category: "Community",

    creator: "Grace Wanjiku",

    country: "Kenya 🇰🇪",

    description:
      "Building sustainable water systems for underserved communities.",

    raised: 32000,

    goal: 50000,

    supporters: 210

  }

];



export default function CampaignsPage() {


  return (

    <main className="campaign-page">


      <section className="campaign-header">


        <h1>
          Discover Projects
        </h1>


        <p>

          Support African innovators building solutions
          that create real-world impact.

        </p>



        <div className="campaign-search">


          <input

            className="input"

            placeholder="Search campaigns..."

          />


        </div>



      </section>





      <section className="categories">


        <button className="category active">

          All

        </button>


        <button className="category">

          Energy

        </button>


        <button className="category">

          Technology

        </button>


        <button className="category">

          Agriculture

        </button>


        <button className="category">

          Community

        </button>


      </section>






      <section className="campaign-grid">



        {campaigns.map((campaign)=>{


          const percentage = Math.round(

            (campaign.raised / campaign.goal) * 100

          );



          return (


            <article

              key={campaign.id}

              className="campaign-card"

            >


              <div className="campaign-image">

                <div>

                  {campaign.category}

                </div>

              </div>





              <div className="campaign-content">


                <span className="campaign-category">

                  {campaign.category}

                </span>



                <h2>

                  {campaign.title}

                </h2>



                <p>

                  {campaign.description}

                </p>



                <small>

                  By {campaign.creator} · {campaign.country}

                </small>





                <div className="progress">


                  <div

                    style={{

                      width:`${percentage}%`

                    }}

                  />


                </div>





                <div className="campaign-stats">


                  <strong>

                    ${campaign.raised.toLocaleString()}

                  </strong>


                  <span>

                    of ${campaign.goal.toLocaleString()}

                  </span>


                </div>



                <p>

                  {campaign.supporters} supporters

                </p>





                <Link

                  href={`/campaigns/${campaign.id}`}

                  className="btn btn-primary"

                >

                  View Project

                </Link>



              </div>



            </article>


          );


        })}



      </section>



    </main>

  );

}
