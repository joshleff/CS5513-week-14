import Link from "next/link";
export default function Nav() {
    return (
        <nav className="navbar navbar-dark bg-dark d-flex justify-content-center p-3">
           <button className="btn-outline-dark">
               <Link className ="text-white font-weight-bold" href="/">
                HOME
            </Link>
        </button>

        </nav>
    )
}