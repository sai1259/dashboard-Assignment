import logo from "../../assets/assingment-logo.png"
import profilePic from '../../assets/profile.png'
import { IoIosArrowDown } from "react-icons/io";
import { CiSearch } from "react-icons/ci";
import { IoIosNotificationsOutline } from "react-icons/io";
import './index.css'

const Navbar = () => (
    <div className="navbar-section">
        <div className="logo-container">
            <img src={logo} alt="logo" />
        </div>

        <div className="search-section">
            <div className="search-container">
                <div className="patients-section">
                    <span>Patients <IoIosArrowDown /></span>
                    <input type="search" placeholder="Search" />
                </div>
                <CiSearch className="search-icon" />
            </div>
            <button>+ Add New</button>
        </div>

        <div className="profile-container">
            <IoIosNotificationsOutline className="notification-icon" />
            <img src={profilePic} alt="profile" className="profile-pic" />
        </div>
    </div>
)

export default Navbar