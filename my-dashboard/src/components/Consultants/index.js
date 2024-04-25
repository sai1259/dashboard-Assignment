import { HiArrowUturnRight } from "react-icons/hi2";
import { IoArrowDown } from "react-icons/io5";
import "./index.css"

const Consultants = () => (
    <div className="consultansts-section">
        <div className="heading-container">
            <p>Consultants</p>
            <div>
                <HiArrowUturnRight className="arrow-icons" />
                <IoArrowDown className="arrow-icons" />
            </div>
        </div>

        <table>
            <tr>
                <th>NAME</th>
                <th>PATIENT COUNT</th>
                <th>LABS</th>
                <th>DIET PLAN</th>
            </tr>
            <tr>
                <td>Jeevan Kumar</td>
                <td>10</td>
                <td>8</td>
                <td>6</td>
            </tr>
            <tr>
                <td>Sai</td>
                <td>9</td>
                <td>3</td>
                <td>14</td>
            </tr>
            <tr>
                <td>Gopi Chand</td>
                <td>6</td>
                <td>11</td>
                <td>8</td>
            </tr>
            <tr>
                <td>Bunny</td>
                <td>14</td>
                <td>8</td>
                <td>5</td>
            </tr>
            <tr>
                <td>Srikanth Reddy</td>
                <td>32</td>
                <td>6</td>
                <td>14</td>
            </tr>
            <tr>
                <td>Mahesh</td>
                <td>10</td>
                <td>15</td>
                <td>9</td>
            </tr>
            <tr>
                <td>Rama</td>
                <td>9</td>
                <td>2</td>
                <td>33</td>
            </tr>
            <tr>
                <td>Meghana</td>
                <td>4</td>
                <td>66</td>
                <td>8</td>
            </tr>
            <tr>
                <td>Fayaz</td>
                <td>18</td>
                <td>11</td>
                <td>2</td>
            </tr>
            <tr>
                <td>Mosha</td>
                <td>8</td>
                <td>16</td>
                <td>22</td>
            </tr>
            <tr>
                <td>Vamshi</td>
                <td>19</td>
                <td>5</td>
                <td>32</td>
            </tr>
            <tr>
                <td>Priya</td>
                <td>13</td>
                <td>44</td>
                <td>3</td>
            </tr>

            <tr>
                <td>Nandhu</td>
                <td>15</td>
                <td>3</td>
                <td>77</td>
            </tr><tr>
                <td>Gopal</td>
                <td>18</td>
                <td>3</td>
                <td>22</td>
            </tr>

            <tr>
                <td>Krishna</td>
                <td>25</td>
                <td>46</td>
                <td>0</td>
            </tr>
            <tr>
                <td>Prassana</td>
                <td>1</td>
                <td>18</td>
                <td>3</td>
            </tr>
        </table>
    </div>
)

export default Consultants