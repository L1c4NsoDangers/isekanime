"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

function SearchComponent({ onSearch }) {
  const [query, setQuery] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [notFound, setNotFound] = useState(false); // Tambahkan state notFound
  const router = useRouter();

  const fakeData = [
    { id: "rimurus1", title: "Tensei Shitara Slime Data Ken Season 1" },
    { id: "rimurus2", title: "Tensei Shitara Slime Data Ken Season 2" },
    { id: "rimurusd", title: "Tensei Shitara Slime Data :The Slime Diaries" },
    { id: "dmdppage", title: "DEAD MOUNT DEATH PLAY" },
    { id: "tates3", title: "Tate no Yuusha no Nariagi Season 3" },
    { id: "potionddi", title: "Potion-danomi de Ikinobimasu!" },
  ];

  const handleQueryChange = (query) => {
    setQuery(query);
    const results = fakeData.filter((item) =>
      item.title.toLowerCase().includes(query.toLowerCase())
    );
    setSearchResults(results);
    setNotFound(false);
  };

  const handleSearch = () => {
    const result = fakeData.find(
      (item) => item.title.toLowerCase() === query.toLowerCase()
    );

    if (result) {
      router.push(`/${result.id}`);
    } else {
      setNotFound(true);
      console.log("Item not found.");
    }

    setQuery("");
  };

  return (
    <div className="flex gap-2 items-center justify-between">
      <input
        type="text"
        placeholder="Search..."
        value={query}
        onChange={(e) => handleQueryChange(e.target.value)}
        className="px-2 py-2 border-2 rounded-lg focus:outline-none focus:border-orange-600"
      />
      <button
        onClick={handleSearch}
        className="bg-orange-600 text-white py-2 px-4 rounded-lg hover:bg-orange-600 focus:outline-none focus:ring focus:border-orange-600"
      >
        Search
      </button>

      {searchResults.length > 0 && (
        <div className="absolute mt-[100px] pt-24 w-64 bg-white border rounded-lg shadow-md">
          {searchResults.map((result) => (
            <div
              key={result.id}
              className="px-4 py-2 cursor-pointer hover-bg-gray-100"
              onClick={() => {
                setQuery(result.title);
                setSearchResults([]);
              }}
            >
              {result.title}
            </div>
          ))}
        </div>
      )}

      {notFound && <div className="text-orange-600 font-bold">Not Found!!</div>}
    </div>
  );
}

export default SearchComponent;
