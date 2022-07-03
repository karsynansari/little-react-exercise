import "./styles.css";
import { useState } from "react";

function mockSearch(searchTerm) {
  return ["spoon", "waffle maker", "garlic press"];
}

export default function App() {
  const [input, setInput] = useState("");
  const [search, setSearch] = useState([]);

  console.log(search);

  const searchedItems = search.map((oneSearchItem) => {
    console.log(oneSearchItem);
  });

  return (
    <div className="App">
      <Search input={input} setInput={setInput} />
      <SearchButton input={input} setSearch={setSearch} />
      {search.map((oneSearchItem) => (
        <ul>{oneSearchItem}</ul>
      ))}
    </div>
  );
}

export function Search({ input, setInput }) {
  function handleChange(event) {
    setInput(event.target.value);
  }

  return (
    <>
      <input onChange={handleChange} value={input} />
    </>
  );
}

export function SearchButton({ input, setSearch }) {
  function handleClick() {
    mockSearch(input);
    setSearch(mockSearch);
  }

  return <button onClick={handleClick}> Search </button>;
}
