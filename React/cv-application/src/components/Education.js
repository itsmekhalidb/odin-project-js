import { useState } from "react";

function Education() {
    const [editingEdu, setEditingEdu] = useState(true);
    const [schoolValue, setSchoolValue] = useState("");
    const [titleValue, setTitleValue] = useState("");
    const [dateValue, setDateValue] = useState("");
  
    const [tempSchool, setTempSchool] = useState("");
    const [tempTitle, setTempTitle] = useState("");
    const [tempDate, setTempDate] = useState("");
  
    const handleSave = () => {
      if (tempSchool !== "") {
        setSchoolValue(tempSchool);
      }
      if (tempTitle !== "") {
        setTitleValue(tempTitle);
      }
      if (tempDate !== "") {
        setDateValue(tempDate);
      }
      setEditingEdu(false);
    };
    return (
      <div className="education">
        {editingEdu ? // fields to input values
          <div>
            <input
              className="school_field"
              placeholder="School Name"
              onChange={(e) => setTempSchool(e.target.value)}
              required>
            </input><br />
            <input
              className="title_field"
              placeholder="Title of Study"
              onChange={(e) => setTempTitle(e.target.value)}
              required>
            </input><br />
            <input
              className="date_field"
              placeholder="Graduation Date"
              type="date"
              onChange={(e) => setTempDate(e.target.value)}
              required>
            </input><br />
          </div>
          : // headers to display values
          <div>
            <p>Graduated with {titleValue} from {schoolValue} on {dateValue}</p>
          </div>
        }
  
        <button // submit/edit button
          className="edu_edit"
          onClick={() => {
            if (editingEdu) {
              handleSave();
            } else {
              setEditingEdu(true);
            }
          }}
        >
          {editingEdu ? "Save" : "Edit"}
        </button>
      </div>
    )
  }

export default Education;