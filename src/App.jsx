import "./App.css";
import Header from "./components/Headers/Header";
import Hero from "./components/Hero-section/Hero";
import RecipeCardSection from "./components/Recipes/RecipeCardSection";
import SideBar from "./components/Side Bar/SideBar";
import RecipesHeading from "./components/Recipes/RecipesHeading";

function App() {
  return (
    <>
      <div className="container mx-auto">
        <Header></Header>
        <Hero></Hero>
        <RecipesHeading></RecipesHeading>
        <div className="flex gap-6 mt-12">
          <RecipeCardSection></RecipeCardSection>
          <SideBar></SideBar>
        </div>
      </div>
    </>
  );
}

export default App;
