const WantToCook = ({toCook}) => {
//   console.log(toCook);
  const {recipe_name, preparing_time, calories} = toCook
  return (
    <>
      <tr className="bg-[#28282808] ">
        <th>1</th>
        <td>{recipe_name}</td>
        <td>{preparing_time}</td>
        <td>{calories}</td>
        <td>
          <button className="btn">Preparing</button>
        </td>
      </tr>
    </>
  );
};

export default WantToCook;
