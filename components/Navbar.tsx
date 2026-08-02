import Link from "next/link";


export default function Navbar(){

return (

<nav className="navbar">


<div className="logo">
Sahara
</div>


<div className="nav-links">

<Link href="/campaigns">
Discover
</Link>


<Link href="/create">
For Creators
</Link>


<Link href="#">
Impact
</Link>


<Link href="/login">
Login
</Link>


<Link

href="/signup"

className="nav-button"

>

Start Campaign

</Link>


</div>


</nav>

);

}
