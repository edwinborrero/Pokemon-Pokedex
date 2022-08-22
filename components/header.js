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

        <h1>Pokemon by types</h1>
        <ul>
            <li>
                <Link href={"/pokeType/normal"}>
                    <a>Normal</a>
                </Link>
            </li>
            <li>
                <Link href={"/pokeType/fire"}>
                    <a>Fire</a>
                </Link>
            </li>
            <li>
                <Link href={"/pokeType/water"}>
                    <a>Water</a>
                </Link>
            </li>
            <li>
                <Link href={"/pokeType/electric"}>
                    <a>Electric</a>
                </Link>
            </li>
            <li>
                <Link href={"/pokeType/grass"}>
                    <a>Grass</a>
                </Link>
            </li>
            <li>
                <Link href={"/pokeType/ice"}>
                    <a>Ice</a>
                </Link>
            </li>
            <li>
                <Link href={"/pokeType/fighting"}>
                    <a>Fighting</a>
                </Link>
            </li>
            <li>
                <Link href={"/pokeType/poison"}>
                    <a>Poison</a>
                </Link>
            </li>
            <li>
                <Link href={"/pokeType/ground"}>
                    <a>Ground</a>
                </Link>
            </li>
            <li>
                <Link href={"/pokeType/flying"}>
                    <a>Flying</a>
                </Link>
            </li>
            <li>
                <Link href={"/pokeType/psychic"}>
                    <a>Psychic</a>
                </Link>
            </li>
            <li>
                <Link href={"/pokeType/bug"}>
                    <a>Bug</a>
                </Link>
            </li>
            <li>
                <Link href={"/pokeType/rock"}>
                    <a>Rock</a>
                </Link>
            </li>
            <li>
                <Link href={"/pokeType/ghost"}>
                    <a>Ghost</a>
                </Link>
            </li>
            <li>
                <Link href={"/pokeType/dragon"}>
                    <a>Dragon</a>
                </Link>
            </li>
            <li>
                <Link href={"/pokeType/dark"}>
                    <a>Dark</a>
                </Link>
            </li>
            <li>
                <Link href={"/pokeType/steel"}>
                    <a>Steel</a>
                </Link>
            </li>
            <li>
                <Link href={"/pokeType/fairy"}>
                    <a>Fairy</a>
                </Link>
            </li>
        </ul>
    </header>
);

export default Header;