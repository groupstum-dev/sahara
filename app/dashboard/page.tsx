import { redirect } from "next/navigation";
import { createClient } from "@/lib/supabase-server";


export default async function Dashboard() {


  const supabase = await createClient();


  const {
    data: {
      user
    }
  } = await supabase.auth.getUser();



  if (!user) {

    redirect("/login");

  }



  const profile = user.user_metadata;



  const role = profile?.role || "backer";

  const name = profile?.full_name || "Sahara User";




  return (

    <main className="dashboard">


      <section className="dashboard-header">


        <div>

          <h1>
            Welcome, {name}
          </h1>


          <p>
            Manage your Sahara experience.
          </p>


        </div>



        <span
          className={
            role === "creator"
              ? "badge badge-creator"
              : "badge badge-backer"
          }
        >

          {role === "creator"
            ? "Creator"
            : "Backer"}

        </span>



      </section>





      <section className="dashboard-grid">



        <aside className="sidebar">


          <h3>
            Sahara
          </h3>


          <nav>


            <p>
              Dashboard
            </p>


            {role === "creator" && (

              <>

                <p>
                  My Campaigns
                </p>


                <p>
                  Create Campaign
                </p>


                <p>
                  Rewards
                </p>


              </>

            )}



            {role === "backer" && (

              <>

                <p>
                  Discover Projects
                </p>


                <p>
                  Supported Projects
                </p>


                <p>
                  Saved Projects
                </p>


              </>

            )}


          </nav>


        </aside>






        <section className="content">


          {role === "creator" ? (


            <>

              <h2>
                Creator Dashboard
              </h2>


              <div className="dashboard-card">


                <h3>
                  Start your first campaign
                </h3>


                <p>
                  Share your idea with the world and
                  receive support from global backers.
                </p>


                <button className="btn btn-primary">

                  Create Campaign

                </button>


              </div>


              <div className="dashboard-card">


                <h3>
                  Campaign Overview
                </h3>


                <p>
                  No campaigns created yet.
                </p>


              </div>


            </>


          ) : (


            <>


              <h2>
                Backer Dashboard
              </h2>


              <div className="dashboard-card">


                <h3>
                  Discover African Innovation
                </h3>


                <p>
                  Explore projects from creators
                  building solutions across Africa.
                </p>


                <button className="btn btn-primary">

                  Explore Projects

                </button>


              </div>



              <div className="dashboard-card">


                <h3>
                  Your Support
                </h3>


                <p>
                  You have not supported any projects yet.
                </p>


              </div>


            </>

          )}



        </section>



      </section>



    </main>

  );

}
