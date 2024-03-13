import {
  Avatar,
  List,
  ListItem,
  ListItemAvatar,
  ListItemButton,
  ListItemText,
} from "@mui/material";
import { Link } from "react-router-dom";

export function CocktailList({ cocktails }) {
  if (!(cocktails.length > 0)) return <p>Nothing to drink yet!</p>;

  return (
    <List>
      {cocktails.map((cocktail) => (
        <CocktailItem key={cocktail.id} cocktail={cocktail} />
      ))}
    </List>
  );
}

function CocktailItem({ cocktail }) {
  return (
    <ListItem disablePadding>
      <ListItemButton component={Link} to={"/cocktail/" + cocktail.id}>
        <ListItemAvatar>
          <Avatar alt={cocktail.name} src={cocktail.thumbnail} />
        </ListItemAvatar>
        <ListItemText primary={cocktail.name} />
      </ListItemButton>
    </ListItem>
  );
}
