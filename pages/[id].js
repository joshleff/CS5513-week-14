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
    const paths = getAllIds();
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
                    <h5 className="card-title m-4">{itemData.name}</h5>
                    <h6 className="card-subtitle mb-2 text-body-secondary m-4">Age: {itemData.age}</h6>
                    <p className="card-text m-4">{itemData.bio}</p>
                </div>
            </article>
        </>
    );
}