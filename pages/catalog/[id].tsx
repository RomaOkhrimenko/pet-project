import CatalogPage from "../../components/pages/CatalogPage";
import {GetStaticPaths, GetStaticProps} from "next";
import {instance} from "../../http/instance";
import {IProduct} from "../../assets/types/IProduct";
import Head from "next/head";

interface IProps {
    products: IProduct[]
}

export default function Catalog({products}: IProps): JSX.Element {
    return (
        <div>
            <Head>
                <title>Каталог товарів</title>
            </Head>
            <CatalogPage products={products} />
        </div>
    )
}

export const getStaticPaths: GetStaticPaths<{ slug: string }> = async () => {

    return {
        paths: [], //indicates that no page needs be created at build time
        fallback: 'blocking' //indicates the type of fallback
    }
}


export const getStaticProps: GetStaticProps = async (context) => {
    const products = await instance.get(`/products/${context.params!.id}`)
        .then((({data}) => data))

    return {
        props: {
            products,
        },
    }
}

