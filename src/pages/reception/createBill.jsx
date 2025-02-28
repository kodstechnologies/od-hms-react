/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import Header from "../../components/Header";
import Sidebar from "../../components/Sidebar";
import { DatePicker } from "antd";
import { Link } from "react-router-dom";
import FeatherIcon from "feather-icons-react/build/FeatherIcon";
import Select from "react-select";
import PreviewBill from "../../components/Bill/PreviewBill";
import BankDetails from "../../components/Invoice/BankDetails";

const CreateBill = () => {
  const onChange = (date, dateString) => {};
  const [rows, setRows] = useState([]);

  const [selectedOption, setSelectedOption] = useState(null);
  const [options, setOptions] = useState([
    { value: 1, label: "Select Customer" },
    { value: 2, label: "Rakesh" },
    { value: 3, label: "Sameer" },
    { value: 4, label: "Raja" },
    { value: 4, label: "Piyush" },
  ]);

  const [selectedService, setSelectedService] = useState(null);
  const [services, setServices] = useState([
    { value: 1, label: "Select" },
    { value: 2, label: "OPD" },
    { value: 3, label: "Medicine" },
    { value: 4, label: "Pharmacy" },
  ]);

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

  const [inputFields, setInputFields] = useState([{}]);
  const addInputField = () => {
    setInputFields([...inputFields, {}]);
  };
  const removeInputFields = (index) => {
    const rows = [...inputFields];
    rows.splice(index, 1);
    setInputFields(rows);
  };
  const handleChanges = (index, evnt) => {
    const { name, value } = evnt.target;
    const list = [...inputFields];
    list[index][name] = value;
    setInputFields(list);
  };

  const [inputFieldsNew, setInputFieldsNew] = useState([{}]);
  const addInputFieldNew = () => {
    setInputFieldsNew([...inputFieldsNew, {}]);
  };
  const removeInputFieldsNew = (index) => {
    const rows = [...inputFieldsNew];
    rows.splice(index, 1);
    setInputFieldsNew(rows);
  };
  const handleChangesNew = (index, evnt) => {
    const { name, value } = evnt.target;
    const list = [...inputFieldsNew];
    list[index][name] = value;
    setInputFieldsNew(list);
  };
  return (
    <>
      <Header />
      <Sidebar
        id="pharmacy-menu-item"
        id1="pharmacy-menu-items"
        activeClassName="prescriptions"
      />
      <>
        <div className="page-wrapper">
          <div className="content container-fluid">
            {/* Page Header */}
            <div className="page-header">
              <div className="row">
                <div className="col-sm-12">
                  <ul className="breadcrumb">
                    <li className="breadcrumb-item">
                      <Link to="#">Pharmacy </Link>
                    </li>
                    <li className="breadcrumb-item">
                      <i className="feather-chevron-right">
                        <FeatherIcon icon="chevron-right" />
                      </i>
                      <Link to="/reception/billing">Billing List</Link>
                    </li>
                    <li className="breadcrumb-item active">
                      <i className="feather-chevron-right">
                        <FeatherIcon icon="chevron-right" />
                      </i>
                      Create Bill
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            {/* /Page Header */}
            <div className="row">
              <div className="col-md-12">
                <div className="card invoices-add-card">
                  <div className="card-body">
                    <form action="#" className="invoices-form">
                      <div className="invoices-main-form">
                        <div className="row">
                          <div className="col-xl-4 col-md-6 col-sm-12 col-12">
                            <div className="form-group">
                              <label>
                                Customer Name{" "}
                                <span className="login-danger">*</span>
                              </label>
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
                          </div>
                          <div className="col-lg-4 col-md-6">
                            <div className="form-group">
                              Date{" "}
                              <DatePicker
                                className="form-control datetimepicker"
                                onChange={onChange}
                                suffixIcon={null}
                                placeholder="24/11/2022"
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="invoice-add-table">
                        <div className="table-responsive">
                          <table className="table table-center add-table-items">
                            <thead>
                              <tr>
                                <th>Service Group</th>
                                <th>HSN Code</th>
                                <th>Service Name</th>
                                <th>Quantity</th>
                                <th>Price</th>
                                <th>Amount</th>
                                <th>Discount</th>
                                <th>Actions</th>
                              </tr>
                            </thead>
                            <tbody>
                              <tr className="add-row">
                                <td>
                                  <Select
                                    defaultValue={selectedService}
                                    onChange={setSelectedService}
                                    options={services}
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
                                </td>
                                <td>
                                  <input type="text" className="form-control" />
                                </td>
                                <td>
                                  <input type="text" className="form-control" />
                                </td>
                                <td>
                                  <input type="text" className="form-control" />
                                </td>
                                <td>
                                  <input type="text" className="form-control" />
                                </td>
                                <td>
                                  <input type="text" className="form-control" />
                                </td>
                                <td>
                                  <input type="text" className="form-control" />
                                </td>
                                <td
                                  className="add-remove text-end"
                                  style={{
                                    display: "flex",
                                    gap: "2px",
                                    alignItems: "center",
                                  }}
                                >
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
                                      <Select
                                        defaultValue={selectedService}
                                        onChange={setSelectedService}
                                        options={services}
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
                                            transform: state.selectProps
                                              .menuIsOpen
                                              ? "rotate(-180deg)"
                                              : "rotate(0)",
                                            transition: "250ms",
                                            width: "35px",
                                            height: "35px",
                                          }),
                                        }}
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
                      <div className="row">
                        <div className="col-lg-7 col-md-6">
                          <div className="invoice-fields">
                            <h4 className="field-title">More Fields</h4>
                            <div className="field-box">
                              <p>Payment Details</p>
                              <Link
                                className="btn btn-primary"
                                to="#"
                                data-bs-toggle="modal"
                                data-bs-target="#bank_details"
                              >
                                <i className="fas fa-plus-circle me-2" />
                                Add Bank Details
                              </Link>
                            </div>
                          </div>
                          <div className="invoice-faq">
                            <div
                              className="panel-group"
                              id="accordion"
                              role="tablist"
                              aria-multiselectable="true"
                            >
                              <div className="faq-tab">
                                <div className="panel panel-default">
                                  <div
                                    className="panel-heading"
                                    role="tab"
                                    id="headingTwo"
                                  >
                                    <p className="panel-title">
                                      <Link
                                        className="collapsed"
                                        data-bs-toggle="collapse"
                                        data-bs-parent="#accordion"
                                        to="#collapseTwo"
                                        aria-expanded="false"
                                        aria-controls="collapseTwo"
                                      >
                                        <i className="fas fa-plus-circle me-1" />{" "}
                                        Add Terms &amp; Conditions
                                      </Link>
                                    </p>
                                  </div>
                                  <div
                                    id="collapseTwo"
                                    className="panel-collapse collapse"
                                    role="tabpanel"
                                    aria-labelledby="headingTwo"
                                    data-bs-parent="#accordion"
                                  >
                                    <div className="panel-body">
                                      <textarea
                                        className="form-control"
                                        defaultValue={""}
                                      />
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div className="faq-tab">
                                <div className="panel panel-default">
                                  <div
                                    className="panel-heading"
                                    role="tab"
                                    id="headingThree"
                                  >
                                    <p className="panel-title">
                                      <Link
                                        className="collapsed"
                                        data-bs-toggle="collapse"
                                        data-bs-parent="#accordion"
                                        to="#collapseThree"
                                        aria-expanded="false"
                                        aria-controls="collapseThree"
                                      >
                                        <i className="fas fa-plus-circle me-1" />{" "}
                                        Add Notes
                                      </Link>
                                    </p>
                                  </div>
                                  <div
                                    id="collapseThree"
                                    className="panel-collapse collapse"
                                    role="tabpanel"
                                    aria-labelledby="headingThree"
                                    data-bs-parent="#accordion"
                                  >
                                    <div className="panel-body">
                                      <textarea
                                        className="form-control"
                                        defaultValue={""}
                                      />
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="col-lg-5 col-md-6">
                          <div className="invoice-total-card">
                            <h4 className="invoice-total-title">Summary</h4>
                            <div className="invoice-total-box">
                              <div className="invoice-total-inner">
                                <p>
                                  Net Payable <span>2100</span>
                                </p>
                                <p>
                                  Discount <span>- 200</span>
                                </p>
                                <p>
                                  Tax (15%) <span> 100</span>
                                </p>
                              </div>
                              <div className="invoice-total-footer">
                                <h4>
                                  Total Amount <span>2000.00</span>
                                </h4>
                              </div>
                            </div>
                          </div>
                          <div className="upload-sign">
                            <div className="form-group float-end mb-0">
                              <Link
                                className="btn btn-primary mx-2"
                                to="#"
                                data-bs-toggle="modal"
                                data-bs-target="#invoices_preview"
                              >
                                <i className="fa fa-eye" /> Save & Print
                              </Link>
                              <Link to={"/pharmacy/prescriptions"}>
                                <button
                                  className="btn btn-primary"
                                  type="submit"
                                >
                                  Save Bill
                                </button>
                              </Link>
                            </div>
                          </div>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <PreviewBill />
          <BankDetails />
        </div>
      </>
    </>
  );
};

export default CreateBill;
