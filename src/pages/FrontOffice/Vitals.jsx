import React, { useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import Header from '../../components/Header';
import Sidebar from '../../components/Sidebar';
import FeatherIcon from 'feather-icons-react/build/FeatherIcon';
import Card from '../../components/ui_elements/card/Card';
import CardBody from '../../components/ui_elements/card/CardBody';
import CardHeader from '../../components/ui_elements/card/CardHeader';
import Button from '../../components/ui_elements/Button';

const Input = ({ text, unit, type = 'text', placeholder = '' }) => {
    return (
        <div className="form-group local-forms"
            style={{ position: 'relative', width: '' }}>
            <label>
                {text} <span className="login-danger">*</span>
            </label>
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

const Vitals = () => {
    const params = useParams();
    const [isClicked, setIsClicked] = useState(false);
    const [temperature, setTemperature] = useState("");
    const [eGFR, setEGFR] = useState("");
    const [pefr, setPefr] = useState("");
    const [homaIR, setHomaIR] = useState("");
    const [albumin, setAlbumin] = useState("");
    const [serumSodium, setSerumSodium] = useState("");
    const [waistHipRatio, setWaistHipRatio] = useState("");
    const [systolic, setSystolic] = useState("");
    const [diastolic, setDiastolic] = useState("");
    const [spotBloodSugar, setSpotBloodSugar] = useState("");
    const [dateOfBirth, setDateOfBirth] = useState(null);

    const onChange = (date, dateString) => {
        setDateOfBirth(dateString);
        setIsClicked(true);
    };

    const handleInputChange = (e, setState) => {
        setState(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission logic here
        console.log({
            temperature,
            eGFR,
            pefr,
            homaIR,
            albumin,
            serumSodium,
            waistHipRatio,
            systolic,
            diastolic,
            spotBloodSugar,
            dateOfBirth,
        });
    };

    return (
        <>
            <Header />
            <Sidebar
                id="frontoffice"
                id1="frontoffices"
                activeClassName="queue-management"
            />
            <div className="page-wrapper">
                <div className="content" style={{ paddingBottom: '1rem' }}>
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
                                        <Link to="#">Vitals</Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <Card>
                        <CardHeader title={`Vital Form - ${params.uhid ?? ''}`} />
                        <CardBody>
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
                                    <div className="col-12 col-sm-12 col-md-6 col-lg-4">
                                        <Input text='BP Systalic' type='number' placeholder='systolic  /  diastoic' />
                                    </div>
                                    <div className="col-12 col-sm-12 col-md-6 col-lg-2">
                                        <Input text='Hr' unit='/min' type='number' />
                                    </div>

                                    {/* Four -One */}
                                    <div className="col-12 col-sm-12 col-md-6 col-lg-4">
                                        <Input text='Temperature' unit='°F' />
                                    </div>
                                    <div className="col-12 col-sm-12 col-md-6 col-lg-4">
                                        <Input text='Spot Blood Sugar' unit='mg/dL' type='test' />
                                    </div>
                                    <div className="col-12 col-sm-12 col-md-6 col-lg-2">
                                        <Input text='Spo2' unit='%' />
                                    </div>
                                    <div className="col-12 col-sm-12 col-md-6 col-lg-2">
                                        <Input text='BSA' />
                                    </div>

                                    {/* Four-Two */}
                                    <div className="col-12 col-sm-12 col-md-6 col-lg-4">
                                        <Input text='eGFR' />
                                    </div>
                                    <div className="col-12 col-sm-12 col-md-6 col-lg-2">
                                        <Input text='RR' />
                                    </div>
                                    <div className="col-12 col-sm-12 col-md-6 col-lg-2">
                                        <Input text='HC' />
                                    </div>
                                    <div className="col-12 col-sm-12 col-md-6 col-lg-4">
                                        <Input text='General-rbs' unit='mg/dL' />
                                    </div>

                                    {/* One */}
                                    <div className="col-12 col-sm-12 col-md-6 col-lg-4">
                                        <Input text='Pefr' unit='L/min' />
                                    </div>
                                    <div className="col-12 col-sm-12 col-md-6 col-lg-4">
                                        <Input text='Urine Output' />
                                    </div>
                                    <div className="col-12 col-sm-12 col-md-6 col-lg-4">
                                        <Input text='Sugar Charting' />
                                    </div>

                                    {/* Two */}
                                    <div className="col-12 col-sm-12 col-md-6 col-lg-4">
                                        <Input text='HOMA-IR' />
                                    </div>
                                    <div className="col-12 col-sm-12 col-md-6 col-lg-4">
                                        <Input text='Waist Hip Ratio' />
                                    </div>
                                    <div className="col-12 col-sm-12 col-md-6 col-lg-4">
                                        <Input text='NAFLD fibrosis score' />
                                    </div>

                                    {/* Three */}
                                    <div className="col-12 col-sm-12 col-md-6 col-lg-4">
                                        <Input text='Date added to wait list' type='date' />
                                    </div>
                                    <div className="col-12 col-sm-12 col-md-6 col-lg-4">
                                        <Input text='Date of Birth' type='date' />
                                    </div>
                                    <div className="col-12 col-sm-12 col-md-6 col-lg-4">
                                        <Input text='Serum Creatinine' />
                                    </div>

                                    {/* Four */}
                                    <div className="col-12 col-sm-12 col-md-6 col-lg-4">
                                        <Input text='Albumin' />
                                    </div>
                                    <div className="col-12 col-sm-12 col-md-6 col-lg-4">
                                        <Input text='INR' />
                                    </div>
                                    <div className="col-12 col-sm-12 col-md-6 col-lg-4">
                                        <Input text='Bilirubin' />
                                    </div>

                                    {/* Five */}
                                    <div className="col-12 col-sm-12 col-md-6 col-lg-4">
                                        <Input text='Serum Sodium' />
                                    </div>
                                    <div className="col-12 col-sm-12 col-md-6 col-lg-4">
                                        <Input text='Mid Parental Height' unit=' cm' />
                                    </div>
                                    <div className="col-12 col-sm-12 col-md-6 col-lg-4">
                                        <Input text='Score2-Diabetes' unit=' %' />
                                    </div>
                                </div>
                                <div className='text-end'>
                                    <Button ></Button>
                                </div>
                            </form>
                        </CardBody>
                    </Card>
                </div>
            </div>
        </>
    )
}

export default Vitals
