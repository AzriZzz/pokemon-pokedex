import React from "react";
import Head from "next/head";
import Header from "../components/Header";
import Image from "next/image";
import { IPokemonProps } from "../model/stats.interface";
import { useRouter } from "next/router";

const SelectedPokemon = ({ pokemonData }: IPokemonProps) => {
  const router = useRouter();
  const { image, stats, types } = pokemonData;
  const loweCase = pokemonData.name.toLowerCase()
  const name = pokemonData.name.charAt(0).toUpperCase() + loweCase.slice(1);

  const metaStats = stats?.map((stat, index) => ({
    index: index,
    statName: stat.stat.name,
    url: stat.stat.url,
    base_stat: stat.base_stat,
    effort: stat.effort,
  }));

  const metaTypes = types?.map((type) => ({
    index: type.slot,
    type: type.type.name,
  }));

  return (
    <div>
      <Head>
        <title className='capitalize'>{name}</title>
        <meta
          name="description"
          content={`${name} is a pokemon that's been released from 1st Pokemon Generation`}
        />

        <meta property="og:image" content={image} />
        <meta property="og:title" content={`Pokemon: ${name}`} />
        <meta
          property="og:description"
          content={`${name} is a pokemon that's been released from 1st Pokemon Generation`}
        />

        <meta property="twitter:image" content={image} />
        <meta property="twitter:title" content={`Pokemon: ${name}`} />
        <meta
          property="twitter:description"
          content={`${name} is a pokemon that's been released from 1st Pokemon Generation`}
        />  

        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />
      <section className="max-w-screen-lg p-10 mx-auto">
        <div className="grid grid-cols-1 p-10 bg-white md:grid-cols-2 rounded-xl">
          <div className="text-center">
            <Image
              src={image}
              alt={name}
              className="relative"
              width={300}
              height={300}
              objectFit="contain"
            />

            <h1 className="text-2xl font-semibold">{name}</h1>
          </div>
          <div className="pt-10 text-center border-gray-200 md:pt-5 md:pl-5 md:border-l-4 md:text-left">
            <h1 className="pb-4 text-2xl font-semibold underline">
              Base Stats
            </h1>
            <div className="flex flex-col justify-between h-auto">
              <div>
                {metaStats?.map(({ statName, base_stat }) => (
                  <div key={statName} className="pt-2">
                    <ul>
                      <li>
                        <span className="font-bold uppercase">
                          {statName} :
                        </span>
                        <span> {base_stat}</span>
                      </li>
                    </ul>
                  </div>
                ))}
              </div>
              <div className="pt-11">
                <span className="text-2xl font-semibold capitalize ">
                  Type :
                </span>
                {metaTypes?.map(({ index, type }) => (
                  <span
                    key={index}
                    className="pt-2 text-2xl font-semibold capitalize"
                  >
                    {" "}
                    {type}{" "}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="flex justify-center w-full pt-10">
          <button
            onClick={() => router.push("/")}
            className="px-10 py-2 font-semibold bg-yellow-300 border-2 border-yellow-500 rounded-md hover:bg-yellow-400 focus:bg-yellow-300"
          >
            Back
          </button>
        </div>
      </section>
    </div>
  );
};

export default SelectedPokemon;

export async function getServerSideProps(pageContext: { query: { id: number; }; }) {
  const id = pageContext.query.id;
  try {
    const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
    const pokemonInfo = await res.json();
    const paddedId = ("00" + id).slice(-3);
    pokemonInfo.image = `https://assets.pokemon.com/assets/cms2/img/pokedex/detail/${paddedId}.png`;

    const { name, stats, types } = pokemonInfo;
    const pokemonData = {
      image: pokemonInfo.image,
      name,
      stats,
      types
    }
    return {
      props: { pokemonData },
    };
  } catch (err) {
    console.error(err);
  }
}
