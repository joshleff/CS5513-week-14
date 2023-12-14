import { getAllProductIds, getProductData } from '@/lib/data';

export async function getStaticProps( { params } ) {
    const itemData = await getProductData(params.id);
    return {
        props: {
            itemData
        }
    };
}

export async function getStaticPaths() {
    const paths = await getAllProductIds();
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
                    <h1 className="card-title m-4">{itemData.product_name}</h1>
                    <h6 className="card-title m-4">{itemData.price}</h6>
                    <h6 className="card-title m-4 w-50 mx-auto">{itemData.description}</h6>

                </div>
            </article>
        </>
    );
}