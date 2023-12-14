import Link from "next/link";
export default function Nav() {
    return (
        <nav className="navbar navbar-dark bg-dark d-flex justify-content-start p-3">
            <button className="btn-outline-dark mx-3">
                <Link className ="text-white font-weight-bold" href="/">HOME</Link>
            </button>
            <button className="btn-outline-dark mx-3">
                <Link href="/products" className ="text-white font-weight-bold">PRODUCTS</Link>
            </button>
            <button className="btn-outline-dark mx-3"><Link href="/customers" className ="text-white font-weight-bold">CUSTOMERS</Link></button>
            <button className="btn-outline-dark mx-3"><Link href="/events" className ="text-white font-weight-bold">EVENTS</Link></button>

        </nav>
    )
}