import React, { useState } from "react";
import {
  Button,
  Form,
  Container,
  Row,
  Col,
  Card,
  Badge,
  InputGroup,
  Dropdown,
  DropdownButton,
  ButtonGroup,
  CloseButton,
} from "react-bootstrap";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css"; 
import { useLocation, useNavigate } from "react-router-dom";

const OTEditor = () => {
    const location = useLocation();
    const record = location.state;
    const navigate =useNavigate();
    console.log("🚀 ~ OTEditor ~ record:", record)
    
    const [patientInfo, setPatientInfo] = useState({
    id: record.uhid || "",
    name: record.patientName || "",
    age: record.ageGender || "",
    contact: record.mobileNo || "",
    dob: "", // No DOB in record, keep empty or fetch separately
    referredBy: "", // No referrer in record, keep empty or fetch separately
    });

    // Ward information
    const [wardInfo, setWardInfo] = useState({
    wardBedNo: record.otName || "",
    ipdNo: record.operationNo || "",
    doa: record.operationDate || "",
    stayDuration: record.duration || "",
    });

    // Operation information
    const [operationInfo, setOperationInfo] = useState({
    name: record.operationName || "",
    date: record.operationDate || "",
    doctor: record.involvedDr || "",
    status: record.status || "",
    });

    // Editor sections
    const [sections, setSections] = useState(
    [
        {
        id: "position",
        title: "Operative Steps",
        searchPlaceholder: "Search Position",
        content: "",
        tags: ["Surgical Steps", "Procedure", "Step-by-Step"],
        },
        {
        id: "incision",
        title: "Incision",
        searchPlaceholder: "Search Incision",
        content: "",
        tags: ["Surgical Cut", "Incision Type", "Skin Opening"],
        },
        {
        id: "notes",
        title: "Operative Notes",
        searchPlaceholder: "Search Operative Notes",
        content: "",
        tags: ["Surgical Summary", "Procedure Notes", "Operation Details"],
        },
        {
        id: "drain",
        title: "Drain",
        searchPlaceholder: "Search Drain",
        content: "",
        tags: ["Fluid Drainage", "Post-Op Management", "Drain Types"],
        },
        {
        id: "Closure",
        title: "Closure",
        searchPlaceholder: "Search Closure",
        content: "",
        tags: ["Wound Closure", "Sutures", "Staples"],
        },
        {
        id: "events-complications",
        title: "Intra Operative Events / Complications",
        searchPlaceholder: "Search Complications",
        content: "",
        tags: ["Surgical Risks", "Unexpected Events", "Complication Management"],
        },
        {
        id: "Sponge Count",
        title: "Sponge Count",
        searchPlaceholder: "Search Sponge Count",
        content: "",
        tags: ["Surgical Safety", "Instrument Tracking", "Preventing Retention"],
        },
        {
        id: "Blood Loss",
        title: "Blood Loss",
        searchPlaceholder: "Search Blood Loss",
        content: "",
        tags: ["Hemorrhage", "Estimated Blood Loss", "Bleeding Control"],
        },
        {
        id: "Blood & Blood Products",
        title: "Blood & Blood Products",
        searchPlaceholder: "Search Blood & Blood Products",
        content: "",
        tags: ["Transfusion", "Plasma", "Red Blood Cells"],
        },
        {
        id: "Immediate Post-Operative Recovery",
        title: "Immediate Post-Operative Recovery",
        searchPlaceholder: "Search Immediate Post-Operative Recovery",
        content: "",
        tags: ["PACU", "Recovery Monitoring", "Post-Surgery Care"],
        },
        {
        id: "Post-Operative Orders",
        title: "Post-Operative Orders",
        searchPlaceholder: "Search Post-Operative Orders",
        content: "",
        tags: ["Medications", "Wound Care", "Follow-Up Instructions"],
        },
    ].map((section) => ({
        ...section,
        selectedTag: section.tags[0], // Default to the first tag
    }))
    );

const handleTagSelect = (sectionId, tag) => {
  setSections((prevSections) =>
    prevSections.map((section) =>
      section.id === sectionId ? { ...section, selectedTag: tag } : section
    )
  );
};

  // Function to update section content
  const updateSectionContent = (id, content) => {
    setSections(
      sections.map((section) =>
        section.id === id ? { ...section, content } : section
      )
    );
  };

  // Function to add a tag to a section
  const addTag = (sectionId, tag) => {
    if (tag.trim() === "") return;

    setSections(
      sections.map((section) =>
        section.id === sectionId
          ? {
              ...section,
              tags: [...section.tags.filter((t) => t !== tag), tag],
            }
          : section
      )
    );
  };

  // Function to remove a tag from a section
  const removeTag = (sectionId, tag) => {
    setSections(
      sections.map((section) =>
        section.id === sectionId
          ? { ...section, tags: section.tags.filter((t) => t !== tag) }
          : section
      )
    );
  };

  // Function to clear a section
  const clearSection = (sectionId) => {
    setSections(
      sections.map((section) =>
        section.id === sectionId
          ? { ...section, content: "", tags: [] }
          : section
      )
    );
  };

  return (
    <Container fluid className="p-3">
      <Card className="mb-4">
        <Card.Header className="d-flex justify-content-between align-items-center bg-light">
          <h4 className="mb-0">Operative Notes</h4>
          <div>
            <Button variant="outline-primary" className="me-2">
              Template
            </Button>
            <Button variant="primary" className="me-2">
              Save
            </Button>
            <Button variant="secondary" className="me-2">
              Print
            </Button>
            <Button variant="info" className="me-2">
              Preview
            </Button>
            <CloseButton onClick={() => navigate(-1)} />
          </div>
        </Card.Header>

        <Card.Body>
          <Row className="mb-3">
            <Col md={4}>
              <div className="d-flex align-items-center mb-2">
                <div
                  className="bg-danger text-white rounded-circle d-flex align-items-center justify-content-center me-2"
                  style={{ width: "50px", height: "50px", fontSize: "24px" }}
                >
                  {patientInfo.name.charAt(0)}
                </div>
                <div>
                  <div>
                    <strong>
                      ({patientInfo.id}) {patientInfo.name}
                    </strong>{" "}
                    ({patientInfo.age})
                  </div>
                  <div>{patientInfo.contact}</div>
                </div>
              </div>
              <div></div>
            </Col>

            <Col md={4}>
              <div>
                <strong>WARD / BED NO:</strong> {wardInfo.wardBedNo}
              </div>
              <div>
                <strong>IPD NO:</strong> {wardInfo.ipdNo}
              </div>
              <div>
                <strong>DOA:</strong> {wardInfo.doa} - {wardInfo.stayDuration}
              </div>
            </Col>

            <Col md={4}>
              <div>
                <strong>OPERATION:</strong> {operationInfo.name}
              </div>
              <div>
                <strong>DATE OF OPERATION:</strong> {operationInfo.date}
              </div>
              <div>
                <strong>INVOLVED DR:</strong> {operationInfo.doctor}
              </div>
              <div>
                <strong>OPERATION STATUS:</strong>{" "}
                <Badge bg="warning">{operationInfo.status.toUpperCase()}</Badge>
              </div>
            </Col>
          </Row>

          {/* Editor Sections */}
          {sections.map((section) => (
            <div key={section.id} className="mb-4">
              <div className="d-flex justify-content-between align-items-center mb-2">
                <Col className="col-3">
                  <h4 className="fw-bold">{section.title}</h4>
                </Col>
                <Col className="col-9 d-flex align-items-center justify-content-between">
                  <div className="d-flex align-items-center">
                    {section.tags.map((tag, index) => (
                      <Badge
                        key={index}
                        bg={section.selectedTag === tag ? "primary" : "light"} // Change color when selected
                        text={section.selectedTag === tag ? "white" : "dark"}
                        className="me-2 p-2 border"
                        style={{ cursor: "pointer" }}
                        onClick={() => handleTagSelect(section.id, tag)}
                      >
                        {tag}
                      </Badge>
                    ))}
                  </div>
                  <Button
                    variant="link"
                    size="sm"
                    className="text-danger"
                    onClick={() => clearSection(section.id)}
                  >
                    Clear
                  </Button>
                </Col>
              </div>

              <Row>
                <Col>
                  <ReactQuill
                    theme="snow"
                    value={section.content}
                    onChange={(content) =>
                      updateSectionContent(section.id, content)
                    }
                    style={{
                      height: "150px",
                      padding: "20px",
                      marginBottom: "1rem",
                    }}
                  />
                </Col>
              </Row>
            </div>
          ))}
        </Card.Body>
      </Card>
    </Container>
  );
};

export default OTEditor;
