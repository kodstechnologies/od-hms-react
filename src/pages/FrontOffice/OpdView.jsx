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

const SufferingDetails = () => {
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
                                <div className="col-12 col-md-4">
                                    <div className="invoice-info">
                                        <strong className="customer-text">
                                            {params.uhid} {" "}
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
                                <p className='p-2'>{new Date().toISOString()}</p>
                                <p className='p-2'><Info></Info></p>
                            </div>
                            <Tabs>
                                <Tab text='Summary' id='tab1' />
                                <Tab text='Symptoms/History' id='tab2' />
                                <Tab text='Vitals/Observation' id='tab3' />
                                <Tab text='Investigation' id='tab4' />
                                <Tab text='Diagnosis' id='tab5' />
                                <Tab text='Ophthal' id='tab6' />
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
                                                <SufferingDetails/>
                                            </div>
                                        </div>
                                    </div>
                                </TabPanel>
                                <TabPanel id='tab3'>

                                </TabPanel>
                                <TabPanel id='tab4'>

                                </TabPanel>
                                <TabPanel id='tab5'>

                                </TabPanel>
                                <TabPanel id='tab6'>

                                </TabPanel>
                            </Tabs>
                        </CardBody>
                    </Card>
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
