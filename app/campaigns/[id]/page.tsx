import Link from "next/link";
import { notFound } from "next/navigation";


const campaigns = {

  "solar-africa": {

    title: "Solar Energy Solutions",

    category: "Energy",

    creator: "Amina Mwangi",

    country: "Kenya 🇰🇪",

    description:
      "Affordable solar-powered solutions helping rural communities access clean energy.",

    story:
      "Millions of families across Africa still lack reliable access to electricity. This project builds affordable solar systems that empower communities, schools, and small businesses with clean energy.",

    raised: 25000,

    goal: 50000,

    supporters:120,


    rewards:[

      {

        amount:20,

        title:"Supporter",

        description:
        "Receive project updates and a thank-you message."

      },


      {

        amount:100,

        title:"Early Supporter",

        description:
        "Receive updates and exclusive project materials."

      },


      {

        amount:500,

        title:"Impact Partner",

        description:
        "Become a recognized supporter of the solar initiative."

      }

    ]

  },


  "smart-farming": {

    title:"Smart Farming Technology",

    category:"Agriculture",

    creator:"David Okoro",

    country:"Nigeria 🇳🇬",

    description:
    "IoT farming tools helping small farmers improve crop production.",

    story:
    "Small farmers face challenges with unpredictable weather and limited access to technology. This project provides smart farming tools to improve productivity.",

    raised:18000,

    goal:40000,

    supporters:86,


    rewards:[

      {

        amount:25,

        title:"Farm Supporter",

        description:
        "Receive project updates."

      },


      {

        amount:250,

        title:"Technology Partner",

        description:
        "Get early access updates."

      }

    ]

  }

};



type Props = {

  params:{
    id:string;
  };

};



export default function CampaignPage({params}:Props){


  const campaign =
    campaigns[params.id as keyof typeof campaigns];



  if(!campaign){

    notFound();

  }



  const progress = Math.round(

    (campaign.raised / campaign.goal) * 100

  );



  return (

    <main className="campaign-detail">



      <Link

        href="/campaigns"

        className="back-link"

      >

        ← Back to projects

      </Link>





      <section className="campaign-hero">



        <div className="campaign-main">


          <span className="campaign-category">

            {campaign.category}

          </span>



          <h1>

            {campaign.title}

          </h1>



          <p>

            {campaign.description}

          </p>



          <small>

            Created by {campaign.creator} · {campaign.country}

          </small>



        </div>





        <div className="funding-card">


          <h3>

            Funding Progress

          </h3>



          <div className="progress">


            <div

              style={{

                width:`${progress}%`

              }}

            />

          </div>




          <h2>

            ${campaign.raised.toLocaleString()}

          </h2>



          <p>

            raised of ${campaign.goal.toLocaleString()}

          </p>



          <p>

            {campaign.supporters} supporters

          </p>




          <button className="btn btn-primary">

            Support This Project

          </button>



        </div>



      </section>







      <section className="campaign-body">



        <div className="story-card">


          <h2>

            The Story

          </h2>


          <p>

            {campaign.story}

          </p>


        </div>







        <div className="rewards-card">


          <h2>

            Rewards

          </h2>



          {campaign.rewards.map((reward)=> (


            <div

              key={reward.amount}

              className="reward"

            >


              <h3>

                ${reward.amount}

              </h3>



              <h4>

                {reward.title}

              </h4>



              <p>

                {reward.description}

              </p>



              <button className="btn btn-primary">

                Choose Reward

              </button>



            </div>


          ))}



        </div>



      </section>



    </main>

  );

}
