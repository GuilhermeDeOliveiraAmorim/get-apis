import Card from "../../components/ghibli/card";
import useGetStudioGhibliFilms from "../../hooks/useGetStudioGhibliFilms";
import ghibliStyle from "./Ghibli.module.css";
import bg_01 from '../../public/73-737065_living-waters-ag-wave-vector-clipart-1024x546.png'
import bg_02 from '../../public/567c6425ccb2f2d2274e3295293563734-1024x576.jpg'
import bg_03 from '../../public/Capture2-1024x640.jpg'
import bg_04 from '../../public/D7K2JWwWkAAnpa82-1024x640.jpg'
import bg_05 from '../../public/d78b1219f9991c69a7619d362548cb79f4d29e02_hq2.jpg'
import bg_06 from '../../public/d540rv6-5725a401-30b4-496e-b5e3-e0aba5080f061-1024x576.jpg'
import bg_07 from '../../public/dims1-1024x546.jpg'
import Head from "next/head";

export default function Ghibli() {

	const ghibliFilms = useGetStudioGhibliFilms();

	const bgGhibli = [bg_01, bg_02, bg_03, bg_04, bg_05, bg_06, bg_07];

	const image = bgGhibli[Math.floor(Math.random() * bgGhibli.length)];

	const divStyle = {
		width: '100%',
		height: '100vh',
		backgroundImage: `url(${image.src})`,
		backgroundPosition: 'center',
		backgroundRepeat: 'no-repeat',
		backgroundSize: 'cover',
		backgroundAttachment: 'fixed'
	};

	return (
		<div style={divStyle}>
			<Head>
				<title>Studio Ghibli</title>
				<meta name="viewport" content="initial-scale=1.0, width=device-width" />
			</Head>
			<div className={ghibliStyle.screen}>
				<ul className={ghibliStyle.cards}>
					{ghibliFilms.data?.map((film) => (
						<li className={ghibliStyle.li_size} key={film.id}>
							<Card {...film} />
						</li>
					))}
				</ul>
			</div>
		</div>

	);
}
