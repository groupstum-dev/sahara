type Props={

title:string;

description:string;

amount:string;

}



export default function CampaignCard({

title,

description,

amount

}:Props){


return (

<div className="campaign-card">


<div className="campaign-image">

</div>



<div className="campaign-body">


<h3>

{title}

</h3>


<p>

{description}

</p>




<div className="progress">


<div></div>


</div>



<strong>

{amount}

</strong>



</div>


</div>

);


}
