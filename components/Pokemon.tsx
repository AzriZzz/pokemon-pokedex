/* eslint-disable @next/next/link-passhref */
import React from "react";
import { IPokemon } from "../model/index.interface";
import Image from "next/image";
import Link from "next/link";

const Pokemon: React.FC<{
  pokemon: IPokemon;
  index: number;
  pokemonId: number;
}> = ({ pokemon, index, pokemonId }) => {
  return (
    <div className="flex items-center justify-center w-full">
      {/* <Link href={`/pokemon/${index}`}> */}
      <Link href={`/pokemon?id=${pokemonId}`}>
        <div className="w-64 py-5 transition ease-out bg-white border-2 border-gray-200 rounded-md shadow-md cursor-pointer m-7 hover:shadow-lg hover:w-12">
          <div>
            <Image
              src={pokemon.image}
              alt={pokemon.name}
              className="relative"
              width={200}
              height={200}
              objectFit="contain"
            />
          </div>
          <h1 className="text-sm text-center uppercase transition ease-in md:text-xl md:font-semibold hover:text-red-500">
            <span className="relative hidden pr-2 md:inline-block top-1">
              <Image
                src="/images/pokeball.png"
                alt="Pokeball"
                width={20}
                height={20}
                objectFit="contain"
              />
            </span>
            {pokemon.name}
            <span className="relative hidden pl-2 md:inline-block top-1">
              <Image
                src="/images/pokeball.png"
                alt="Pokeball"
                width={20}
                height={20}
                objectFit="contain"
              />
            </span>
          </h1>
        </div>
      </Link>
    </div>
  );
};

export default Pokemon;
