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
            <div className={adviceStyle.screen}>
                <blockquote className={adviceStyle.blockquote}>
                    {advice.data}
                </blockquote>
            </div>
        </div>
    )
}