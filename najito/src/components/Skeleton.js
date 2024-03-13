import { useState } from "react";
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import LocalBar from "@mui/icons-material/LocalBar";
import Menu from "@mui/icons-material/Menu";
import Paper from "@mui/material/Paper";
import { Link } from "react-router-dom";
import { Routes, Route } from "react-router-dom";
import CocktailSearchPage from "../pages/CocktailSearchPage";
import CocktailPage from "../pages/CocktailPage";
import IngredientSearchPage from "../pages/IngredientSearchPage";
import {
  AppBar,
  Box,
  Toolbar,
  Typography,
  Grid,
  TextField,
  CircularProgress,
} from "@mui/material";

export function AppNavigation() {
  const [value, setValue] = useState(0);
  return (
    <Paper
      sx={{ position: "fixed", bottom: 0, left: 0, right: 0 }}
      elevation={3}
    >
      <BottomNavigation
        showLabels
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
      >
        <BottomNavigationAction
          label="Cocktails"
          icon={<LocalBar />}
          component={Link}
          to="/"
        />
        <BottomNavigationAction
          label="Ingredients"
          icon={<Menu />}
          component={Link}
          to="/ingredients"
        />
      </BottomNavigation>
    </Paper>
  );
}

export function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<CocktailSearchPage />} />
      <Route path="/ingredients" element={<IngredientSearchPage />} />
      <Route path="/cocktail/:id" element={<CocktailPage />} />
    </Routes>
  );
}

export function PageBar({ name }) {
  return (
    <Box sx={{ flexGrow: 1, mb: 2 }}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            {name}
          </Typography>
        </Toolbar>
      </AppBar>
    </Box>
  );
}

export function SearchBar({ search, updateSearch, loading }) {
  return (
    <Grid container alignItems="center" spacing={2}>
      <Grid item xs={8}>
        <TextField
          id="margin-normal"
          label="Search"
          variant="outlined"
          value={search}
          onChange={updateSearch}
        />
      </Grid>
      <Grid item xs={4}>
        {loading ? <CircularProgress /> : null}
      </Grid>
    </Grid>
  );
}
