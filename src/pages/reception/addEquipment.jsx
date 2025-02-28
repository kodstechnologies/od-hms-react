import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Sidebar from "../../components/Sidebar";
import Header from "../../components/Header";
import FeatherIcon from 'feather-icons-react';
import { DatePicker, Select } from 'antd';
import { favicon } from '../../components/imagepath';

const addEquipment = () => {
    const [show, setShow] = useState(false);
    const [selectedOption, setSelectedOption] = useState(null);
    const [status, setStatus] = useState([
        { value: 1, label: "Select statue" },
        { value: 2, label: "Approved" },
        { value: 3, label: "Rejected" },
        { value: 4, label: "Pending" },
    ]);
    const onChange = (date, dateString) => {
        // console.log(date, dateString);
    };
    const loadFile = (event) => {
        // console.log(event,"event");

    };
    return (
        <div>
            <Header />
            <Sidebar
                id="reception-dropmenu"
                id1="reception-items"
                activeClassName="equipment"
            />
            <div className="page-wrapper">
                <div className="content">
                    <div className="page-header">
                        <div className="row">
                            <div className="col-sm-12">
                                <ul className="breadcrumb">
                                    <li className="breadcrumb-item">
                                        <Link to="#">Equipments</Link>
                                    </li>
                                    <li className="breadcrumb-item">
                                        <i className="feather-chevron-right">
                                            <FeatherIcon icon="chevron-right" />
                                        </i>
                                    </li>
                                    <li className="breadcrumb-item active">Add Equipments</li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-sm-12">
                            <div className="card">
                                {/* Add Equipments */}
                                <div className="card-body">
                                    <form>
                                        <div className="row">
                                            <div className="col-12">
                                                <div className="form-heading">
                                                    <h4>Add Equipments</h4>
                                                </div>
                                            </div>
                                            <div className="col-12 col-md-6 col-xl-6">
                                                <div className="form-group local-forms">
                                                    <label>
                                                        Equipments Name <span className="login-danger">*</span>
                                                    </label>
                                                    <input className="form-control" type="text" />
                                                </div>
                                            </div>
                                            <div className="col-12 col-md-6 col-xl-6">
                                                <div className="form-group local-forms">
                                                    <label>
                                                        Equipments Id <span className="login-danger">*</span>
                                                    </label>
                                                    <input className="form-control" type="text" />
                                                </div>
                                            </div>

                                            <div className="col-12 col-sm-12">
                                                <div className="form-group local-forms">
                                                    <label>
                                                        Status <span className="login-danger">*</span>
                                                    </label>
                                                    <select className="form-control select">
                                                        <option>Working</option>
                                                        <option>
                                                            Partially down</option>
                                                        <option>
                                                            Totally down</option>
                                                        <option>
                                                            Under Maintenence</option>
                                                    </select>
                                                </div>
                                            </div>

                                            <div className="col-12 col-md-6 col-xl-6">
                                                <div className="form-group local-top-form">
                                                    <label className="local-top">
                                                        Product Image <span className="login-danger">*</span>
                                                    </label>
                                                    <div className="settings-btn upload-files-avator">
                                                        <input
                                                            type="file"
                                                            accept="image/*"
                                                            name="image"
                                                            id="file"
                                                            onChange={loadFile}
                                                            className="hide-input"
                                                        />
                                                        <label htmlFor="file" className="upload">
                                                            Choose File
                                                        </label>
                                                    </div>
                                                    {/* <div className="settings-btn upload-files-avator">
                              <input
                                type="file"
                                accept="image/*"
                                name="image"
                                id="file"
                                onchange="loadFile(event)"
                                className="hide-input"
                              />
                              <label htmlFor="file" className="upload">
                                Choose File
                              </label>
                            </div> */}

                                                </div>
                                            </div>
                                            <div className="col-12">
                                                <div className="doctor-submit text-end">
                                                    <button
                                                        type="submit"
                                                        className="btn btn-primary submit-form me-2"
                                                    >
                                                        Submit
                                                    </button>
                                                    <button
                                                        type="submit"
                                                        className="btn btn-primary cancel-form"
                                                    >
                                                        Cancel
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    </form>
                                </div>

                            </div>
                            {/*Supplier Details */}
                            <div className="card">
                                <div className="card-body">
                                    <form>
                                        <div className="row">
                                            <div className="col-12">
                                                <div className="form-heading">
                                                    <h4>Supplier Details</h4>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-12 col-sm-12">
                                        <div className="form-group local-forms">
                                                    <label>
                                                    Supplier Name <span className="login-danger">*</span>
                                                    </label>
                                                    <input className="form-control" type="text" />
                                                </div>
                                            </div>
                                            <div className="col-12 col-md-6 col-xl-6">
                                                <div className="form-group local-forms">
                                                    <label>
                                                        Equipments Name <span className="login-danger">*</span>
                                                    </label>
                                                    <input className="form-control" type="text" />
                                                </div>
                                            </div>
                                            <div className="col-12 col-md-6 col-xl-6">
                                                <div className="form-group local-forms">
                                                    <label>
                                                        Equipments Id <span className="login-danger">*</span>
                                                    </label>
                                                    <input className="form-control" type="text" />
                                                </div>
                                            </div>
                                    </form>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default addEquipment