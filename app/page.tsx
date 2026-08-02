import Navbar from "@/components/Navbar";

import Hero from "@/components/Hero";

import Stats from "@/components/Stats";

import CampaignCard from "@/components/CampaignCard";

import Footer from "@/components/Footer";



export default function Home(){


return (

<main>


<Navbar />


<Hero />


<Stats />



<section className="projects">


<h2>

Featured Innovations

</h2>



<div className="campaign-grid">


<CampaignCard

title="Solar Africa"

description="Affordable clean energy solutions."

amount="$42,500 raised"

/>



<CampaignCard

title="Agri AI"

description="Artificial intelligence for farmers."

amount="$18,200 raised"

/>




<CampaignCard

title="Health Connect"

description="Digital healthcare access."

amount="$31,700 raised"

/>



</div>


</section>



<Footer />


</main>

);


}
