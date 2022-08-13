import Link from "next/link";

const Header = () => (
    <header>
        <h1>Pokemon from the different regions</h1>
        <ul>
            <li>
                <Link href={"/pokeRegion/kanto"}>
                    <a>Kanto</a>
                </Link>
            </li>
            <li>
                <Link href={"/pokeRegion/johto"}>
                    <a>Johto</a>
                </Link>
            </li>
            <li>
                <Link href={"/pokeRegion/hoenn"}>
                    <a>Hoenn</a>
                </Link>
            </li>
            <li>
                <Link href={"/pokeRegion/sinnoh"}>
                    <a>Sinnoh</a>
                </Link>
            </li>
            <li>
                <Link href={"/pokeRegion/unova"}>
                    <a>Unova</a>
                </Link>
            </li>
            <li>
                <Link href={"/pokeRegion/kalos"}>
                    <a>Kalos</a>
                </Link>
            </li>
            <li>
                <Link href={"/pokeRegion/alola"}>
                    <a>Alola</a>
                </Link>
            </li>
            <li>
                <Link href={"/pokeRegion/hisui"}>
                    <a>Hisui</a>
                </Link>
            </li>
        </ul>
    </header>
);

export default Header;