import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { DatePicker, Table } from "antd";
import Select from "react-select";

import Header from "../../components/Header";
import FeatherIcon from "feather-icons-react";
import Sidebar from "../../components/Sidebar";
import Button from "../../components/ui_elements/Button";
import Card from "../../components/ui_elements/card/Card";
import CardBody from "../../components/ui_elements/card/CardBody";
import CustomBadge from "../../components/ui_elements/CustomBadge";
import CardHeader from "../../components/ui_elements/card/CardHeader";
import data from "../../assets/json/DoctorList.js"
import { itemRender, onShowSizeChange } from "../../components/Pagination";
import { queueManagementData as invoice_list_data } from "../../assets/json/queueManagement.js";

const QueueManagement = () => {
  const [selectedOption, setSelectedOption] = useState(null);
  const [selectedRowKeys, setSelectedRowKeys] = useState([]);
  const navigate = useNavigate();
  const [options, setOptions] = useState(data.Data.map((doc) => ({ value: doc.Name, label: doc.Name })));

  const onSelectChange = (newSelectedRowKeys) => {
    console.log("selectedRowKeys changed: ", selectedRowKeys);
    setSelectedRowKeys(newSelectedRowKeys);
  };

  const rowSelection = {
    selectedRowKeys,
    onChange: onSelectChange,
  };

  const OpdViewRedirect = (record) => {

  }

  const labelPrintRedirect = (record) => {

  }

  const vitalPageRedirect = (record) => {
    navigate(`/vitals/${record.uhid}`)
  }

  const billingRedirect = (record) => {

  }

  const columns = [
    {
      title: "Sl.Num",
      dataIndex: "serialNumber",
      sorter: (a, b) => a.serialNumber - b.serialNumber,
    },
    {
      title: "UHID",
      dataIndex: "uhid",
      sorter: (a, b) => a.uhid.localeCompare(b.uhid),
    },
    {
      title: "Patient Name",
      dataIndex: "patientName",
      sorter: (a, b) => a.patientName.localeCompare(b.patientName),
    },
    {
      title: "Doctor Name",
      dataIndex: "doctorName",
      sorter: (a, b) => a.doctorName.localeCompare(b.doctorName),
    },
    {
      title: "Payer Name",
      dataIndex: "payerName",
      sorter: (a, b) => a.payerName.localeCompare(b.payerName),
    },
    {
      title: "Gender/Age",
      dataIndex: "genderAge",
      sorter: (a, b) => a.age - b.age,
    },
    {
      title: "Contact",
      dataIndex: "contact",
      sorter: (a, b) => a.contact.localeCompare(b.contact),
    },
    {
      title: "Alt Num",
      dataIndex: "alternativeNumber",
      sorter: (a, b) => a.alternativeNumber.localeCompare(b.alternativeNumber),
    },
    {
      title: "Apt Time",
      dataIndex: "appointmentTime",
      sorter: (a, b) => new Date(a.appointmentTime) - new Date(b.appointmentTime),
    },
    {
      title: "Reason",
      dataIndex: "reason",
      sorter: (a, b) => a.reason.localeCompare(b.reason),
    },
    {
      title: "Follow Up",
      dataIndex: "followUp",
      render: () =>  {
        return <Button>
          + Follow-up
        </Button>
      }
    },
    {
      title: "Follow Up Plan",
      dataIndex: "followUpPlan",
      sorter: (a, b) => a.followUpPlan.localeCompare(b.followUpPlan),
    },
    {
      title: "Status",
      dataIndex: "status",
      sorter: (a, b) => a.status.localeCompare(b.status),
      render: (text, record) => { 
        let color = 'grey';
        if( text == 'Active') color = 'green';
        else if( text == 'Inactive') color='red';
        else if( text == 'Pending') color='orange';
        else if( text == 'Confirmed') color='purple';
        else if( text == 'Completed') color='green';
        else color = 'grey'
        return <CustomBadge title={ text } color={ color }/> }
    },
    {
      title: "Billing",
      dataIndex: "billing",
      sorter: (a, b) => a.billing - b.billing,
    },
    {
      title: "Actions",
      dataIndex: "",
      render: (text, record) => {
        return <>
          <Button onClick={ () => labelPrintRedirect(record) }>
            <p style={{ fontSize: '12px' }}>Label Print</p>
          </Button>
          <Button onClick={ () => OpdViewRedirect(record) }>OPD View</Button>
          <Button onClick={ () => vitalPageRedirect(record) }>Vital</Button>
          <Button onClick={ () => billingRedirect(record) }>Billing</Button>
        </>
      }
    },
  ];


  const onChange = () => {

  }


  return (
    <>
      <Header />
      <Sidebar
        id="frontoffice"
        id1="frontoffices"
        activeClassName="queue-management"
      />
      <div className="page-wrapper">
        <div className="content">
          {/* Page Header */}
          <div className="page-header">
            <div className="row">
              <div className="col-sm-12">
                <ul className="breadcrumb">
                  <li className="breadcrumb-item">
                    <Link to="#">Queue Management</Link>
                  </li>
                  <li className="breadcrumb-item">
                    <i className="feather-chevron-right">
                      <FeatherIcon icon="chevron-right" />
                    </i>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <Card>
            <CardHeader title="Queue Management" />
            <CardBody>
              <div style={{ whiteSpace: 'nowrap', overflowX: 'auto', scrollbarWidth: 'none', marginBottom: '1rem' }}>
                <CustomBadge title="All(2)" color="grey" />
                <CustomBadge title="Pending(0)" color="orange" />
                <CustomBadge title="Confirmed(0)" color="green" />
                <CustomBadge title="Waiting(2)" color="purple" />
                <CustomBadge title="Engaged(0)" color="blue" />
                <CustomBadge title="Checkout(0)" color="pink" />
                <CustomBadge title="Completed(0)" color="green" />
                <CustomBadge title="Cancelled(0)" color="red" />
                <CustomBadge title="Follow-up(0)" color="purple" />
                <CustomBadge title="Temp.Patient" color="red" />
              </div>
              <div className="row justify-content-end">
                <div className="col-3">
                  <Button sx={{ textAlign: 'end', width: 'max-content' }}>Add Walk-In Appointment</Button>
                </div>
                <div className="form-group local-forms col-3">
                  <label>
                    Doctor <span className="login-danger">*</span>
                  </label>
                  <Select
                    menuPortalTarget={document.body}
                    styles={{
                      menuPortal: (base) => ({
                        ...base,
                        zIndex: 9999,
                      }),
                    }}
                    defaultValue={selectedOption}
                    onChange={setSelectedOption}
                    options={options}
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
                <div className="form-group local-forms cal-icon col-3" style={{ width: "25%" }}>
                  <label>
                    Select Date{" "}
                    <span className="login-danger">*</span>
                  </label>
                  <DatePicker
                    className="form-control datetimepicker"
                    onChange={onChange}
                    suffixIcon={null}
                  />
                </div>
              </div>

              <div >
                <div className="table-responsive">
                  <Table
                    pagination={{
                      total: invoice_list_data.length,
                      showTotal: (total, range) =>
                        `Showing ${range[0]} to ${range[1]} of ${total} entries`,
                      // showSizeChanger: true,
                      onShowSizeChange: onShowSizeChange,
                      itemRender: itemRender,
                    }}
                    columns={columns}
                    dataSource={invoice_list_data}
                    rowSelection={rowSelection}
                    rowKey={(record) => record.id}
                  />
                </div>
              </div>
            </CardBody>
          </Card>
        </div>
      </div>
    </>
  );
};

export default QueueManagement;
