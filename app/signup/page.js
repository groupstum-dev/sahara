"use client";

import { useState } from "react";
import { createClient } from "@/lib/supabase";


export default function Signup() {

  const supabase = createClient();


  const [name, setName] = useState("");

  const [email, setEmail] = useState("");

  const [password, setPassword] = useState("");

  const [message, setMessage] = useState("");



  async function signup() {


    const { error } = await supabase.auth.signUp({

      email,

      password,

      options: {

        data: {

          full_name: name

        }

      }

    });



    if (error) {

      setMessage(error.message);

    } else {

      setMessage(
        "Account created. Check your email to confirm."
      );

    }

  }



  return (

    <main className="auth">


      <h1>
        Create Sahara Account
      </h1>


      <input

        placeholder="Full Name"

        value={name}

        onChange={(e) => setName(e.target.value)}

      />


      <input

        type="email"

        placeholder="Email"

        value={email}

        onChange={(e) => setEmail(e.target.value)}

      />


      <input

        type="password"

        placeholder="Password"

        value={password}

        onChange={(e) => setPassword(e.target.value)}

      />


      <button onClick={signup}>
        Create Account
      </button>


      <p>
        {message}
      </p>


    </main>

  );

}
