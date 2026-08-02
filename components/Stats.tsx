const stats=[

{
title:"$12.4M",
text:"Funds Raised"
},

{
title:"2,430",
text:"Innovations Supported"
},

{
title:"48",
text:"Countries Connected"
}


];


export default function Stats(){


return (

<section className="stats">


{

stats.map((item)=>(


<div

className="stat-card"

key={item.title}

>


<h2>

{item.title}

</h2>


<p>

{item.text}

</p>


</div>


))

}


</section>

);


}
