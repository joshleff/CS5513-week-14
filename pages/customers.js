
import Link from 'next/link';
import { getSortedCustomerList } from '@/lib/data';

export async function getStaticProps() {
    const allData = await getSortedCustomerList();
    return {
        props: {
            allData
        }
    };
}

export default function Customers ( { allData } ) {
    return (
        <div className="container-fluid">
            <h1 className="text-center m-5 ">CUSTOMERS</h1>

            <div className="list-group mt-5 text-center">
                { allData && allData.map(
                        ({id, name}) => (
                            <Link key={id} href={`/customers/${id}`} className="list-group-item list-group-item-action w-50 mx-auto">
                                {name}
                            </Link>
                        )
                    )
                }
            </div>

        </div>
    )

}