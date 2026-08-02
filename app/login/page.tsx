"use client";

import { useState } from "react";
import { createClient } from "@/lib/supabase";


export default function Login() {


  const supabase = createClient();


  const [email, setEmail] = useState("");

  const [password, setPassword] = useState("");

  const [message, setMessage] = useState("");

  const [loading, setLoading] = useState(false);



  async function login() {


    setLoading(true);

    setMessage("");


    const { error } =
      await supabase.auth.signInWithPassword({

        email,

        password

      });



    if (error) {

      setMessage(error.message);


    } else {


      window.location.href="/dashboard";


    }


    setLoading(false);


  }



  return (

    <main className="auth">


      <h1>
        Login to Sahara
      </h1>



      <input

        className="input"

        type="email"

        placeholder="Email"

        value={email}

        onChange={(e)=>setEmail(e.target.value)}

      />



      <input

        className="input"

        type="password"

        placeholder="Password"

        value={password}

        onChange={(e)=>setPassword(e.target.value)}

      />



      <button

        className="btn btn-primary"

        onClick={login}

        disabled={loading}

      >

        {loading ? "Logging in..." : "Login"}

      </button>



      <p>

        {message}

      </p>



    </main>

  );

}
