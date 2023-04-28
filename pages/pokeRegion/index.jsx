import Link from "next/link";

export default function HomeRegion() {

    return (
        <>
            <h1>Pokemon from the different regions</h1>
            <div className="wrapper-region">
            
                <Link href={"/pokeRegion/kanto"}>
                    <div className="button-region">
                        <img src="/images/regions/LGPE_Kanto_Map.png"/>
                        <a className="a-region">Kanto</a>
                    </div>
                </Link>
                <Link href={"/pokeRegion/johto"}>
                    <div className="button-region">
                        <img src="/images/regions/JohtoMap.png"/>
                        <a className="a-region">Johto</a>
                    </div>
                </Link>
                <Link href={"/pokeRegion/hoenn"}>
                    <div className="button-region">
                        <img src="/images/regions/Hoenn_ORAS.png"/>
                        <a className="a-region">Hoenn</a>
                    </div>
                </Link>
                <Link href={"/pokeRegion/sinnoh"}>
                    <div className="button-region">
                        <img src="/images/regions/Sinnoh_BDSP_artwork.png"/>
                        <a className="a-region">Sinnoh</a>
                    </div>
                </Link>
                <Link href={"/pokeRegion/unova"}>
                    <div className="button-region">
                        <img src="/images/regions/Unova_B2W2_alt.png"/>
                        <a className="a-region">Unova</a>
                    </div>
                </Link>
                <Link href={"/pokeRegion/kalos"}>
                    <div className="button-region">
                        <img src="/images/regions/Kalos_alt.png"/>
                        <a className="a-region">Kalos</a>
                    </div>
                </Link>
                <Link href={"/pokeRegion/alola"}>
                    <div className="button-region">
                        <img src="/images/regions/Alola_USUM_artwork.png"/>
                        <a className="a-region">Alola</a>
                    </div>
                </Link>
                <Link href={"/pokeRegion/hisui"}>
                    <div className="button-region">
                        <img src="/images/regions/Legends_Arceus_Hisui.png"/>
                        <a className="a-region">Hisui</a>
                    </div>
                </Link>
            </div>
        </>
    );
};