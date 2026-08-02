"use client";


import { useState } from "react";
import { createClient } from "@/lib/supabase";



export default function Login() {


  const supabase = createClient();



  const [email,setEmail] = useState("");

  const [password,setPassword] = useState("");

  const [message,setMessage] = useState("");




  async function login(){


    const {error} =
      await supabase.auth.signInWithPassword({

        email,

        password

      });



    if(error){

      setMessage(error.message);

    }

    else {

      window.location.href="/dashboard";

    }


  }




  return (

    <main className="auth">


      <h1>

        Login to Sahara

      </h1>




      <input

        type="email"

        placeholder="Email"

        value={email}

        onChange={(e)=>setEmail(e.target.value)}

      />





      <input

        type="password"

        placeholder="Password"

        value={password}

        onChange={(e)=>setPassword(e.target.value)}

      />





      <button onClick={login}>

        Login

      </button>




      <p>

        {message}

      </p>


    </main>

  );

}
