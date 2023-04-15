import Link from "next/link";

const linksES = [
    { label: 'Inicio', path: '/ES' },
    { label: 'Sobre mí', path: '/about/ES' },
    { label: 'Tecnologías', path: '/technologies/ES' },
    { label: 'Certificaciones', path: '/certifications/ES' },
];

enum Languages {
    EN = "EN",
    ES = "ES"
}
export default function NavBar() {
    return (
        <nav className="navbar">
            <ul>
                {linksES.map(({ label, path }) => (
                    <li key={label}>
                        <Link href={path}>
                            {label}
                        </Link>
                    </li>
                ))}
            </ul>
        </nav>
    );
}