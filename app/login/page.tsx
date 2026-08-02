"use client";


import { useState } from "react";
import Link from "next/link";
import { createClient } from "@/lib/supabase";



export default function Login(){


  const supabase = createClient();


  const [email,setEmail] = useState("");

  const [password,setPassword] = useState("");

  const [message,setMessage] = useState("");





  async function login(){


    const {error}=await supabase.auth.signInWithPassword({

      email,

      password

    });



    if(error){

      setMessage(error.message);

    }

    else{

      window.location.href="/dashboard";

    }


  }





  return (

    <main className="auth">


      <div className="dashboard-card auth-card">


        <div className="logo">

          Sahara

        </div>




        <h1>

          Welcome back

        </h1>



        <p className="section-text">

          Login to manage your campaigns
          and connect with supporters.

        </p>




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
          onClick={login}
        >

          Login

        </button>




        <p>

          {message}

        </p>





        <p>

          Don't have an account?

          {" "}

          <Link href="/signup">

            Create one

          </Link>


        </p>



      </div>



    </main>

  );

}
