import ProductsPage from "../../components/pages/ProductsPage";
import {instance} from "../../http/instance";
import {GetStaticPaths, GetStaticProps} from "next";
import {IProduct} from "../../assets/types/IProduct";
import Head from "next/head";

interface IProps {
    product: IProduct,
    productCategories: IProduct[]
}


export default function Product({product, productCategories}: IProps): JSX.Element {
    return (
        <div>
            <Head>
                <title>{product.name}</title>
            </Head>
            <ProductsPage product={product} productCategories={productCategories} />
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
    console.log(context)

    const product = await instance.get(`/product/${context.params!.slug}`)
        .then((({data}) => data.product[0]))

    const productCategories = await instance.get(`/products/${product?.category_id}`)
        .then(({data}) => data)

    return {
        props: {
            product,
            productCategories
        },
    }
}
