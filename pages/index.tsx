import Head from 'next/head'
import Image from 'next/image'
import HomePage from "../components/pages/HomePage";
import {instance} from "../http/instance";

export default function Home({products}: any): JSX.Element {
  return (
    <div>
      <HomePage products={products} />
    </div>
  )
}

export async function getStaticProps() {
    const products = await instance.get('/products')
        .then((({data}) => data.products))

    return {
        props: {
            products
        }, // will be passed to the page component as props
    }
}
