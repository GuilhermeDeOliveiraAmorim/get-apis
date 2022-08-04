import Head from "next/head";
import useGetAdviceRandom from "../../hooks/useGetAdviceRandom"
import useGetImageRandom from "../../hooks/useGetImageRandom";
import adviceStyle from "./Advice.module.css"

export default function Advice() {

    const advice = useGetAdviceRandom();

    const image = useGetImageRandom();

    const divStyle = {
        width: '100%',
        height: '100vh',
        backgroundImage: `url(${image.data})`,
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover'
    };

    return (
        <div style={divStyle}>
            <Head>
                <title>Get Advice</title>
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />
            </Head>
            <div className={adviceStyle.advice}>
                <blockquote className={adviceStyle.blockquote}>
                    {advice.data}
                </blockquote>
            </div>
        </div>
    )
}