type Props = {

params: Promise<{

id:string;

}>;

};



export default async function CampaignPage({

params

}:Props){


const {id}=await params;



return (

<main className="dashboard">


<div className="dashboard-card">


<h1>

{id.replace("-"," ")}

</h1>


<p>

This campaign is powered by Sahara.

</p>


<div className="progress">

<div></div>

</div>


<button className="nav-button">

Support Project

</button>


</div>


</main>

);


}
