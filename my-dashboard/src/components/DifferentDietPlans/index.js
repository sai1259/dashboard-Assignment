import { FaUsers, FaMoneyBill } from "react-icons/fa";
import { FaChartBar, FaMoneyCheckDollar } from "react-icons/fa6";
import "./index.css"

const DifferentDietPlans = () => (
   <div className="different-diet-plans">
      <div className="diet-1">
        <div className="">
            <p className="heading">Consultants Count</p>
            <h2 className="score">90 / 900</h2>
            <p className="todady-period">Today/Period</p>
        </div>
        <FaUsers className="diet-icon-1"/>
      </div>

      <div className="diet-2">
      <div className="">
            <p className="heading">Consultantions</p>
            <h2 className="score">10 / 25</h2>
            <p className="todady-period">Today/Period</p>
        </div>
        <FaChartBar className="diet-icon-2" />
      </div>

      <div className="diet-3">
      <div className="">
            <p className="heading">Labs</p>
            <h2 className="score">25 / 560</h2>
            <p className="todady-period">Today/Period</p>
        </div>
        <FaMoneyBill className="diet-icon-3" />
      </div>

      <div className="diet-4">
        <div className="">
            <p className="heading">DietPlans</p>
            <h2 className="score">25 / 250</h2>
            <p className="todady-period">Today/Period</p>
        </div>
        <FaMoneyCheckDollar className="diet-icon-4" />
      </div>
   </div>
)

export default DifferentDietPlans