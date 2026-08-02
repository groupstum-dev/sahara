import Link from "next/link";
import { notFound } from "next/navigation";


type Campaign = {

  title: string;

  category: string;

  creator: string;

  country: string;

  description: string;

  story: string;

  raised: number;

  goal: number;

  supporters: number;

  rewards: {

    amount: number;

    title: string;

    description: string;

  }[];

};



const campaigns: Record<string, Campaign> = {


  "solar-africa": {

    title: "Solar Energy Solutions",

    category: "Energy",

    creator: "Amina Mwangi",

    country: "Kenya 🇰🇪",

    description:
      "Affordable solar-powered solutions helping rural communities access clean energy.",

    story:
      "Millions of families across Africa still lack reliable access to electricity. This project builds affordable solar systems that empower communities.",

    raised: 25000,

    goal: 50000,

    supporters: 120,


    rewards: [

      {

        amount: 20,

        title: "Supporter",

        description:
          "Receive project updates and a thank-you message."

      },

      {

        amount: 100,

        title: "Early Supporter",

        description:
          "Receive exclusive project updates."

      }

    ]

  },


  "smart-farming": {

    title: "Smart Farming Technology",

    category: "Agriculture",

    creator: "David Okoro",

    country: "Nigeria 🇳🇬",

    description:
      "IoT farming tools helping small farmers improve crop production.",

    story:
      "Smart farming technology helps farmers increase productivity using affordable digital tools.",

    raised: 18000,

    goal: 40000,

    supporters: 86,


    rewards: [

      {

        amount: 25,

        title: "Farm Supporter",

        description:
          "Receive progress updates."

      }

    ]

  }

};



type PageProps = {

  params: Promise<{

    id: string;

  }>;

};



export default async function CampaignPage({

  params

}: PageProps) {


  const { id } = await params;


  const campaign = campaigns[id];


  if (!campaign) {

    notFound();

  }



  const progress = Math.round(

    (campaign.raised / campaign.goal) * 100

  );



  return (

    <main className="campaign-detail">


      <Link href="/campaigns">

        ← Back to Projects

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

            Created by {campaign.creator}

            {" · "}

            {campaign.country}

          </small>


        </div>





        <aside className="funding-card">


          <h3>

            Funding Progress

          </h3>



          <div className="progress">


            <div

              style={{

                width: `${progress}%`

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

            Support Project

          </button>


        </aside>


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



          {campaign.rewards.map((reward) => (

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
