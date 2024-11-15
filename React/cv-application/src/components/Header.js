import { useState } from "react";

function Header() {
    const [editingHeader, setEditingHeader] = useState(true);
    const [nameValue, setNameValue] = useState("");
    const [emailValue, setEmailValue] = useState("");
    const [phoneValue, setPhoneValue] = useState("");

    const [tempName, setTempName] = useState("");
    const [tempEmail, setTempEmail] = useState("");
    const [tempPhone, setTempPhone] = useState("");

    const handleSave = () => {
        if (tempName !== "") {
            setNameValue(tempName);
        }
        if (tempEmail !== "") {
            setEmailValue(tempEmail);
        }
        if (tempPhone !== "") {
            setPhoneValue(tempPhone);
        }
        setEditingHeader(false);
    };
    return (
        <div className="header">
            {editingHeader ? // fields to input values
                <div>
                    <input
                        className="name_field"
                        placeholder="Name"
                        onChange={(e) => setTempName(e.target.value)}
                        required>
                    </input><br />
                    <input
                        className="email_field"
                        placeholder="Email"
                        type="email"
                        onChange={(e) => setTempEmail(e.target.value)}
                        required>
                    </input><br />
                    <input
                        className="phone_field"
                        placeholder="Phone Number"
                        type="tel"
                        onChange={(e) => setTempPhone(e.target.value)}
                        required>
                    </input><br />
                </div>
                : // headers to display values
                <div>
                    <h1 className="name_header">{nameValue}</h1><br />
                    <h3 className="email_header">{emailValue}</h3><br />
                    <h3 className="phone_header">{phoneValue}</h3><br />
                </div>
            }

            <button // submit/edit button
                className="header_edit"
                onClick={() => {
                    if (editingHeader) {
                        handleSave();
                    } else {
                        setEditingHeader(true);
                    }
                }}
            >
                {editingHeader ? "Save" : "Edit"}
            </button>
        </div>
    )
}

export default Header;