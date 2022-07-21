import Link from 'next/link';

export default function MyHome() {

    const implementedAPIs = [
        {
            "id": 1,
            "name": "advice"
        }
    ];

    return (
        <div>
            <ul>
                {implementedAPIs.map(api =>
                    <li key={api.id}>
                        <Link href={api.name}>
                            {api.name}
                        </Link>
                    </li>
                )}
            </ul>
        </div>
    );
}