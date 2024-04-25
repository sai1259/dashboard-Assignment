import Navbar from '../Navbar'
import Sidebar from '../Sidebar'
import DifferentDietPlans from '../DifferentDietPlans';
import Consultants from '../Consultants';
import { PiUsersThreeLight } from "react-icons/pi";
import './index.css'

const Home = () => (
    <div>
        <Navbar />
        <div className="sidebar">
            <Sidebar />
            <div className='home-section'>
                <div className='consultants'>
                    <div className='line'>
                        <PiUsersThreeLight className='consultants-users-icon' />
                        <p>Consultants</p>
                    </div>
                </div>
                
                <div className='filters-section'>
                    <div className='filter-div'>Filters
                        <div className='shap'></div>
                    </div>

                    <div className='select-range-options'>
                        <select>
                            <option value="">Select Range</option>
                            <option value="">0 - 50</option>
                            <option value="">51 - 100</option>
                            <option value="">101 - 150</option>
                            <option value="">151 - 200</option>
                        </select>
                    </div>

                    <div className='summary-radio-button'>
                        <input type="radio" />
                        <label htmlFor='radio'>Summary</label>
                    </div>

                    <div className='summary-radio-button'>
                        <input type="radio" />
                        <label htmlFor='radio'>Branch Wise</label>
                    </div>
                </div>

                <DifferentDietPlans />
                <Consultants />
            </div>
        </div>
    </div>
)

export default Home