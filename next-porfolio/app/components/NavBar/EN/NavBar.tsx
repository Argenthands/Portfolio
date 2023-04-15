import Link from "next/link";
//import { useLanguage } from '../../Context/Languajes/LanguageContext';

const linksEN = [
    { label: 'Home', path: '/EN' },
    { label: 'About', path: '/about/EN' },
    { label: 'Technologies', path: '/technologies/EN' },
    { label: 'Certifications', path: '/certifications/EN' },

];

  
export default function NavBar() {
    return (
        <nav className="navbar">
            <ul>
                {linksEN.map(({ label, path }) => (
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