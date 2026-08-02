"use client";


import {useState} from "react";



export default function CreateCampaignPage(){


const [idea,setIdea]=useState("");

const [loading,setLoading]=useState(false);

const [result,setResult]=useState<any>(null);





async function generateAI(){


setLoading(true);



const res = await fetch(

"/api/ai/campaign",

{

method:"POST",

headers:{

"Content-Type":"application/json"

},

body:JSON.stringify({

idea

})

}

);



const data = await res.json();


setResult(data);


setLoading(false);


}






return (

<main className="dashboard">


<div className="dashboard-card">


<div className="badge">

Sahara AI Studio

</div>



<h1 className="section-title">

Create a Winning Campaign

</h1>



<p className="section-text">

Describe your idea and AI will help you
create a powerful campaign.

</p>




<textarea

className="campaign-input"

placeholder="Example: Solar water pumps for African farmers"

value={idea}

onChange={(e)=>setIdea(e.target.value)}

rows={5}

/>




<button

className="btn-primary"

onClick={generateAI}

>

{

loading

?

"Generating..."

:

"Generate With AI ✨"

}


</button>





{
result &&

<div className="ai-result">


<h2>

{result.title}

</h2>


<p>

{result.description}

</p>



<h3>

SEO Keywords

</h3>


<p>

{result.seo.join(", ")}

</p>



<h3>

Social Post

</h3>


<p>

{result.social}

</p>



</div>

}



</div>


</main>


);


}
