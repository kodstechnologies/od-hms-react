/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import Header from "../../components/Header";
import Sidebar from "../../components/Sidebar";
import { DatePicker } from "antd";
import InvoicePreview from "../../components/Invoice/InvoicePreview";
import BankDetails from "../../components/Invoice/BankDetails";
import DeleteInvoices from "../../components/Invoice/DeleteInvoices";
import SaveInvoice from "../../components/Invoice/SaveInvoice";
import { Link } from "react-router-dom";
import FeatherIcon from "feather-icons-react/build/FeatherIcon";
import Select from "react-select";

const CreateInvoice = () => {
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
            <div className="page-header invoices-page-header">
              <div className="row align-items-center">
                <div className="col">
                  <ul className="breadcrumb invoices-breadcrumb">
                    <li className="breadcrumb-item invoices-breadcrumb-item">
                      <Link to="/pharmacy/prescriptions">
                        <i className="fa fa-chevron-left" /> Back to Prescription List
                      </Link>
                    </li>
                  </ul>
                </div>
                <div className="col-auto">
                  <div className="invoices-create-btn">
                    <Link
                      className="invoices-preview-link"
                      to="#"
                      data-bs-toggle="modal"
                      data-bs-target="#invoices_preview"
                    >
                      <i className="fa fa-eye" /> Preview
                    </Link>
                    <Link
                      to="#"
                      data-bs-toggle="modal"
                      data-bs-target="#delete_invoices_details"
                      className="btn delete-invoice-btn"
                    >
                      Delete Invoice
                    </Link>
                    <Link
                      to="#"
                      data-bs-toggle="modal"
                      data-bs-target="#save_invocies_details"
                      className="btn save-invoice-btn"
                    >
                      Save Draft
                    </Link>
                  </div>
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
                            <div className="form-group">
                              <label>Po Number</label>
                              <input
                                className="form-control"
                                type="text"
                                placeholder="Enter Reference Number"
                              />
                            </div>
                          </div>
                          <div className="col-xl-5 col-md-6 col-sm-12 col-12">
                            <h4 className="invoice-details-title">
                              Invoice details
                            </h4>
                            <div className="invoice-details-box">
                              <div className="invoice-inner-head">
                                <span>
                                  Invoice No. <Link to="#">IN093439#@09</Link>
                                </span>
                              </div>
                              <div className="invoice-inner-footer">
                                <div className="row align-items-center">
                                  <div className="col-lg-6 col-md-6">
                                    <div className="invoice-inner-date">
                                      <span>
                                        Date{" "}
                                        <DatePicker
                                          className="form-control datetimepicker"
                                          onChange={onChange}
                                          suffixIcon={null}
                                          placeholder="24/11/2022"
                                        />
                                      </span>
                                    </div>
                                  </div>
                                  <div className="col-lg-6 col-md-6">
                                    <div className="invoice-inner-date invoice-inner-datepic">
                                      <span>
                                        Due Date
                                        <DatePicker
                                          className="form-control datetimepicker"
                                          onChange={onChange}
                                          suffixIcon={null}
                                          // placeholder='24/11/2022'
                                        />
                                      </span>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="col-xl-3 col-md-12 col-sm-12 col-12">
                            <div className="inovices-month-info">
                              <div className="form-group mb-0">
                                <label className="custom_check w-100">
                                  <input
                                    type="checkbox"
                                    id="enableTax"
                                    name="invoice"
                                  />
                                  <span className="checkmark" /> Enable tax
                                </label>
                                <label className="custom_check w-100">
                                  <input
                                    type="checkbox"
                                    id="chkYes"
                                    name="invoice"
                                  />
                                  <span className="checkmark" /> Recurring
                                  Invoice
                                </label>
                              </div>
                              <div id="show-invoices">
                                <div className="row">
                                  <div className="col-md-6">
                                    <div className="form-group">
                                      <select className="select">
                                        <option>By month</option>
                                        <option>March</option>
                                        <option>April</option>
                                        <option>May</option>
                                        <option>June</option>
                                        <option>July</option>
                                      </select>
                                    </div>
                                  </div>
                                  <div className="col-md-6">
                                    <div className="form-group">
                                      <input
                                        className="form-control"
                                        type="text"
                                        placeholder="Enter Months"
                                      />
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="invoice-item">
                        <div className="row">
                          <div className="col-xl-4 col-lg-6 col-md-6">
                            <div className="invoice-info">
                              <strong className="customer-text">
                                Invoice From{" "}
                                <Link className="small" to="/edit-invoice">
                                  Edit Address
                                </Link>
                              </strong>
                              <p className="invoice-details invoice-details-two">
                                Darren Elder <br />
                                806 Twin Willow Lane, Old Forge,
                                <br />
                                Newyork, USA <br />
                              </p>
                            </div>
                          </div>
                          <div className="col-xl-4 col-lg-6 col-md-6">
                            <div className="invoice-info">
                              <strong className="customer-text">
                                Invoice To
                              </strong>
                              <p className="invoice-details invoice-details-two">
                                Walter Roberson <br />
                                299 Star Trek Drive, Panama City, <br />
                                Florida, 32405, USA <br />
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="invoice-add-table">
                        <h4>Item Details</h4>
                        <div className="table-responsive">
                          <table className="table table-center add-table-items">
                            <thead>
                              <tr>
                                <th>Items</th>
                                <th>Category</th>
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
                                  Taxable Amount <span>$21</span>
                                </p>
                                <p>
                                  Round Off
                                  <input
                                    type="checkbox"
                                    id="status_1"
                                    className="check"
                                  />
                                  <label
                                    htmlFor="status_1"
                                    className="checktoggle"
                                  >
                                    checkbox
                                  </label>
                                  <span>$54</span>
                                </p>
                                <div className="links-info-one">
                                  <div className="links-info"></div>
                                  {inputFields.map((data, index) => {
                                    return (
                                      <div
                                        className="links-count"
                                        key={index}
                                        onChange={(evnt) =>
                                          handleChanges(index, evnt)
                                        }
                                      >
                                        <div className="service-amount">
                                          <Link
                                            to="#"
                                            className="service-trash"
                                            onClick={removeInputFields}
                                          >
                                            <i className="fe fe-minus-circle me-1">
                                              <FeatherIcon
                                                icon="minus-circle"
                                                className="invoice-minus"
                                              />
                                            </i>
                                            Service Charges
                                          </Link>
                                          <span>$4</span>
                                        </div>
                                      </div>
                                    );
                                  })}
                                </div>
                                <Link
                                  to="#"
                                  className="add-links-one"
                                  onClick={addInputField}
                                >
                                  <i className="fas fa-plus-circle me-1" />{" "}
                                  Additional Charges
                                </Link>
                                <div className="links-info-discount">
                                  <div className="links-cont-discount">
                                    {inputFieldsNew.map((data, index) => {
                                      return (
                                        <div
                                          className="links-count"
                                          key={index}
                                          onChange={(evnt) =>
                                            handleChangesNew(index, evnt)
                                          }
                                        >
                                          <div className="service-amount">
                                            <Link
                                              to="#"
                                              className="service-trash"
                                              onClick={removeInputFieldsNew}
                                            >
                                              <i className="fe fe-minus-circle me-1">
                                                <FeatherIcon
                                                  icon="minus-circle"
                                                  className="invoice-minus"
                                                />
                                              </i>
                                              Offer New
                                            </Link>
                                            <span>$4 %</span>
                                          </div>
                                        </div>
                                      );
                                    })}
                                    <Link
                                      to="#"
                                      className="add-links-one"
                                      onClick={addInputFieldNew}
                                    >
                                      <i className="fas fa-plus-circle me-1" />{" "}
                                      Add more Discount
                                    </Link>
                                  </div>
                                </div>
                              </div>
                              <div className="invoice-total-footer">
                                <h4>
                                  Total Amount <span>$ 894.00</span>
                                </h4>
                              </div>
                            </div>
                          </div>
                          <div className="upload-sign">
                            <div className="form-group service-upload">
                              <span>Upload Sign</span>
                              <input type="file" multiple="" />
                            </div>
                            <div className="form-group">
                              <input
                                type="text"
                                className="form-control"
                                placeholder="Name of the Signatuaory"
                              />
                            </div>
                            <div className="form-group float-end mb-0">
                                <Link to={'/pharmacy/prescriptions'}>
                                <button className="btn btn-primary" type="submit">
                                Save Invoice
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
          {/* modal */}
          <InvoicePreview />
          <BankDetails />
          <SaveInvoice />
          <DeleteInvoices />
          {/* modal */}
        </div>
      </>
    </>
  );
};

export default CreateInvoice;
