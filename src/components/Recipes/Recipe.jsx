import PropTypes from 'prop-types';

const Recipe = ({recipe}) => {
    // console.log(recipe)
    const {recipe_name, image, short_description, preparing_time, calories, ingredients} = recipe
    
  return (
    <div>
        
      <div className="  bg-base-100 shadow-xl p-6">
        <img
          className="max-w-full"
          src={image}
          alt={recipe_name}
        />

        <div className="">
          <h2 className="">{recipe_name}</h2>
          <p>{short_description}</p>
          <h3>Ingredients: 6 {}</h3>
          <ul>
            <li>{ingredients[0]}</li>
            <li>{ingredients[1]}</li>
            <li>{ingredients[2]}</li>
            <li>{ingredients[3]}</li>
            <li>{ingredients[4]}</li>
            <li>{ingredients[5]}</li>
          </ul>
          <div className="flex gap-6">
            <p>{preparing_time}</p>
            <p>{calories} calories</p>
          </div>
          <div className="">
            <button className="btn ">Want to Cook</button>
          </div>
        </div>
      </div>
    </div>
  );
};

Recipe.propTypes  = {
    recipe: PropTypes.object.isRequired
}

export default Recipe;
