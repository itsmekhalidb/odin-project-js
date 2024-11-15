import { useState } from "react";

function Experience() {
    const [editingExp, setEditingExp] = useState(true);
    const [nameValue, setNameValue] = useState("");
    const [titleValue, setTitleValue] = useState("");
    const [respValue, setRespValue] = useState("");
    const [startValue, setStartValue] = useState("");
    const [endValue, setEndValue] = useState("");

    const [tempName, setTempName] = useState("");
    const [tempTitle, setTempTitle] = useState("");
    const [tempResp, setTempResp] = useState("");
    const [tempStart, setTempStart] = useState("");
    const [tempEnd, setTempEnd] = useState("");

    const handleSave = () => {
        if (tempName !== "") {
            setNameValue(tempName);
        }
        if (tempTitle !== "") {
            setTitleValue(tempTitle);
        }
        if (tempResp !== "") {
            setRespValue(tempResp);
        }
        if (tempStart !== "") {
            setStartValue(tempStart);
        }
        if (tempEnd !== "") {
            setEndValue(tempEnd);
        }
        setEditingExp(false);
    };
    return (
        <div className="experience">
            {editingExp ? // fields to input values
                <div>
                    <input
                        className="comp_name_field"
                        placeholder="Company Name"
                        onChange={(e) => setTempName(e.target.value)}
                        required>
                    </input><br />
                    <input
                        className="title_job_field"
                        placeholder="Job Title"
                        onChange={(e) => setTempTitle(e.target.value)}
                        required>
                    </input><br />
                    <textarea
                        className="responsibilities_field"
                        placeholder="Responsibilities"
                        rows='5'
                        cols='30'
                        onChange={(e) => setTempResp(e.target.value)}
                        required>
                    </textarea><br />
                    <p>Start Date: </p>
                    <input
                        className="start_field"
                        placeholder="Start Date"
                        type="date"
                        onChange={(e) => setTempStart(e.target.value)}
                        required>
                    </input><br />
                    <p>End Date: </p>
                    <input
                        className="end_field"
                        placeholder="End Date"
                        type="date"
                        onChange={(e) => setTempEnd(e.target.value)}
                        required>
                    </input><br />
                </div>
                : // headers to display values
                <div>
                    <p>Worked at {nameValue} from {startValue} to {endValue} as {titleValue}.</p>
                    <p>Responsibilities:</p>
                    <p>{respValue}</p>
                </div>
            }

            <button // submit/edit button
                className="exp_edit"
                onClick={() => {
                    if (editingExp) {
                        handleSave();
                    } else {
                        setEditingExp(true);
                    }
                }}
            >
                {editingExp ? "Save" : "Edit"}
            </button>
        </div>
    )
}

export default Experience;