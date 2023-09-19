
import Link from 'next/link';
import { getSortedList } from '../lib/data';

export async function getStaticProps() {
    const allData = getSortedList();
    return {
        props: {
            allData
        }
    };
}

export default function Home ( { allData } ) {
    return (
            <>
                <h1 className="text-center m-4 ">List of persons</h1>

                <div className="list-group mt-4">
                    {allData.map(
                        ({id, name}) => (
                            <Link key={id} href={`/${id}`} className="list-group-item list-group-item-action">
                                {name}
                            </Link>
                        )
                    )
                    }
                </div>
            </>
    )

}