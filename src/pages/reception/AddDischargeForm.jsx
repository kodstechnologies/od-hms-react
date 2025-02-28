import React, { useState } from 'react'
import Sidebar from "../../components/Sidebar";
import Header from "../../components/Header";
import { data, Link } from 'react-router-dom';
import FeatherIcon from 'feather-icons-react/build/FeatherIcon';
import { DatePicker } from 'antd';
import Select from "react-select";
import { TextField } from '@mui/material';


const AddDischargeForm = () => {
    const [isClicked, setIsClicked] = useState(false);
    const [startTime, setStartTime] = useState();

    const [selectedOption, setSelectedOption] = useState(null);
    const [options, setOptions] = useState([
        { value: 1, label: "Select City" },
        { value: 2, label: "Alaska" },
        { value: 3, label: "California" },
    ]);
    const [option, setOption] = useState([
        { value: 1, label: "Select Country" },
        { value: 2, label: "Usa" },
        { value: 3, label: "Uk" },
        { value: 4, label: "Italy" },
    ]);
    const [statevalue, setStateValue] = useState([
        { value: 1, label: "Select City" },
        { value: 2, label: "Alaska" },
        { value: 3, label: "California" },
    ]);
    const [department, setDepartment] = useState([
        { value: 1, label: "Orthopedics" },
        { value: 2, label: "Radiology" },
        { value: 3, label: "Dentist" },
    ]);
    const onChange = (date, dateString) => {
        // console.log(date, dateString);
        setIsClicked(true);
    };
    const loadFile = (event) => {
        // Handle file loading logic here
    };
    return (

        <>
            <Header />
            <Sidebar
                id="reception-dropmenu"
                id1="reception-items"
                activeClassName="discharge"
            />
            <div className="page-wrapper">
                <div className="content">
                    {/* Page Header */}
                    <div className="page-header">
                        <div className="row">
                            <div className="col-sm-12">
                                <ul className="breadcrumb">
                                    <li className="breadcrumb-item">
                                        <Link to="/reception/discharge">Discharge summary </Link>
                                    </li>
                                    <li className="breadcrumb-item">
                                        <i className="feather-chevron-right">
                                            <FeatherIcon icon="chevron-right" />
                                        </i>
                                    </li>
                                    <li className="breadcrumb-item active">Discharge Form</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    {/* form */}
                    <div className="row">
                        <div className="col-sm-12">
                            <div className="card">
                                <div className="card-body">
                                    <form>
                                        <div className="row">
                                            <div className="col-12">
                                                <div className="form-heading">
                                                    <h4>Discharge Details</h4>
                                                </div>
                                            </div>
                                            <div className="col-12 col-md-6 col-xl-4">
                                                <div className="form-group local-forms">
                                                    <label>
                                                        First Name <span className="login-danger">*</span>
                                                    </label>
                                                    <input
                                                        className="form-control"
                                                        type="text"
                                                        placeholder=""
                                                    />
                                                </div>
                                            </div>
                                            <div className="col-12 col-md-6 col-xl-4">
                                                <div className="form-group local-forms">
                                                    <label>
                                                        Last Name <span className="login-danger">*</span>
                                                    </label>
                                                    <input
                                                        className="form-control"
                                                        type="text"
                                                        placeholder=""
                                                    />
                                                </div>
                                            </div>
                                            <div className="col-12 col-md-6 col-xl-4">
                                                <div className="form-group local-forms">
                                                    <label>
                                                        User Name <span className="login-danger">*</span>
                                                    </label>
                                                    <input
                                                        className="form-control"
                                                        type="text"
                                                        placeholder=""
                                                    />
                                                </div>
                                            </div>
                                            <div className="col-12 col-md-6 col-xl-6">
                                                <div className="form-group local-forms cal-icon">
                                                    <label>
                                                        Date Of Admission{" "}
                                                        <span className="login-danger">*</span>
                                                    </label>
                                                    {/* <input
                                                    className="form-control datetimepicker"
                                                    type="text"
                                                    placeholder=""
                                                  /> */}
                                                    <DatePicker
                                                        className="form-control datetimepicker"
                                                        onChange={onChange}
                                                        suffixIcon={null}
                                                    />
                                                </div>
                                            </div>
                                            {/* <div className="col-12 col-md-6 col-xl-6">
                        <div className="form-group local-forms">
                          <label>
                            Mobile <span className="login-danger">*</span>
                          </label>
                          <input
                            className="form-control"
                            type="text"
                            placeholder=""
                          />
                        </div>
                      </div> */}
                                            <div className="col-12 col-md-6 col-xl-4">
                                                <div className="form-group local-forms">
                                                    <label>
                                                        Time of Admission <span className="login-danger">*</span>
                                                    </label>
                                                    <div className="">
                                                        <TextField
                                                            className="form-control"
                                                            id="outlined-controlled"
                                                            type="time"
                                                            value={startTime}
                                                            onChange={(event) => {
                                                                setStartTime(event.target.value);
                                                            }}
                                                        />
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-12 col-md-6 col-xl-6">
                                                <div className="form-group select-gender">
                                                    <label className="gen-label">
                                                        Admission Type<span className="login-danger">*</span>
                                                    </label>
                                                    <div className="form-check-inline">
                                                        <label className="form-check-label">
                                                            <input
                                                                type="radio"
                                                                name="gender"
                                                                className="form-check-input"
                                                            />
                                                            Planned
                                                        </label>
                                                    </div>
                                                    <div className="form-check-inline">
                                                        <label className="form-check-label">
                                                            <input
                                                                type="radio"
                                                                name="gender"
                                                                className="form-check-input"
                                                            />
                                                            Emergency
                                                        </label>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-12 col-md-6 col-xl-6">
                                                <div className="form-group select-gender">
                                                    <label className="gen-label">
                                                        Treatment Type<span className="login-danger">*</span>
                                                    </label>
                                                    <div className="form-check-inline">
                                                        <label className="form-check-label">
                                                            <input
                                                                type="radio"
                                                                name="gender"
                                                                className="form-check-input"
                                                            />
                                                            Medical
                                                        </label>
                                                    </div>
                                                    <div className="form-check-inline">
                                                        <label className="form-check-label">
                                                            <input
                                                                type="radio"
                                                                name="gender"
                                                                className="form-check-input"
                                                            />
                                                            Surgical
                                                        </label>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-12 col-md-6 col-xl-4">
                                                <div className="form-group local-forms">
                                                    <label>
                                                        Admintting Doctor <span className="login-danger">*</span>
                                                    </label>
                                                    <input
                                                        className="form-control"
                                                        type="text"
                                                        placeholder=""
                                                    />
                                                </div>
                                            </div>
                                            <div className="col-12 col-md-6 col-xl-4">
                                                <div className="form-group local-forms">
                                                    <label>
                                                        Secondary Consultant{" "}
                                                        <span className="login-danger">*</span>
                                                    </label>
                                                    <input
                                                        className="form-control"
                                                        type="text"
                                                        placeholder=""
                                                    />
                                                </div>
                                            </div>
                                            <div className="col-12 col-md-6 col-xl-4">
                                                <div className="form-group local-forms">
                                                    <label>

                                                        Department <span className="login-danger">*</span>
                                                    </label>
                                                    <Select
                                                        defaultValue={selectedOption}
                                                        onChange={setSelectedOption}
                                                        options={department}
                                                        id="search-commodity"
                                                        components={{
                                                            IndicatorSeparator: () => null
                                                        }}
                                                        styles={{
                                                            control: (baseStyles, state) => ({
                                                                ...baseStyles,
                                                                borderColor: state.isFocused ? 'none' : '2px solid rgba(46, 55, 164, 0.1);',
                                                                boxShadow: state.isFocused ? '0 0 0 1px #2e37a4' : 'none',
                                                                '&:hover': {
                                                                    borderColor: state.isFocused ? 'none' : '2px solid rgba(46, 55, 164, 0.1)',
                                                                },
                                                                borderRadius: '10px',
                                                                fontSize: "14px",
                                                                minHeight: "45px",
                                                            }),
                                                            dropdownIndicator: (base, state) => ({
                                                                ...base,
                                                                transform: state.selectProps.menuIsOpen ? 'rotate(-180deg)' : 'rotate(0)',
                                                                transition: '250ms',
                                                                width: '35px',
                                                                height: '35px',
                                                            }),
                                                        }}
                                                    />

                                                </div>
                                            </div>
                                            <div className="col-12 col-sm-12">
                                                <div className="form-group local-forms">
                                                    <label>
                                                        Remark <span className="login-danger">*</span>
                                                    </label>
                                                    <textarea
                                                        className="form-control"
                                                        rows={3}
                                                        cols={30}
                                                        defaultValue={""}
                                                    />
                                                </div>
                                            </div>
                                           
                                            <div className="col-12">
                                                <div className="doctor-submit text-end">
                                                    <Link to='/admin/doctors'>
                                                        <button
                                                            type="submit"
                                                            className="btn btn-primary submit-form me-2"

                                                        >

                                                            Submit
                                                        </button>
                                                    </Link>
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

                        </div>
                        
                    </div>

                </div>
            </div>
        </>
    )
}

export default AddDischargeForm