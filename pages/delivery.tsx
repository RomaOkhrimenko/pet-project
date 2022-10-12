import DeliveryPage from "../components/pages/DeliveryPage";
import Head from "next/head";

export default function Delivery(): JSX.Element {
    return (
        <div>
            <Head>
                <title>Доставка компанії</title>
                <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1" />
            </Head>
            <DeliveryPage />
        </div>
    )
}