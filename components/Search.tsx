import React from "react";
// import { SearchIcon } from "@heroicons/react/solid";
import { useState } from "react";
import Image from "next/image";

function Search(props: any) {
  const [searchInput, setSearchInput] = useState("");

  const onSearch = (e: any) => {
    if (!e.currentTarget.value.length) {
      // clear save filtered, and to re-init the listing back to use original object
    }
    setSearchInput(e.currentTarget.value);
  };

  return (
    <div>
      <div className="container flex flex-col items-center justify-center pb-3 sm:px-6 lg:px-8">
        {/* <h2 className='pb-4 text-3xl font-semibold'>Search</h2> */}
        <div className="relative">
          <input
            id="title"
            name="title"
            type="text"
            className="z-0 pl-5 pr-8 border-2 border-gray-200 rounded-full h-14 w-80 md:w-96 focus:shadow focus:outline-none"
            placeholder="Title"
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
              />
            </div>
            {/* <SearchIcon
              onClick={() => {}}
              className="hidden h-8 p-2 text-white transition ease-out bg-red-400 rounded-full cursor-pointer md:inline-flex md:mx-2 hover:scale-110 active:scale-100"
            /> */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Search;
