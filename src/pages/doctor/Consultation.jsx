import React from 'react'
import Header from '../../components/Header'
import Sidebar from '../../components/Sidebar'
import { Link } from 'react-router-dom'

const Consultation = () => {
    return (
        <>
            <Header />
            <Sidebar
                id="doctor-dropmenu"
                id1="doctor-items"
                activeClassName="consultation"
            />
            <>
                <div className="page-wrapper">
                    <div className="content">
                        {/* Page Header */}
                        <div className="page-header">
                            <div className="row">
                                <div className="col-sm-12">
                                    <ul className="breadcrumb">
                                        <li className="breadcrumb-item"><Link to="/doctor/consultation">Doctor </Link></li>
                                        <li className="breadcrumb-item"><i className="fa fa-angle-right" /></li>
                                        <li className="breadcrumb-item active">Consultation</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                
            </>
        </>
    )
}

export default Consultation
