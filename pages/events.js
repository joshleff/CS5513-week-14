
import Link from 'next/link';
import { getSortedEventList } from '@/lib/data';

export async function getStaticProps() {
    const allData = await getSortedEventList();
    return {
        props: {
            allData
        }
    };
}

export default function Events ( { allData } ) {
    return (
        <div className="container-fluid">
            <h1 className="text-center m-5 ">Events</h1>

            <div className="list-group mt-5 text-center">
                {allData
                    .map(
                        ({id, name}) => (
                            <Link key={id} href={`/events/${id}`} className="list-group-item list-group-item-action w-50 mx-auto">
                                {name}
                            </Link>
                        )
                    )
                }
            </div>

        </div>
    )

}