import React from "react";
import Head from "next/head";
import Header from "../components/Header";
import Image from "next/image";
import { IPokemonProps } from "../model/stats.interface";
import Link from "next/link";
import { useRouter } from "next/router";

const SelectedPokemon = ({ pokemonInfo }: any) => {
  const router = useRouter();
  const { image, name, stats, types } = pokemonInfo;
  const metaStats = stats.map((stat: any, index: number) => ({
    index: index,
    statName: stat.stat.name,
    url: stat.stat.url,
    base_stat: stat.base_stat,
    effort: stat.effort,
  }));

  const metaTypes = types.map((type: any) => ({
    index: type.slot,
    type: type.type.name,
  }));

  return (
    <div>
      <Head>
        <title>Pokedex</title>
        <meta
          name="description"
          content="Build with Next.js, Tailwind, Typescript"
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

            <h1 className="text-2xl font-semibold capitalize">{name}</h1>
          </div>
          <div className="pt-10 text-center border-gray-200 md:pt-5 md:pl-5 md:border-l-4 md:text-left">
            <h1 className="pb-4 text-2xl font-semibold underline">
              Base Stats
            </h1>
            <div className="flex flex-col justify-between h-auto">
              <div>
                {metaStats.map(({ index, statName, base_stat }) => (
                  <div key={index} className="pt-2">
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
                {metaTypes.map(({ index, type }) => (
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

        <div className="flex justify-center w-full pt-28">
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

export async function getServerSideProps({ query }) {
  const id = query.id;
  try {
    const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
    const pokemonInfo = await res.json();
    const paddedId = ("00" + id).slice(-3);
    pokemonInfo.image = `https://assets.pokemon.com/assets/cms2/img/pokedex/detail/${paddedId}.png`;
    return {
      props: { pokemonInfo },
    };
  } catch (err) {
    console.error(err);
  }
}
