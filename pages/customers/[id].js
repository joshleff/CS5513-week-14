import { getAllCustomerIds, getCustomerData } from '@/lib/data';

export async function getStaticProps( { params } ) {
    const itemData = await getCustomerData(params.id);
    return {
        props: {
            itemData
        }
    };
}

export async function getStaticPaths() {
    const paths = await getAllCustomerIds();
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
                    <h1 className="card-title m-4">{itemData.name}</h1>
                    <h6 className="card-title m-4">{itemData.phone_number}</h6>
                    <h6 className="card-title m-4">{itemData.email}</h6>

                </div>
            </article>
        </>
    );
}