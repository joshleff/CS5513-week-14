import { getAllIds2, getData2 } from '../../lib/data';

export async function getStaticProps( { params } ) {
    const itemData = await getData2(params.id);
    return {
        props: {
            itemData
        }
    };
}

export async function getStaticPaths() {
    const paths = getAllIds2();
    return {
        paths,
        fallback: false
    };
}

export default function Entry( { itemData } ) {
    return (
        <div className="container-fluid text-center">
            <article className="card mt-5 text-center">
                <div className="card-body">
                    <h2 className="card-title m-4">{itemData.name}</h2>
                    <h6 className="card-subtitle m-5 text-body-secondary">{itemData.type}</h6>
                    <pre className="m-5">{itemData.art}</pre>

                </div>
            </article>
        </div>
    );
}