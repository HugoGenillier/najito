import { useParams } from "react-router-dom";
import CocktailService from "../services/CocktailService";
import { CircularProgress, Typography } from "@mui/material";
import { PageBar } from "../components/Skeleton";
import { useEffect, useState } from "react";

export default function CocktailPage() {
  const { id } = useParams();
  const [loading, setLoading] = useState(true);
  const [cocktail, setCocktail] = useState();

  const searchCocktail = async (cocktailId) => {
    const cocktail = await CocktailService.findCocktailById(cocktailId);
    setCocktail(cocktail);
    setLoading(false);
  };

  useEffect(() => {
    searchCocktail(id);
  }, []);

  if (loading) return <CircularProgress />;

  return (
    <>
      <PageBar name={cocktail.name} />
      <img width="100%" src={cocktail.image} />
      <h4>Instructions</h4>
      <Typography>{cocktail.instructions}</Typography>
    </>
  );
}
