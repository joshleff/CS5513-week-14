
import Link from 'next/link';
import { getSortedList } from '@/lib/data';

export async function getStaticProps() {
    const allData = await getSortedList();
    return {
        props: {
            allData
        }
    };
}

export default function Home ( { allData } ) {
    return (
            <div className="container-fluid">
                <h1 className="text-center m-5 ">Basic Headless CMS App</h1>

                <div className="list-group mt-5 text-center">
                    {allData
                        .sort((a, b) => a.id > b.id ? 1 : -1 )
                        .map(
                        ({id, name}) => (
                            <Link key={id} href={`/${id}`} className="list-group-item list-group-item-action w-50 mx-auto">
                                {name}
                            </Link>
                        )
                    )
                    }
                </div>

            </div>
    )

}