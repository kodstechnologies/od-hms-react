import React, { useState } from 'react'
import Header from '../../components/Header'
import Sidebar from '../../components/Sidebar'
import { Link } from 'react-router-dom'

import { medicines, symptoms } from '../../assets/json/Patient.js'
import { Avatar1, Avatar2, Avatar3, Avatar4, Avatar5, ProfileUser, call, call01, call02, call03, callicon1, callicon2, callicon3, chaticon1, chaticon2, chaticon3, incomingcall, plusicon, searchnormal, videoicon1, videoicon2, videoicon3 } from '../../components/imagepath'
import FeatherIcon from 'feather-icons-react/build/FeatherIcon'

const Consultation = () => {
    const [medicine, setMedicine] = useState([]);
    const [rows, setRows] = useState([]);

    const addRow = () => {
        const newRow = {
            id: rows.length + 1,
        };

        setRows([...rows, newRow]);
    };

    const removeRow = (id) => {
        const updatedRows = rows.filter((row) => row.id !== id);
        setRows(updatedRows);
    };

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
                        {/* /Page Header */}
                        <div className="row">
                            <div className="col-xl-4 d-flex">
                                <div className="card chat-box">
                                    <div className="chat-widgets">
                                        <div className="call-all comman-space-flex mb-2">
                                            <h4>Symptoms</h4>
                                        </div>
                                        <div className="chat-user-group video-call-blk d-flex align-items-center">
                                            <ul className="msg-sub-list" style={{ padding: 0 }}>
                                                {
                                                    symptoms.map((symptom) => {
                                                        return <li>{symptom}</li>
                                                    })
                                                }
                                            </ul>
                                        </div>
                                        <div className="chat-users">
                                            <div className="call-all comman-space-flex mb-3">
                                                <h4>Basic Information</h4>
                                            </div>
                                            <div className="row">
                                                <div className="col-4">
                                                    <p className='mb-2'>Name </p>
                                                </div>
                                                <div className="col-2">
                                                    <p className='mb-2'> :</p>
                                                </div>
                                                <div className="col-6">
                                                    <p className='mb-2'>Farhan</p>
                                                </div>
                                                <div className="col-4">
                                                    <p className='mb-2'>Age </p>
                                                </div>
                                                <div className="col-2">
                                                    <p className='mb-2'> :</p>
                                                </div>
                                                <div className="col-6">
                                                    <p className='mb-2'>66</p>
                                                </div>
                                                <div className="col-4">
                                                    <p className='mb-2'>Sex </p>
                                                </div>
                                                <div className="col-2">
                                                    <p className='mb-2'> :</p>
                                                </div>
                                                <div className="col-6">
                                                    <p className='mb-2'>Male</p>
                                                </div>
                                                <div className="col-4">
                                                    <p className='mb-2'>Location </p>
                                                </div>
                                                <div className="col-2">
                                                    <p className='mb-2'> :</p>
                                                </div>
                                                <div className="col-6">
                                                    <p className='mb-2'>Bengaluru</p>
                                                </div>
                                                <div className="col-4">
                                                    <p className='mb-2'>Height </p>
                                                </div>
                                                <div className="col-2">
                                                    <p className='mb-2'> :</p>
                                                </div>
                                                <div className="col-6">
                                                    <p className='mb-2'>55</p>
                                                </div>
                                                <div className="col-4">
                                                    <p className='mb-2'>Weight </p>
                                                </div>
                                                <div className="col-2">
                                                    <p className='mb-2'> :</p>
                                                </div>
                                                <div className="col-6">
                                                    <p className='mb-0'>65kg</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-8">
                                <div className="card chat-box ">
                                    {/* Join Call */}
                                    <div className="page-content">
                                        <div className="meeting">
                                            <div className="meeting-wrapper">
                                                <div className="meeting-list">
                                                    {/* Horizontal View */}
                                                    <div className="join-contents horizontal-view fade-whiteboard">
                                                        <div className="join-video user-active">
                                                            <img src={call} className="img-fluid call-imgs" alt="Logo" />
                                                            <div className="video-avatar">
                                                                <div className="text-avatar">
                                                                    <div className="text-box">
                                                                        S
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="part-name">
                                                                <h4><img src={videoicon3} className="me-2" alt="img" />Laura Strattenberg</h4>
                                                            </div>
                                                            <div className="more-icon">
                                                                <Link to="#" className="handraise-on me-2">
                                                                    <i className="fas fa-thumbtack" />
                                                                </Link>
                                                                <Link to="#" className="mic-off">
                                                                    <i className="feather-mic-off" >
                                                                        <FeatherIcon icon="mic-off" />
                                                                    </i>

                                                                </Link>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    {/* /Horizontal View */}
                                                </div>
                                                {/* Meet Footer */}
                                                <div className="meet-footer">
                                                    <div className="meet-icons">
                                                        <div className="met-icons">
                                                            <ul className="meet-items">
                                                                <li className="meet-item">
                                                                    <Link to="#" className="mute-bt">
                                                                        <img src={callicon3} alt="img" />
                                                                    </Link>
                                                                </li>
                                                                <li className="meet-item">
                                                                    <Link to="#" className="mute-video">
                                                                        <i className="feather-video">
                                                                            <FeatherIcon icon="video" />
                                                                        </i>
                                                                    </Link>
                                                                </li>
                                                            </ul>
                                                        </div>
                                                        <div className="end-call-chat">
                                                            <Link to="#" className="btn btn-primary">End Call</Link>
                                                        </div>
                                                        <div className="end-calls">
                                                            <ul className="meet-items">
                                                                <li className="meet-item">
                                                                    <Link to="#" className="hand-raise">
                                                                        <img src={callicon1} alt="img" />
                                                                    </Link>
                                                                </li>
                                                                <li className="meet-item">
                                                                    <Link to="#" className="showInviteList">
                                                                        <img src={callicon2} alt="img" />
                                                                    </Link>
                                                                </li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                </div>
                                                {/* /Meet Footer */}
                                            </div>
                                        </div>
                                    </div>
                                    {/* /Join Call */}
                                </div>
                            </div>
                            <div className="card chat-box ">
                                <div className=" chat-search-group">
                                    <div className="chat-user-group clinic-user mb-0 d-flex align-items-center w-100">
                                        <div className="call-all comman-space-flex mb-2 flex-column w-100" style={{ alignItems: 'unset' }}>
                                            <h4>Prescription</h4>   
                                            <div className="invoice-add-table">
                                                <h4>Item Details</h4>
                                                <div className="table-responsive">
                                                    <table className="table table-center add-table-items">
                                                        <thead>
                                                            <tr>
                                                                <th>Serial Number</th>
                                                                <th>Medicine Name</th>
                                                                <th>Quantity</th>
                                                                <th>Time</th>
                                                            </tr>
                                                        </thead>
                                                        <tbody>
                                                            <tr className="add-row">
                                                                <td>
                                                                    <input
                                                                        type="text"
                                                                        className="form-control"
                                                                    />
                                                                </td>
                                                                <td>
                                                                    <input
                                                                        type="text"
                                                                        className="form-control"
                                                                    />
                                                                </td>
                                                                <td>
                                                                    <input
                                                                        type="text"
                                                                        className="form-control"
                                                                    />
                                                                </td>
                                                                <td>
                                                                    <input
                                                                        type="text"
                                                                        className="form-control"
                                                                    />
                                                                </td>
                                                                <td className="add-remove text-end" style={{ display: "flex", gap: "2px", alignItems: "center" }}>
                                                                    <Link
                                                                        to="#"
                                                                        className="add-btn me-2"
                                                                        onClick={addRow}
                                                                    >
                                                                        <i className="fas fa-plus-circle" />
                                                                    </Link>
                                                                    <Link to="#" className="copy-btn me-2">
                                                                        <i className="fe fe-copy">
                                                                            <FeatherIcon icon="copy" />
                                                                        </i>
                                                                    </Link>
                                                                    <Link to="#" className="remove-btn">
                                                                        <i className="fe fe-trash-2">
                                                                            <FeatherIcon icon="trash-2" />
                                                                        </i>
                                                                    </Link>
                                                                </td>
                                                            </tr>
                                                            {rows.map((row) => (
                                                                <tr key={row.id}>
                                                                    <td>
                                                                        {
                                                                            <input
                                                                                type="text"
                                                                                className="form-control"
                                                                            />
                                                                        }
                                                                    </td>
                                                                    <td>
                                                                        {
                                                                            <input
                                                                                type="text"
                                                                                className="form-control"
                                                                            />
                                                                        }
                                                                    </td>
                                                                    <td>
                                                                        {
                                                                            <input
                                                                                type="text"
                                                                                className="form-control"
                                                                            />
                                                                        }
                                                                    </td>
                                                                    <td>
                                                                        {
                                                                            <input
                                                                                type="text"
                                                                                className="form-control"
                                                                            />
                                                                        }
                                                                    </td>
                                                                    <td>
                                                                        {
                                                                            <input
                                                                                type="text"
                                                                                className="form-control"
                                                                            />
                                                                        }
                                                                    </td>
                                                                    <td>
                                                                        {
                                                                            <input
                                                                                type="text"
                                                                                className="form-control"
                                                                            />
                                                                        }
                                                                    </td>
                                                                    <td className="add-remove text-end">
                                                                        <Link
                                                                            to="#"
                                                                            className="add-btn me-2"
                                                                            onClick={addRow}
                                                                        >
                                                                            <i className="fas fa-plus-circle" />
                                                                        </Link>
                                                                        <Link to="#" className="copy-btn me-2">
                                                                            <i className="fe fe-copy">
                                                                                <FeatherIcon icon="copy" />
                                                                            </i>
                                                                        </Link>
                                                                        <Link
                                                                            to="#"
                                                                            className="remove-btn"
                                                                            onClick={() => removeRow(row.id)}
                                                                        >
                                                                            <i className="fe fe-trash-2">
                                                                                <FeatherIcon icon="trash-2" />
                                                                            </i>
                                                                        </Link>
                                                                    </td>
                                                                </tr>
                                                            ))}
                                                        </tbody>
                                                    </table>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
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
