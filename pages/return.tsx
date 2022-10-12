import ReturnPage from "../components/pages/ReturnPage";
import Head from "next/head";

export default function Return(): JSX.Element {
    return (
        <div>
            <Head>
                <title>Повернення товару</title>
            </Head>
            <ReturnPage />
        </div>
    )
}
