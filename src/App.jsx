import { useState } from "react";
import "./App.css";
import Header from "./components/Headers/Header";
import Hero from "./components/Hero-section/Hero";
import RecipeCardSection from "./components/Recipes/RecipeCardSection";
import SideBar from "./components/Side Bar/SideBar";
import RecipesHeading from "./components/Recipes/RecipesHeading";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  const [wantToCook, setWantToCook] = useState([]);

  const handleWantToCook = (recipe) => {
    const isAlreadyAdded = wantToCook.map((item) => item.recipe_id).includes(recipe.recipe_id);
    
    if (isAlreadyAdded) {
      toast("This recipe is already added to the cooking list.");
    } else {
      setWantToCook((prev) => [...prev, recipe]);
    }
  };

  return (
    <>
      <div className="container mx-auto">
        <Header />
        <Hero />
        <RecipesHeading />
        <div className="flex gap-6 mt-12">
          <RecipeCardSection handleWantToCook={handleWantToCook} />
          <SideBar wantToCook={wantToCook} />
        </div>
        <ToastContainer />
      </div>
    </>
  );
}

export default App;
