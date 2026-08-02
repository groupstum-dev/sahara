import Link from "next/link";


type Props = {

  params: Promise<{

    id:string;

  }>;

};



export default async function CampaignDetails({

  params

}:Props){


  const { id } = await params;



  const title = id
    .replaceAll("-", " ")
    .replace(/\b\w/g, char => char.toUpperCase());



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



          <Link href="/campaigns">

            Discover

          </Link>



          <Link href="/create">

            Create

          </Link>


        </div>


      </nav>





      <section className="dashboard">


        <div className="dashboard-card">


          <div className="badge">

            Featured Campaign

          </div>



          <h1 className="section-title">

            {title}

          </h1>



          <p className="section-text">

            Supporting innovative African solutions
            through global community funding.

          </p>





          <div className="campaign-image">


          </div>





          <div className="progress">

            <div></div>

          </div>





          <div className="trust">


            <div>

              <strong>

                $41,250

              </strong>


              <p>

                Raised

              </p>

            </div>



            <div>

              <strong>

                $50,000

              </strong>


              <p>

                Goal

              </p>

            </div>



            <div>

              <strong>

                82%

              </strong>


              <p>

                Complete

              </p>

            </div>


          </div>






          <button className="btn-primary">

            Support This Project

          </button>



        </div>


      </section>





      <footer>

        © 2026 Sahara

      </footer>


    </main>

  );

}
