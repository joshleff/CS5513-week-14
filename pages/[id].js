import { getAllIds, getData } from '../lib/data';

export async function getStaticProps( { params } ) {
    const itemData = await getData(params.id);
    return {
        props: {
            itemData
        }
    };
}

export async function getStaticPaths() {
    const paths = await getAllIds();
    return {
        paths,
        fallback: false
    };
}

export default function Entry( { itemData } ) {
    return (
        <>
            <article className="card text-center mt-5">
                <div className="card-body">
                    <h1 className="card-title m-4">{itemData.post_title}</h1>
                    <h6 className="card-title m-2">{itemData.post_date}</h6>
                    <p className="card-text mt-5 w-50 mx-auto">{itemData.post_content.replace( /(<([^>]+)>)/ig, '')}</p>

                </div>
            </article>
        </>
    );
}