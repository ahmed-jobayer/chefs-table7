import PropTypes from "prop-types";
import { FaRegClock } from "react-icons/fa";
import { AiOutlineFire } from "react-icons/ai";

const Recipe = ({ recipe, handleWantToCook }) => {
  // console.log(recipe)
  const {
    recipe_name,
    image,
    short_description,
    preparing_time,
    calories,
    ingredients,
  } = recipe;

  return (
    <div>
      <div className="  bg-base-100 shadow-xl p-6 border-[1px] border-solid border-[#28282833] rounded-2xl ">
        <img className="max-w-full rounded-3xl" src={image} alt={recipe_name} />

        <div className="">
          <h2 className="text-[#282828] text-xl font-semibold">{recipe_name}</h2>
          <p className="text-[#0F0B2B99]">{short_description}</p>
          <h3 className="text-[#282828] text-[18px] font-medium">Ingredients: 6</h3>
          <ul className="text-[#0F0B2B99] leading-7">
            <li>{ingredients[0]}</li>
            <li>{ingredients[1]}</li>
            <li>{ingredients[2]}</li>
            <li>{ingredients[3]}</li>
            <li>{ingredients[4]}</li>
            <li>{ingredients[5]}</li>
          </ul>
          <div className="flex gap-6">
            <p><FaRegClock /> {preparing_time}</p>
            <p><AiOutlineFire /> {calories} calories</p>
          </div>
          <div className="">
            <button
              onClick={() => handleWantToCook(recipe)}
              className="btn bg-[#0BE58A] rounded-[50px] text-black border-none"
            >
              Want to Cook
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

Recipe.propTypes = {
  recipe: PropTypes.object.isRequired,
};

export default Recipe;
