import CurrentlyCooking from "./CurrentlyCooking";
import WantToCook from "./WantToCook";

const SideBar = ({ wantToCook }) => {
  console.log(wantToCook)
  return (
    <div className="w-2/5 ">
      {/* Want to cook */}

      <div className="overflow-x-auto">
        <div className="text-center">
          <h1 className="text-[#282828] text-2xl font-semibold">Want to cook: {wantToCook.length}</h1>
        </div>
        <table className="table table-zebra border-collapse text-[#0F0B2B99]">
          {/* head */}
          <thead>
            <tr>
              <th></th>
              <th>Name</th>
              <th>Time</th>
              <th>Calories</th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            { wantToCook.map( toCook => <WantToCook key={toCook.recipe_id} toCook={toCook}></WantToCook>)
            }
          </tbody>
        </table>
      </div>

      {/* Currently cooking*/}

      <div className="overflow-x-auto">
        <div className="text-center">
          <h1 className="text-[#282828] text-2xl font-semibold">
            Currently cooking: <span> 01</span>{" "}
          </h1>
        </div>
        <table className="table table-zebra border-collapse text-[#0F0B2B99]">
          {/* head */}
          <thead>
            <tr>
              <th></th>
              <th>Name</th>
              <th>Time</th>
              <th>Calories</th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            <CurrentlyCooking></CurrentlyCooking>
            <tr className="bg-[#28282808] border-collapse ">
              <th></th>
              <td></td>
              <td>
                Total Time = <br /> <span>45</span> minutes
              </td>
              <td>
                Total Calories = <br /> <span>1050</span> calories
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default SideBar;
