import React, { useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import Select from 'react-select'

import FeatherIcon from 'feather-icons-react/build/FeatherIcon'
import { Info } from 'feather-icons-react/build/IconComponents'

import patients from '../../assets/json/PatientList'

import Header from '../../components/Header'
import Sidebar from '../../components/Sidebar'

import Button from '../../components/ui_elements/Button'
import Card from '../../components/ui_elements/card/Card'
import CardBody from '../../components/ui_elements/card/CardBody'
import { Tab, TabPanel, Tabs } from '../../components/ui_elements/Tabs'
import CustomBadge from '../../components/ui_elements/CustomBadge'
import AppointmentsList from '../../components/FrontOffice/QueueManagement/OpdView/AppointmentsList'
import Vitals from './Vitals'
import Prescriptions from '../../components/simplepages/pharmacy/Prescriptions'
import { doctor_consultation_video_1, doctor_consultation_video_2 } from '../../components/imagepath'

const Input = ({ text, unit, type = 'text', placeholder = '' }) => {
    return (
        <div className="form-group local-forms"
            style={{ position: 'relative', width: '' }}>

            <input
                className="form-control"
                type={type}
                placeholder={placeholder ? placeholder : text}
            />
            <div style={{ position: 'absolute', top: '10px', right: '15px' }}>
                <p style={{ color: 'darkblue' }}>{unit}</p>
            </div>
        </div>
    )
}

const AppointmentOpdBox = ({ title, badges, setThing }) => {
    const [selectedOption, setSelectedOption] = useState(null);
    const [options, setOptions] = useState([
        { value: 1, label: "Select City" },
        { value: 2, label: "Alaska" },
        { value: 3, label: "California" },
    ]);

    return (
        <div>
            <h5>{title} </h5>
            <div className="form-group w-100">
                <Select
                    defaultValue={selectedOption}
                    onChange={setSelectedOption}
                    options={options}
                    menuPortalTarget={document.body}
                    id="search-commodity"
                    components={{
                        IndicatorSeparator: () => null,
                    }}
                    styles={{
                        menuPortal: (base) => ({
                            ...base,
                            zIndex: 9999,
                        }),
                        control: (baseStyles, state) => ({
                            ...baseStyles,
                            borderColor: state.isFocused
                                ? "none"
                                : "2px solid rgba(46, 55, 164, 0.1);",
                            boxShadow: state.isFocused
                                ? "0 0 0 1px #2e37a4"
                                : "none",
                            "&:hover": {
                                borderColor: state.isFocused
                                    ? "none"
                                    : "2px solid rgba(46, 55, 164, 0.1)",
                            },
                            borderRadius: "10px",
                            fontSize: "14px",
                            minHeight: "45px",
                        }),
                        dropdownIndicator: (base, state) => ({
                            ...base,
                            transform: state.selectProps.menuIsOpen
                                ? "rotate(-180deg)"
                                : "rotate(0)",
                            transition: "250ms",
                            width: "35px",
                            height: "35px",
                        }),
                    }}
                />
            </div>
            <div style={{ backgroundColor: '#ededed', border: '0.5px solid grey', borderRadius: '0.5rem', padding: '0.3rem', marginBottom: '1rem' }}>
                {
                    badges.map((badge, index) => {
                        return <CustomBadge color='pink' title={badge} border="1px solid grey" mr='0.3rem' mb='0.3rem' key={index} onClick={setThing} />
                    })
                }
            </div>
        </div>
    )
}

const SufferingDetails = ({ id, select = true }) => {
    const [selectedOption, setSelectedOption] = useState(null);
    const [options, setOptions] = useState([
        { value: '1h', label: "1 Hours" },
        { value: '8h', label: "8 Hours" },
        { value: '12h', label: "12 Hours" },
        { value: '1d', label: "1 Day" },
        { value: '2d', label: "2 Days" },
        { value: '3d', label: "3 Days" },
        { value: '4d', label: "4 Days" },
        { value: '5d', label: "5 Days" },
        { value: '6d', label: "6 Days" },
        { value: '1w', label: "1 Week" },
    ]);
    return (
        <>
            {
                select && <div className="form-group w-100">
                    <label htmlFor={`search-commodity-${id}`}>Suffering Since</label>
                    <Select
                        defaultValue={selectedOption}
                        onChange={setSelectedOption}
                        options={options}
                        menuPortalTarget={document.body}
                        id={`search-commodity-${id}`}
                        components={{
                            IndicatorSeparator: () => null,
                        }}
                        styles={{
                            menuPortal: (base) => ({
                                ...base,
                                zIndex: 9999,
                            }),
                            control: (baseStyles, state) => ({
                                ...baseStyles,
                                borderColor: state.isFocused
                                    ? "none"
                                    : "2px solid rgba(46, 55, 164, 0.1);",
                                boxShadow: state.isFocused
                                    ? "0 0 0 1px #2e37a4"
                                    : "none",
                                "&:hover": {
                                    borderColor: state.isFocused
                                        ? "none"
                                        : "2px solid rgba(46, 55, 164, 0.1)",
                                },
                                borderRadius: "10px",
                                fontSize: "14px",
                                minHeight: "45px",
                            }),
                            dropdownIndicator: (base, state) => ({
                                ...base,
                                transform: state.selectProps.menuIsOpen
                                    ? "rotate(-180deg)"
                                    : "rotate(0)",
                                transition: "250ms",
                                width: "35px",
                                height: "35px",
                            }),
                        }}
                    />
                </div>
            }
            <div className="form-group local-forms">
                <label>
                    Details
                </label>
                <textarea
                    className="form-control"
                    rows={3}
                    cols={30}
                    placeholder="Additional Details on the condition"
                />
            </div>
        </>
    )
}

const OpdView = () => {
    const params = useParams();
    const [thing, setThing] = useState('Complains/Symptoms');

    const handleClickOfThing = (thing) => {
        setThing(thing);
    }

    const handleClickPatientAdmit = () => {

    }

    return (
        <>
            <Header />
            <Sidebar id="frontoffice" id1="frontoffices" activeClassName="queue-management" />
            <div className="page-wrapper">
                <div className="content">
                    {/* Page Header */}
                    <div className="page-header">
                        <div className="row">
                            <div className="col-sm-12">
                                <ul className="breadcrumb">
                                    <li className="breadcrumb-item">
                                        <Link to="/queue-management">Queue Management</Link>
                                    </li>
                                    <li className="breadcrumb-item">
                                        <i className="feather-chevron-right">
                                            <FeatherIcon icon="chevron-right" />
                                        </i>
                                    </li>
                                    <li className="breadcrumb-item">
                                        <Link to="#">OPD View</Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    {/* Card */}
                    <Card>
                        <CardBody>
                            <div className="row">
                                <div className="col-12 col-md-4 d-flex">
                                    <div className='me-2'>
                                        <img src={ doctor_consultation_video_1 } alt="image" height={60} width={60}/>
                                    </div>
                                    <div className="invoice-info">
                                        <strong className="customer-text">
                                            {`(${params.uhid})`} {"Manohar Prasad"}
                                        </strong>
                                        <p className="invoice-details-two">
                                            (20Y 7D) <br />
                                            Ref.By: Self
                                            <br />
                                        </p>
                                    </div>
                                </div>
                                <div className="col-12 col-md-4">

                                </div>
                                <div className="col-12 col-md-4 d-flex justify-content-end">
                                    <Button sx={{ maxHeight: 'fit-content' }} onClick={handleClickPatientAdmit}>
                                        Admit
                                    </Button>
                                </div>
                            </div>
                        </CardBody>
                    </Card>
                    <Card>
                        <CardBody>
                            <div className="card-header d-flex">
                                <p className="p-2 text-red">
                                    Walk-In
                                </p>
                                <p className="p-2" >
                                    /
                                </p>
                                <p className="p-2" style={{ borderRight: '1px solid grey', color: 'orange' }}>
                                    Waiting
                                </p>
                                <p className='p-2'>{new Date().toISOString().split('T')[0]}</p>
                                <p className='p-2'><Info></Info></p>
                            </div>
                            <Tabs>
                                <Tab text='Summary' id='tab1' />
                                <Tab text='Symptoms/History' id='tab2' />
                                <Tab text='Vitals/Observation' id='tab3' />
                                <Tab text='Investigation' id='tab4' />
                                <Tab text='Diagnosis' id='tab5' />
                                <Tab text='Rx' id='tab7' />
                                <Tab text='Advice' id='tab8' />
                                <Tab text='Comment' id='tab9' />
                                <Tab text='ReferredTo' id='tab10' />
                                <Tab text='Treatment' id='tab11' />
                                <TabPanel id='tab1'>
                                    <>
                                        <CustomBadge title={`Follow Up: ${new Date().toISOString()?.split('T')[0]}`} />
                                        <p>Follow up</p>
                                        <p>Next follow up is scheduled on {new Date().toISOString()?.split('T')[0]}</p>
                                    </>
                                </TabPanel>
                                <TabPanel id='tab2'>
                                    <div className='row'>
                                        <div className="col-12 col-sm-12 col-md-6" style={{ backgroundColor: '#ededed', padding: '1rem' }}>
                                            <AppointmentOpdBox title='Complaints/Symptoms' badges={['Fever', 'eye redness', 'cold', 'eye watering', 'eye tearing']} setThing={handleClickOfThing} />
                                            <AppointmentOpdBox title='Past History' badges={['Diabetes', 'Hypertension', 'Leukemia']} setThing={handleClickOfThing} />
                                            <AppointmentOpdBox title='Family History' badges={['Heart Diesase', 'Asthma']} setThing={handleClickOfThing} />
                                        </div>
                                        <div className="col-12 col-sm-12 col-md-6" style={{ padding: '1rem' }}>
                                            <h4>Detailed Information of <span style={{ color: 'red' }}>{thing}</span></h4>
                                            <div style={{ padding: '1rem' }}>
                                                <SufferingDetails />
                                            </div>
                                        </div>
                                    </div>
                                </TabPanel>
                                <TabPanel id='tab3'>
                                    <div className='row'>
                                        <div className="col-12 col-sm-12 col-md-6" style={{ backgroundColor: '#ededed', padding: '1rem' }}>
                                            <div>
                                                <h5>Vitals</h5>
                                                <form method="post">
                                                    <div className="row">
                                                        <div className="col-12 col-sm-12 col-md-6 col-lg-2">
                                                            <Input text='W' unit='kg' type='number' />
                                                        </div>
                                                        <div className="col-12 col-sm-12 col-md-6 col-lg-2">
                                                            <Input text='H' unit='cm' type='number' />
                                                        </div>
                                                        <div className="col-12 col-sm-12 col-md-6 col-lg-2">
                                                            <Input text='BMI' unit='' />
                                                        </div>
                                                        <div className="col-12 col-sm-12 col-md-6 col-lg-5">
                                                            <Input text='BP Systalic' type='number' placeholder='systolic  /  diastoic' />
                                                        </div>
                                                        <div className="col-12 col-sm-12 col-md-6 col-lg-2">
                                                            <Input text='Hr' unit='/min' type='number' />
                                                        </div>

                                                        {/* Four -One */}
                                                        <div className="col-12 col-sm-12 col-md-6 col-lg-5">
                                                            <Input text='Temperature' unit='°F' />
                                                        </div>
                                                        <div className="col-12 col-sm-12 col-md-6 col-lg-5">
                                                            <Input text='Spot Blood Sugar' unit='mg/dL' type='test' />
                                                        </div>
                                                        <div className="col-12 col-sm-12 col-md-6 col-lg-2">
                                                            <Input text='Spo2' unit='%' />
                                                        </div>
                                                        <div className="col-12 col-sm-12 col-md-6 col-lg-2">
                                                            <Input text='BSA' />
                                                        </div>

                                                        {/* Four-Two */}
                                                        <div className="col-12 col-sm-12 col-md-6 col-lg-5">
                                                            <Input text='eGFR' />
                                                        </div>
                                                        <div className="col-12 col-sm-12 col-md-6 col-lg-2">
                                                            <Input text='RR' />
                                                        </div>
                                                        <div className="col-12 col-sm-12 col-md-6 col-lg-2">
                                                            <Input text='HC' />
                                                        </div>
                                                        <div className="col-12 col-sm-12 col-md-6 col-lg-5">
                                                            <Input text='General-rbs' unit='mg/dL' />
                                                        </div>

                                                        {/* One */}
                                                        <div className="col-12 col-sm-12 col-md-6 col-lg-5">
                                                            <Input text='Pefr' unit='L/min' />
                                                        </div>
                                                        <div className="col-12 col-sm-12 col-md-6 col-lg-5">
                                                            <Input text='Urine Output' />
                                                        </div>
                                                        <div className="col-12 col-sm-12 col-md-6 col-lg-5">
                                                            <Input text='Sugar Charting' />
                                                        </div>

                                                        {/* Two */}
                                                        <div className="col-12 col-sm-12 col-md-6 col-lg-5">
                                                            <Input text='HOMA-IR' />
                                                        </div>
                                                        <div className="col-12 col-sm-12 col-md-6 col-lg-5">
                                                            <Input text='Waist Hip Ratio' />
                                                        </div>
                                                        <div className="col-12 col-sm-12 col-md-6 col-lg-5">
                                                            <Input text='NAFLD fibrosis score' />
                                                        </div>

                                                        {/* Three */}
                                                        <div className="col-12 col-sm-12 col-md-6 col-lg-5">
                                                            <Input text='Date added to wait list' type='date' />
                                                        </div>
                                                        <div className="col-12 col-sm-12 col-md-6 col-lg-5">
                                                            <Input text='Date of Birth' type='date' />
                                                        </div>
                                                        <div className="col-12 col-sm-12 col-md-6 col-lg-5">
                                                            <Input text='Serum Creatinine' />
                                                        </div>

                                                        {/* Four */}
                                                        <div className="col-12 col-sm-12 col-md-6 col-lg-5">
                                                            <Input text='Albumin' />
                                                        </div>
                                                        <div className="col-12 col-sm-12 col-md-6 col-lg-5">
                                                            <Input text='INR' />
                                                        </div>
                                                        <div className="col-12 col-sm-12 col-md-6 col-lg-5">
                                                            <Input text='Bilirubin' />
                                                        </div>

                                                        {/* Five */}
                                                        <div className="col-12 col-sm-12 col-md-6 col-lg-5">
                                                            <Input text='Serum Sodium' />
                                                        </div>
                                                        <div className="col-12 col-sm-12 col-md-6 col-lg-5">
                                                            <Input text='Mid Parental Height' unit=' cm' />
                                                        </div>
                                                        <div className="col-12 col-sm-12 col-md-6 col-lg-5">
                                                            <Input text='Score2-Diabetes' unit=' %' />
                                                        </div>
                                                    </div>
                                                    <div className='text-end'>
                                                        <Button ></Button>
                                                    </div>
                                                </form>
                                            </div>
                                            <AppointmentOpdBox title='General Examination' badges={['Center', 'Trauma', 'Infected Throat']} setThing={handleClickOfThing} />
                                            <AppointmentOpdBox title='Systematic Examination' badges={['CVS', 'clear bridge sound', 'CNS', 'tenderness', 'Knee Injury', 'Icterus']} setThing={handleClickOfThing} />
                                            <AppointmentOpdBox title='Local Examination' badges={['Hypertension', 'Rectal Bleeding']} setThing={handleClickOfThing} />
                                        </div>
                                        <div className="col-12 col-sm-12 col-md-6" style={{ padding: '1rem' }}>
                                            <h4>Detailed Information of <span style={{ color: 'red' }}>{thing}</span></h4>
                                            <div style={{ padding: '1rem' }}>
                                                <SufferingDetails />
                                            </div>
                                        </div>
                                    </div>
                                </TabPanel>
                                <TabPanel id='tab4'>
                                    <div className='row'>
                                        <div className="col-12 col-sm-12 col-md-6" style={{ backgroundColor: '#ededed', padding: '1rem' }}>
                                            <AppointmentOpdBox title='Lab Pathology' badges={['cbc', 'Hb', 'HBIG', 'CRP']} setThing={handleClickOfThing} />
                                            <AppointmentOpdBox title='Radiology' badges={['CT Scan', 'USG', 'Laser Surgery']} setThing={handleClickOfThing} />
                                        </div>
                                        <div className="col-12 col-sm-12 col-md-6" style={{ padding: '1rem' }}>
                                            <h4>Detailed Information of <span style={{ color: 'red' }}>{thing}</span></h4>
                                            <div style={{ padding: '1rem' }}>
                                                <SufferingDetails select={false} />
                                            </div>
                                        </div>
                                    </div>
                                </TabPanel>
                                <TabPanel id='tab5'>
                                    <div className='row'>
                                        <div className="col-12 col-sm-12 col-md-6" style={{ backgroundColor: '#ededed', padding: '1rem' }}>
                                            <AppointmentOpdBox title='Diagnosis' badges={['Hypertension', 'Cataracts', '1D47 Yellow Fever', 'Typhoid', 'Visual Floaters']} setThing={handleClickOfThing} />
                                        </div>
                                        <div className="col-12 col-sm-12 col-md-6" style={{ padding: '1rem' }}>
                                            <h4>Detailed Information of <span style={{ color: 'red' }}>{thing}</span></h4>
                                            <div style={{ padding: '1rem' }}>
                                                <SufferingDetails />
                                            </div>
                                        </div>
                                    </div>
                                </TabPanel>
                                <TabPanel id='tab7'>
                                    <Prescriptions></Prescriptions>
                                </TabPanel>
                                <TabPanel id='tab8'>
                                    <div className='row'>
                                        <div className="col-12 col-sm-12 col-md-6" style={{ backgroundColor: '#ededed', padding: '1rem' }}>
                                            <AppointmentOpdBox title='General Advice' badges={['Stop smoking', 'Dont rub your eye', 'Do not eat sour food items']} setThing={handleClickOfThing} />
                                            <AppointmentOpdBox title="Treatment" badges={['Total Knee Replacement', 'Total Body Surface Area Burns']} setThing={handleClickOfThing} />
                                        </div>
                                        <div className="col-12 col-sm-12 col-md-6" style={{ padding: '1rem' }}>
                                            <div style={{ padding: '1rem' }}>
                                                <p style={{ fontSize: "18px", color: 'lightgray', textAlign: 'center' }}>No Data Available</p>
                                            </div>
                                        </div>
                                    </div>
                                </TabPanel>
                                <TabPanel id='tab9'>
                                    <div>
                                        <h5>Comment</h5>
                                        <div className="form-group local-forms">
                                            <textarea
                                                className="form-control"
                                                rows={3}
                                                cols={30}
                                                placeholder="Add Comments"
                                            />
                                        </div>
                                    </div>
                                </TabPanel>
                                <TabPanel id='tab10'>
                                    <div>
                                        <h5 className="mb-4">Referred To:</h5>
                                        <div className="row">
                                            <div className="col-12 col-md-6 col-xl-4">
                                                <div className="form-group local-forms">
                                                    <label>
                                                        Referrer Name{" "}
                                                        <span className="login-danger">*</span>
                                                    </label>
                                                    <input
                                                        className="form-control"
                                                        type="text"
                                                        placeholder='Referrer Name'
                                                    />
                                                </div>
                                            </div>
                                            <div className="col-12 col-md-6 col-xl-4">
                                                <div className="form-group local-forms">
                                                    <label>
                                                        Speciality
                                                    </label>
                                                    <input
                                                        className="form-control"
                                                        type="text"
                                                        placeholder='Speciality'
                                                    />
                                                </div>
                                            </div>
                                            <div className="col-12 col-md-6 col-xl-4">
                                                <div className="form-group local-forms">
                                                    <label>
                                                        Mobile Number
                                                    </label>
                                                    <input
                                                        className="form-control"
                                                        type="text"
                                                        placeholder='Enter mobile number'
                                                    />
                                                </div>
                                            </div>
                                            <div className="col-12 col-md-6 col-xl-4">
                                                <div className="form-group local-forms">
                                                    <label>
                                                        Clinic Name
                                                    </label>
                                                    <input
                                                        className="form-control"
                                                        type="text"
                                                        placeholder='Clinic name'
                                                    />
                                                </div>
                                            </div>
                                            <div className="col-12 col-md-6 col-xl-4">
                                                <div className="form-group local-forms">
                                                    <label>
                                                        Reason
                                                    </label>
                                                    <input
                                                        className="form-control"
                                                        type="text"
                                                        placeholder='Reason'
                                                    />
                                                </div>
                                            </div>
                                            <div className="col-12 col-md-6 col-xl-4">
                                                <div className="form-group local-forms">
                                                    <label>
                                                        Address
                                                    </label>
                                                    <textarea className='form-control'></textarea>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </TabPanel>
                                <TabPanel id='tab11'>
                                    <div className='row'>
                                        <div className="col-12 col-sm-12 col-md-6" style={{ backgroundColor: '#ededed', padding: '1rem' }}>
                                            <AppointmentOpdBox title='Treatment' badges={['Psoriasis', 'Skin', 'Eyedrop Test']} setThing={handleClickOfThing} />
                                        </div>
                                        <div className="col-12 col-sm-12 col-md-6" style={{ padding: '1rem' }}>
                                            <h4>Detailed Information of <span style={{ color: 'red' }}>{thing}</span></h4>
                                            <div style={{ padding: '1rem' }}>
                                                <SufferingDetails select={false} />
                                            </div>
                                        </div>
                                    </div>
                                </TabPanel>
                            </Tabs>
                        </CardBody>
                    </Card>
                    <h5>Previous Appointment</h5>
                    {
                        patients.Data[0].appointments.map((appoints) => (
                            <AppointmentsList
                                date={appoints.date}
                                mode={appoints.mode}
                                status={appoints.status}
                            >
                            </AppointmentsList>
                        ))

                    }
                </div>
            </div>
        </>
    )
}

export default OpdView
