import { GetStaticPropsContext } from "next";
import Head from "next/head";
import Pokemon from "../components/Pokemon";
import Image from "next/image";
import { IHomeProps, IPokemon } from "../model/index.interface";
import Search from "../components/Search";
import { useEffect, useState } from "react";

export default function Home({ pokemons }: IHomeProps) {
  const [search, setSearch] = useState<string>("");
  const [pokemonList, setPokemonList] = useState<IPokemon[]>(pokemons);

  useEffect(() => {
    // filter listing according to pokemon name
    const searchTutorial = pokemons.filter((pokemon) =>
      pokemon.name.toLowerCase().includes(search)
    );
    setPokemonList(searchTutorial);
  }, [pokemons, search]);

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

      <div className="flex items-center justify-center p-10">
        <div>
          <Image
            src="/images/pokemon_logo.png"
            alt="Pokemon Logo"
            className="cursor-pointer bg-purple hover:scale-125"
            width={500}
            height={250}
            objectFit="contain"
          />
        </div>
        <div className="relative pl-5 top-3 lg:top-5">
          <Image
            src="/images/pokedex.png"
            alt="Pokemon Logo"
            className="relative cursor-pointer top-5"
            width={130}
            height={130}
            objectFit="contain"
          />
        </div>
      </div>

      <section className="mx-auto pokemons-list max-w-screen-2xl">
        <Search passSearch={setSearch} />

        {pokemonList.length ? (
          <div className="grid items-center justify-center grid-cols-2 text-center md:grid-cols-3 lg:grid-cols-4">
            {pokemonList.map((pokemon, index) => (
              <Pokemon
                key={pokemon.name}
                pokemon={pokemon}
                index={index + 1}
                pokemonId={pokemon.pokemonId}
              />
            ))}
          </div>
        ) : (
          <div className="flex justify-center w-full">
            <Image
              src="https://loginportal.funnyjunk.com/pictures/404+body+not+found+diglett_b72110_4463753.jpg"
              alt="Result not found using diglett image"
              className="relative cursor-pointer top-5"
              width={300}
              height={300}
              objectFit="contain"
            />
          </div>
        )}
      </section>
    </div>
  );
}

export async function getStaticProps(context: GetStaticPropsContext) {
  try {
    const res = await fetch("https://pokeapi.co/api/v2/pokemon?limit=151");
    const { results } = await res.json();
    const pokemons = results.map((pokeman: string, index: number) => {
      const paddedId = ("00" + (index + 1)).slice(-3);

      const image = `https://assets.pokemon.com/assets/cms2/img/pokedex/detail/${paddedId}.png`;
      const pokemonId = parseInt(paddedId);
      return { ...(pokeman as {}), image, pokemonId };
    });
    return {
      props: { pokemons },
    };
  } catch (err) {
    console.error(err);
  }
}
