import { useState, useEffect } from "react";
import CocktailService from "../services/CocktailService";
import { CocktailList } from "../components/Cocktail";
import { PageBar, SearchBar } from "../components/Skeleton";
import { useSearchParams } from "react-router-dom";

export default function IngredientSearchPage() {
  const [loading, setLoading] = useState(false);
  const [cocktails, setCocktails] = useState([]);

  const [searchParams, setSearchParams] = useSearchParams();
  const search = searchParams.get("search") || "";

  const updateSearch = (event) => {
    const name = event.target.value;
    setSearchParams({ search: name });
  };

  const searchCocktails = async (search) => {
    setLoading(true);
    const cocktails = await CocktailService.searchCocktailsByIngredientName(
      search
    );
    setCocktails(cocktails);
    setLoading(false);
  };

  useEffect(() => {
    searchCocktails(search);
  }, [search]);

  return (
    <>
      <PageBar name="Ingredients" />
      <SearchBar
        search={search}
        updateSearch={updateSearch}
        loading={loading}
      />
      <CocktailList cocktails={cocktails} />
    </>
  );
}
