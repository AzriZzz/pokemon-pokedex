import React from "react";
import Image from "next/image";
import { useRouter } from "next/router";

const Header = () => {
  const router = useRouter();

  return (
    <div className="flex items-center justify-center">
      <div onClick={() => router.push("/")}>
        <Image
          src="/images/pokemon_logo.png"
          alt="Pokemon Logo"
          className="cursor-pointer bg-purple hover:scale-125"
          width={200}
          height={150}
          objectFit="contain"
        />
      </div>
      <div className="relative pl-5 top-3 lg:top-3">
        <Image
          src="/images/pokedex.png"
          alt="Pokemon Logo"
          className="relative cursor-pointer top-5"
          width={70}
          height={70}
          objectFit="contain"
        />
      </div>
    </div>
  );
};

export default Header;
