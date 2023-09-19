
import Link from 'next/link';
import { getSortedList, getSortedList2 } from '../lib/data';

export async function getStaticProps() {
    const allData = getSortedList();
    const allData2 = getSortedList2()
    return {
        props: {
            allData,
            allData2
        }
    };
}

export default function Home ( { allData, allData2 } ) {
    return (
            <div className="container-fluid">
                <h1 className="text-center m-5 ">The Captains</h1>

                <div className="list-group mt-4 text-center">
                    {allData.map(
                        ({id, name}) => (
                            <Link key={id} href={`/${id}`} className="list-group-item list-group-item-action">
                                {name}
                            </Link>
                        )
                    )
                    }
                </div>

                <h1 className="text-center m-5">The Ships</h1>

                <div className="list-group mt-4 text-center">
                    {allData2.map(
                        ({id, name}) => (
                            <Link key={id} href={`/boats/${id}`} className="list-group-item list-group-item-action">
                                {name}
                            </Link>
                        )
                    )
                    }
                </div>



            </div>
    )

}