import homeStyle from 'Home.module.css';
import Link from 'next/link';

export default function MyHome() {

    const implementedAPIs = [
        "advice"
    ];

    return (
        <ul>
            {implementedAPIs.map(api =>
                <li>
                    <Link href={api}>
                        {api}
                    </Link>
                </li>
            )}
        </ul>
    );
}