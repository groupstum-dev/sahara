"use client";


import { useState } from "react";

import { createClient } from "@/lib/supabase";



export default function Signup() {


  const supabase = createClient();


  const [name,setName] = useState("");

  const [email,setEmail] = useState("");

  const [password,setPassword] = useState("");

  const [role,setRole] = useState("backer");

  const [message,setMessage] = useState("");

  const [loading,setLoading] = useState(false);




  async function signup(){


    setLoading(true);


    const {error} =
      await supabase.auth.signUp({

        email,

        password,


        options:{


          data:{


            full_name:name,

            role

          }

        }

      });



    if(error){

      setMessage(error.message);


    }else{


      setMessage(
        "Account created. Check your email to confirm."
      );


    }


    setLoading(false);


  }




  return (

    <main className="auth">


      <h1>
        Create Sahara Account
      </h1>



      <input

        className="input"

        placeholder="Full Name"

        value={name}

        onChange={(e)=>setName(e.target.value)}

      />



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



      <select

        className="input"

        value={role}

        onChange={(e)=>setRole(e.target.value)}

      >

        <option value="backer">

          Support projects

        </option>


        <option value="creator">

          Launch projects

        </option>


      </select>




      <button

        className="btn btn-primary"

        onClick={signup}

        disabled={loading}

      >

        {loading ? "Creating..." : "Create Account"}

      </button>




      <p>

        {message}

      </p>



    </main>

  );


}
