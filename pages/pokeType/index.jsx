import Link from "next/link";

export default function HomeType() {

    return (
        <>
            <h1>Pokemon by types</h1>
            <div className="wrapper">

                <Link href={"/pokeType/normal"}>
                    <div className="icon normal">
                        <img src="/images/icons/normal.svg"/>
                        <a className="a-type">Normal</a>
                    </div>
                </Link>
                <Link href={"/pokeType/fire"}>
                    <div className="icon fire">
                        <img src="/images/icons/fire.svg"/>
                        <a className="a-type">Fire</a>
                    </div>
                </Link>
                <Link href={"/pokeType/water"}>
                    <div className="icon water">
                        <img src="/images/icons/water.svg"/>
                        <a className="a-type">Water</a>
                    </div>
                </Link>
                <Link href={"/pokeType/electric"}>
                    <div className="icon electric">
                        <img src="/images/icons/electric.svg"/>
                        <a className="a-type">Electric</a>
                    </div>
                </Link>
                <Link href={"/pokeType/grass"}>
                    <div className="icon grass">
                        <img src="/images/icons/grass.svg"/>
                        <a className="a-type">Grass</a>
                    </div>
                </Link>
                <Link href={"/pokeType/ice"}>
                    <div className="icon ice">
                        <img src="/images/icons/ice.svg"/>
                        <a className="a-type">Ice</a>
                    </div>
                </Link>
                <Link href={"/pokeType/fighting"}>
                    <div className="icon fighting">
                        <img src="/images/icons/fighting.svg"/>
                        <a className="a-type">Fighting</a>
                    </div>
                </Link>
                <Link href={"/pokeType/poison"}>
                    <div className="icon poison">
                        <img src="/images/icons/poison.svg"/>
                        <a className="a-type">Poison</a>
                    </div>
                </Link>
                <Link href={"/pokeType/ground"}>
                    <div className="icon ground">
                        <img src="/images/icons/ground.svg"/>
                        <a className="a-type">Ground</a>
                    </div>
                </Link>
                <Link href={"/pokeType/flying"}>
                    <div className="icon flying">
                        <img src="/images/icons/flying.svg"/>
                        <a className="a-type">Flying</a>
                    </div>
                </Link>
                <Link href={"/pokeType/psychic"}>
                    <div className="icon psychic">
                        <img src="/images/icons/psychic.svg"/>
                        <a className="a-type">Psychic</a>
                    </div>
                </Link>
                <Link href={"/pokeType/bug"}>
                    <div className="icon bug">
                        <img src="/images/icons/bug.svg"/>
                        <a className="a-type">Bug</a>
                    </div>
                </Link>
                <Link href={"/pokeType/rock"}>
                    <div className="icon rock">
                        <img src="/images/icons/rock.svg"/>
                        <a className="a-type">Rock</a>
                    </div>
                </Link>
                <Link href={"/pokeType/ghost"}>
                    <div className="icon ghost">
                        <img src="/images/icons/ghost.svg"/>
                        <a className="a-type">Ghost</a>
                    </div>
                </Link>
                <Link href={"/pokeType/dragon"}>
                    <div className="icon dragon">
                        <img src="/images/icons/dragon.svg"/>
                        <a className="a-type">Dragon</a>
                    </div>
                </Link>
                <Link href={"/pokeType/dark"}>
                    <div className="icon dark">
                        <img src="/images/icons/dark.svg"/>
                        <a className="a-type">Dark</a>
                    </div>
                </Link>
                <Link href={"/pokeType/steel"}>
                    <div className="icon steel">
                        <img src="/images/icons/steel.svg"/>
                        <a className="a-type">Steel</a>
                    </div>
                </Link>
                <Link href={"/pokeType/fairy"}>
                    <div className="icon fairy">
                        <img src="/images/icons/fairy.svg"/>
                        <a className="a-type">Fairy</a>
                    </div>
                </Link>
            </div>
        </>
    );
};