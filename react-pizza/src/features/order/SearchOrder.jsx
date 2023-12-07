import { useState } from "react";
import { useNavigate } from "react-router-dom";

function SearchOrder() {
  const [query, setQuery] = useState("");
  const navigate = useNavigate();

  function handleSubmit(e) {
    e.preventDefault();
    if (!query) return;
    navigate(`/order/${query}`);
    setQuery("");
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        placeholder="Search order #"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        className="focus:ring-opcacity-50 rounded-full bg-yellow-100 px-4 py-2 transition-all placeholder:text-stone-400 focus:outline-none focus:ring sm:w-64 sm:focus:w-72 "
      ></input>
    </form>
  );
}

export default SearchOrder;
