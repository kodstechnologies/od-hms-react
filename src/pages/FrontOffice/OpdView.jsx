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
        { value: 1, label: "Fever" },
        { value: 2, label: "Headache" },
        { value: 3, label: "Cold" },
        { value: 4, label: "Cough" },
        { value: 5, label: "Sore Throat" },
        { value: 6, label: "Shortness of Breath" },
        { value: 7, label: "Fatigue" },
        { value: 8, label: "Nausea" },
        { value: 9, label: "Vomiting" },
        { value: 10, label: "Chest Pain" },
        { value: 11, label: "Dizziness" },
        { value: 12, label: "Chills" },
        { value: 13, label: "Body Ache" },

        { value: 14, label: "Asthma" },
        { value: 15, label: "Bronchitis" },
        { value: 16, label: "Pneumonia" },
        { value: 17, label: "COPD" },
        { value: 18, label: "Lung Cancer" },
        { value: 19, label: "Tuberculosis" },
        { value: 20, label: "Pulmonary Fibrosis" },

        { value: 21, label: "Hypertension" },
        { value: 22, label: "Heart Attack" },
        { value: 23, label: "Heart Failure" },
        { value: 24, label: "Atrial Fibrillation" },
        { value: 25, label: "Stroke" },
        { value: 26, label: "Coronary Artery Disease" },
        { value: 27, label: "Arrhythmia" },
        { value: 28, label: "Angina" },

        { value: 29, label: "Gastritis" },
        { value: 30, label: "Ulcer" },
        { value: 31, label: "Gastroesophageal Reflux Disease (GERD)" },
        { value: 32, label: "Crohn's Disease" },
        { value: 33, label: "Irritable Bowel Syndrome (IBS)" },
        { value: 34, label: "Celiac Disease" },
        { value: 35, label: "Hepatitis" },
        { value: 36, label: "Liver Cirrhosis" },

        { value: 37, label: "Epilepsy" },
        { value: 38, label: "Parkinson's Disease" },
        { value: 39, label: "Multiple Sclerosis" },
        { value: 40, label: "Alzheimer's Disease" },
        { value: 41, label: "Dementia" },
        { value: 42, label: "Stroke" },
        { value: 43, label: "Migraine" },
        { value: 44, label: "Vertigo" },

        { value: 45, label: "Diabetes Mellitus" },
        { value: 46, label: "Hypothyroidism" },
        { value: 47, label: "Hyperthyroidism" },
        { value: 48, label: "Cushing's Syndrome" },
        { value: 49, label: "Addison's Disease" },
        { value: 50, label: "Polycystic Ovary Syndrome (PCOS)" },
        { value: 51, label: "Hyperparathyroidism" },

        { value: 52, label: "Lupus" },
        { value: 53, label: "Rheumatoid Arthritis" },
        { value: 54, label: "Psoriasis" },
        { value: 55, label: "Multiple Sclerosis" },
        { value: 56, label: "Hashimoto's Thyroiditis" },
        { value: 57, label: "Sjögren's Syndrome" },

        { value: 58, label: "Anxiety" },
        { value: 59, label: "Depression" },
        { value: 60, label: "Bipolar Disorder" },
        { value: 61, label: "Schizophrenia" },
        { value: 62, label: "Post-Traumatic Stress Disorder (PTSD)" },
        { value: 63, label: "Obsessive-Compulsive Disorder (OCD)" },
        { value: 64, label: "Panic Disorder" },

        { value: 65, label: "Chronic Kidney Disease (CKD)" },
        { value: 66, label: "Acute Kidney Failure" },
        { value: 67, label: "Nephritis" },
        { value: 68, label: "Kidney Stones" },
        { value: 69, label: "Polycystic Kidney Disease" },

        { value: 70, label: "Tuberculosis" },
        { value: 71, label: "Malaria" },
        { value: 72, label: "HIV/AIDS" },
        { value: 73, label: "Hepatitis B" },
        { value: 74, label: "Hepatitis C" },
        { value: 75, label: "Influenza" },
        { value: 76, label: "COVID-19" },
        { value: 77, label: "Measles" },
        { value: 78, label: "Chickenpox" },
        { value: 79, label: "Mumps" },
        { value: 80, label: "Pneumonia" },

        { value: 81, label: "Eczema" },
        { value: 82, label: "Psoriasis" },
        { value: 83, label: "Acne" },
        { value: 84, label: "Rosacea" },
        { value: 85, label: "Warts" },
        { value: 86, label: "Skin Cancer" },
        { value: 87, label: "Melanoma" },

        { value: 88, label: "Lung Cancer" },
        { value: 89, label: "Breast Cancer" },
        { value: 90, label: "Colon Cancer" },
        { value: 91, label: "Prostate Cancer" },
        { value: 92, label: "Ovarian Cancer" },
        { value: 93, label: "Pancreatic Cancer" },
        { value: 94, label: "Leukemia" },
        { value: 95, label: "Lymphoma" },
        { value: 96, label: "Cervical Cancer" },

        { value: 97, label: "Osteoarthritis" },
        { value: 98, label: "Rheumatoid Arthritis" },
        { value: 99, label: "Osteoporosis" },
        { value: 100, label: "Scoliosis" },
        { value: 101, label: "Gout" },
        { value: 102, label: "Fibromyalgia" },

        { value: 103, label: "Polycystic Ovary Syndrome (PCOS)" },
        { value: 104, label: "Endometriosis" },
        { value: 105, label: "Ectopic Pregnancy" },
        { value: 106, label: "Infertility" },
        { value: 107, label: "Prostate Enlargement" },
        { value: 108, label: "Cervical Dysplasia" },

        { value: 109, label: "Chronic Fatigue Syndrome" },
        { value: 110, label: "Sleep Apnea" },
        { value: 111, label: "Restless Leg Syndrome" },
        { value: 112, label: "Hemorrhoids" },
        { value: 113, label: "Varicose Veins" },
        { value: 114, label: "Shingles" },
        { value: 115, label: "Anemia" },
        { value: 116, label: "Sickle Cell Disease" },
        { value: 117, label: "Thyroid Disorder" },
        { value: 118, label: "Gallstones" },
        { value: 119, label: "Appendicitis" },

        { value: 120, label: "Burns" },
        { value: 121, label: "Trauma" },
        { value: 122, label: "Injuries" },
        { value: 123, label: "Fractures" },
        { value: 124, label: "Sprains" },
        { value: 125, label: "Strains" },
        { value: 126, label: "Allergic Reactions" },
        { value: 127, label: "Poisoning" },
        { value: 128, label: "Hydration Issues" },
        { value: 129, label: "Weight Loss" }
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
                                        <img src={doctor_consultation_video_1} alt="image" height={60} width={60} />
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
