import { Component } from "react";
import { CiFilter } from "react-icons/ci";
import { HiOutlineUserCircle, HiOutlineNewspaper, HiOutlineEyeDropper} from "react-icons/hi2";
import { FaRegFileAlt } from "react-icons/fa";
import { LiaMoneyBillSolid } from "react-icons/lia";
import { BsShop, BsDatabase } from "react-icons/bs";
import './index.css'

class Sidebar extends Component {
    state = {
        patients: false, 
        hr: false, 
        labs: false, 
        pharma: false, 
        registration: false, 
        consultation: false, 
        testReports: false, 
        billing: false
    }

    onClickPatients = () => {
        this.setState({
            patients: true,
            hr: false, 
            labs: false, 
            pharma: false, 
            registration: false, 
            consultation: false, 
            testReports: false, 
            billing: false
        })
    }

    onClickHR = () => {
        this.setState({
            patients: false,
            hr: true, 
            labs: false, 
            pharma: false, 
            registration: false, 
            consultation: false, 
            testReports: false, 
            billing: false
        })
    }

    onClickLabs = () => {
        this.setState({
            patients: false,
            hr: false, 
            labs: true, 
            pharma: false, 
            registration: false, 
            consultation: false, 
            testReports: false, 
            billing: false
        })
    }

    onClickPharma = () => {
        this.setState({
            patients: false,
            hr: false, 
            labs: false, 
            pharma: true, 
            registration: false, 
            consultation: false, 
            testReports: false, 
            billing: false
        })
    }

    onClickRegistration = () => {
        this.setState({
            patients: false,
            hr: false, 
            labs: false, 
            pharma: false, 
            registration: true, 
            consultation: false, 
            testReports: false, 
            billing: false
        })
    }

    onClickConsultation = () => {
        this.setState({
            patients: false,
            hr: false, 
            labs: false, 
            pharma: false, 
            registration: false, 
            consultation: true, 
            testReports: false, 
            billing: false
        })
    }

    onClickTestReports = () => {
        this.setState({
            patients: false,
            hr: false, 
            labs: false, 
            pharma: false, 
            registration: false, 
            consultation: false, 
            testReports: true, 
            billing: false
        })
    }

    onClickBilling = () => {
        this.setState({
            patients: false,
            hr: false, 
            labs: false, 
            pharma: false, 
            registration: false, 
            consultation: false, 
            testReports: false, 
            billing: true
        })
    }

    render() {
        const {patients, hr, labs, pharma, registration, consultation, testReports, billing} = this.state
        const patientsDashBoard = patients ? "toggle-dashboard-property-top":"dashboard-property"
        const patientsDashBoardPara = patients ? "toggle-dashboard-property-p":"dashboard-property-p"
        const patientsDashBoardIcons = patients ? "toggle-dashboard-icons":"dashboard-icons"

        const hrDashBoard = hr ? "toggle-dashboard-property-middle":"dashboard-property"
        const hrDashBoardPara = hr ? "toggle-dashboard-property-p":"dashboard-property-p"
        const hrDashBoardIcons = hr ? "toggle-dashboard-icons":"dashboard-icons"

        const labsDashBoard = labs ? "toggle-dashboard-property-middle":"dashboard-property"
        const labsDashBoardPara = labs ? "toggle-dashboard-property-p":"dashboard-property-p"
        const labsDashBoardIcons = labs ? "toggle-dashboard-icons":"dashboard-icons"

        const pharmaDashBoard = pharma ? "toggle-dashboard-property-bottom":"dashboard-property"
        const pharmaDashBoardPara = pharma ? "toggle-dashboard-property-p":"dashboard-property-p"
        const pharmaDashBoardIcons = pharma ? "toggle-dashboard-icons":"dashboard-icons"

        const registrationDashBoard = registration ? "toggle-dashboard-property-top":"dashboard-property"
        const registrationDashBoardPara = registration ? "toggle-dashboard-property-p":"dashboard-property-p"
        const registrationDashBoardIcons = registration ? "toggle-dashboard-icons":"dashboard-icons"

        const consultationDashBoard = consultation ? "toggle-dashboard-property-middle":"dashboard-property"
        const consultationDashBoardPara = consultation ? "toggle-dashboard-property-p":"dashboard-property-p"
        const consultationDashBoardIcons = consultation ? "toggle-dashboard-icons":"dashboard-icons"

        const testReportsDashBoard = testReports ? "toggle-dashboard-property-middle":"dashboard-property"
        const testReportsDashBoardPara = testReports ? "toggle-dashboard-property-p":"dashboard-property-p"
        const testReportsDashBoardIcons = testReports ? "toggle-dashboard-icons":"dashboard-icons"

        const billingDashBoard = billing ? "toggle-dashboard-property-bottom":"dashboard-property"
        const billingDashBoardPara = billing ? "toggle-dashboard-property-p":"dashboard-property-p"
        const billingDashBoardIcons = billing ? "toggle-dashboard-icons":"dashboard-icons"

        return (
            <div className='sidebar-section'>
                <p className='sidebar-section-p'>Dashboards</p>
                <div className="dashboards-container">

                    <div className={patientsDashBoard} onClick={this.onClickPatients}>
                        <HiOutlineUserCircle className={patientsDashBoardIcons} />
                        <p className={patientsDashBoardPara}>Petiants</p>
                    </div>

                    <hr />

                    <div className={hrDashBoard} onClick={this.onClickHR}>
                        <BsDatabase className={hrDashBoardIcons} />
                        <p className={hrDashBoardPara}>HR</p>
                    </div>

                    <hr />

                    <div className={labsDashBoard} onClick={this.onClickLabs}>
                        <CiFilter className={labsDashBoardIcons} />
                        <p className={labsDashBoardPara}>Labs</p>
                    </div>

                    <hr />

                    <div className={pharmaDashBoard} onClick={this.onClickPharma}>
                        <BsShop className={pharmaDashBoardIcons} />
                        <p className={pharmaDashBoardPara}>Pharma</p>
                    </div>
                </div>
            
                <p className='sidebar-section-p'>Processes</p>
                <div className="dashboards-container">

                    <div className={registrationDashBoard} onClick={this.onClickRegistration}>
                        <HiOutlineNewspaper className={registrationDashBoardIcons} />
                        <p className={registrationDashBoardPara}>Registration</p>
                    </div>

                    <hr />

                    <div className={consultationDashBoard} onClick={this.onClickConsultation}>
                        <FaRegFileAlt className={consultationDashBoardIcons} />
                        <p className={consultationDashBoardPara}>Consultation</p>
                    </div>

                    <hr />

                    <div className={testReportsDashBoard} onClick={this.onClickTestReports}>
                        <HiOutlineEyeDropper className={testReportsDashBoardIcons} />
                        <p className={testReportsDashBoardPara}>Tests & Reports</p>
                    </div>

                    <hr />

                    <div className={billingDashBoard} onClick={this.onClickBilling}>
                        <LiaMoneyBillSolid className={billingDashBoardIcons} />
                        <p className={billingDashBoardPara}>Billing</p>
                    </div>

                </div>
            </div>
        )
    }
}

export default Sidebar