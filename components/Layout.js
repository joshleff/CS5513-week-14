import Head from "next/head";
import Link from "next/link";
import Nav from "./Nav";


const Layout = ({ children }) => {
    return (
        <>
            <Head>
                <title></title>
            </Head>
            <Nav />

            <div className={"container-fluid d-flex flex-column"}>

                {children}
            </div>

        </>
    )
}

export default Layout;
