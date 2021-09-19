import { GetStaticPropsContext } from "next";
import Head from "next/head";
import Pokemon from "../components/Pokemon";
import Image from "next/image";
import { IHomeProps } from "../model/index.interface";

export default function Home({ pokemons }: IHomeProps) {
  return (
    <div className='bg-center bg-cover bg-hero-pattern'>
      <Head>
        <title>Pokedex</title>
        <meta
          name="description"
          content="Build with Next.js, Tailwind, Typescript"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="flex justify-center p-10 text-center">
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
        <div className="flex pl-5">
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
        <div className="grid items-center justify-center grid-cols-2 text-center md:grid-cols-3 lg:grid-cols-4">
          {pokemons.map((pokemon) => (
            <Pokemon key={pokemon.name} pokemon={pokemon} />
          ))}
        </div>
      </section>
    </div>
  );
}

export async function getStaticProps(context: GetStaticPropsContext) {
  try {
    const res = await fetch("https://pokeapi.co/api/v2/pokemon?limit=150");
    const { results } = await res.json();
    const pokemons = results.map((pokeman: string, index: number) => {
      const paddedId = ("00" + (index + 1)).slice(-3);

      const image = `https://assets.pokemon.com/assets/cms2/img/pokedex/detail/${paddedId}.png`;
      return { ...(pokeman as {}), image };
    });
    return {
      props: { pokemons },
    };
  } catch (err) {
    console.error(err);
  }
}
