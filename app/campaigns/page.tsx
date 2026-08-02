import Link from "next/link";


const campaigns = [

{
id:"solar-africa",
title:"Solar Africa",
description:"Affordable clean energy solutions for communities.",
raised:"$42,500",
goal:"$50,000"
},

{
id:"agri-ai",
title:"Agri AI",
description:"Artificial intelligence tools for farmers.",
raised:"$18,200",
goal:"$30,000"
},

{
id:"health-connect",
title:"Health Connect",
description:"Digital healthcare access across Africa.",
raised:"$31,700",
goal:"$45,000"
}

];



export default function Campaigns(){


return (

<main className="dashboard">


<h1>

Discover Innovations

</h1>


<p>

Support African creators building the future.

</p>



<div className="campaign-grid">


{

campaigns.map((campaign)=>(


<Link

href={`/campaigns/${campaign.id}`}

key={campaign.id}

className="campaign-card"

>


<div className="campaign-image"/>



<div className="campaign-body">


<h2>

{campaign.title}

</h2>



<p>

{campaign.description}

</p>



<div className="progress">

<div></div>

</div>



<strong>

{campaign.raised}

</strong>

<span>

&nbsp; raised of {campaign.goal}

</span>



</div>


</Link>


))

}


</div>


</main>

);


}
