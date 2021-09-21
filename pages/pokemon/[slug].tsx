import React from "react";
import Head from "next/head";
import Header from "../../components/Header";
import { IPokemonProps } from "../../model/stats.interface";

const SelectedPokemon = ({ pokemonInfo }: IPokemonProps) => {
  const { stats } = pokemonInfo;

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
      <section></section>
    </div>
  );
};

export default SelectedPokemon;

export const getServerSideProps = async (pageContext: any) => {
  const pokemonName = pageContext.query.slug;
  const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`);
  const pokemonInfo = await res.json();

  return {
    props: { pokemonInfo },
  };
};
