import Link from 'next/link';
import stylesHome from './MyHome.module.css'

export default function MyHome() {

    const implementedAPIs = [
        {
            "id": 1,
            "url": "advice",
            "name": "Advices"
        },
        {
            "id": 2,
            "url": "ghibli",
            "name": "Ghibli Movies"
        },
        {
            "id": 3,
            "url": "https://rick-and-morty-card-app.vercel.app/",
            "name": "Rick And Morty"
        },
    ];

    return (
        <div className={stylesHome.gridContainer}>
            <ul>
                {implementedAPIs.map(api =>
                    <li className={stylesHome.gridItem} key={api.id}>
                        <Link href={api.url}>
                            {api.name}
                        </Link>
                    </li>
                )}
            </ul>
        </div>
    );
}