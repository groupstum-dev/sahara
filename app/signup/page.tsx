"use client";


import { useState } from "react";
import Link from "next/link";
import { createClient } from "@/lib/supabase";



export default function Signup(){


const supabase=createClient();



const [name,setName]=useState("");

const [email,setEmail]=useState("");

const [password,setPassword]=useState("");

const [message,setMessage]=useState("");





async function signup(){


const {error}=await supabase.auth.signUp({

email,

password,

options:{

data:{

full_name:name

}

}

});



if(error){

setMessage(error.message);

}

else{

setMessage(

"Account created. Check your email."

);

}


}






return (

<main className="auth">


<div className="dashboard-card auth-card">


<div className="logo">

Sahara

</div>



<h1>

Create account

</h1>



<p className="section-text">

Start building your innovation
community today.

</p>




<input

placeholder="Full name"

value={name}

onChange={(e)=>setName(e.target.value)}

/>




<input

type="email"

placeholder="Email address"

value={email}

onChange={(e)=>setEmail(e.target.value)}

/>




<input

type="password"

placeholder="Password"

value={password}

onChange={(e)=>setPassword(e.target.value)}

/>




<button

className="btn-primary"

onClick={signup}

>

Create Account

</button>




<p>

{message}

</p>




<p>

Already have an account?

{" "}

<Link href="/login">

Login

</Link>


</p>


</div>


</main>

);


}
