import React from "react";
// import { SearchIcon } from "@heroicons/react/solid";
import { useState } from "react";
import Image from "next/image";

function Search(props: any) {
  const [searchInput, setSearchInput] = useState<string>("Search pokemon");

  const onSearch = (e: any) => {
    const keyword = e.currentTarget.value;
    if (!keyword.length) {
    }
    props.passSearch(keyword);
  };

  return (
    <div>
      <div className="container flex flex-col items-center justify-center pb-3 mx-auto sm:px-6 lg:px-8">
        <div className="relative">
          <input
            id="title"
            name="title"
            type="text"
            className="z-0 pl-5 pr-8 text-xl border-2 border-gray-200 rounded-full h-14 w-80 md:w-96 focus:shadow focus:outline-none"
            placeholder={searchInput}
            onChange={onSearch}
          />
          <div className="absolute top-4 right-3">
            <i className="z-20 text-gray-400 fa fa-search hover:text-gray-500"></i>
            <div className='relative bottom-2 left-1'>
              <Image
                src="/images/pokeball.png"
                alt="Pokeball"
                width={45}
                height={45}
                objectFit="contain"
                onClick={() => {}}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Search;
