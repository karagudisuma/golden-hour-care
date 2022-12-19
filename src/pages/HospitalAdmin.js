import "../App.css";
import "./styles.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function HospitalAdmin() {
  const navigate = useNavigate();
  const [data, setData] = useState({
    name: "",
    address: "",
    contact: "",
    city: "",
    emergency: "",
  });

  const saveData = async () => {
    const { name, address, contact, city, emergency } = data;
    if (
      name == "" ||
      address == "" ||
      contact == "" ||
      city == "" ||
      emergency == ""
    ) {
      alert("Please enter all fields");
      return;
    } else {
      await fetch("/postData", {
        method: "POST",
        body: JSON.stringify({ ...data }),
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      }).then((data) => {
        if (data.statusText == "OK") {
          alert("Hospital data successfully added!!");
          navigate("/");
        } else {
          alert("Network error and data could not be stored.");
        }
      });
    }
  };
  return (
    <div>
      <h5 className="subText">Hospital Admin page</h5>
      <div className="container">
        <div className="hospitalDiv">
          <label htmlFor="name" className="hospitalLabel">
            Hospital name:
          </label>
          <input
            type="text"
            id="name"
            value={data.name}
            placeholder="Hospital Name"
            className="hospitalInput"
            onChange={(e) => setData({ ...data, name: e.target.value })}
          />
        </div>
        <br />
        <div className="hospitalDiv">
          <label htmlFor="address" className="hospitalLabel">
            Address
          </label>
          <textarea
            id="address"
            rows="4"
            cols="50"
            placeholder="Address"
            className="hospitalTextarea"
            onChange={(e) => setData({ ...data, address: e.target.value })}
            value={data.address}
          ></textarea>
        </div>
        <div className="hospitalDiv">
          <label htmlFor="contact" className="hospitalLabel">
            Contact
          </label>
          <input
            type="text"
            id="contact"
            name="contact"
            value={data.contact}
            placeholder="Phone number"
            className="hospitalInput"
            onChange={(e) => setData({ ...data, contact: e.target.value })}
          />
        </div>
        <div className="hospitalDiv">
          <label htmlFor="city" className="hospitalLabel">
            City
          </label>
          <input
            type="text"
            id="city"
            name="city"
            value={data.city}
            placeholder="City"
            className="hospitalInput"
            onChange={(e) => setData({ ...data, city: e.target.value })}
          />
        </div>
        <div className="hospitalDiv">
          <label htmlFor="emergency" className="hospitalLabel">
            Emergency
          </label>
          <div className="ddSelect">
            <select
              name="emergency"
              id="emergency"
              onChange={(e) => setData({ ...data, emergency: e.target.value })}
            >
              <option value="">Choose the emergency..</option>
              <option value="accident">Accident</option>
              <option value="heart-attack">Heart Attack</option>
              <option value="labour-pain">Labour Pain</option>
              <option value="burn">Burn Injuries</option>
            </select>
          </div>
        </div>
        <br />
        <br />
      </div>
      <div className="hospitalFooter">
        <button
          type="submit"
          value="Submit"
          onClick={saveData}
          className="hospitalbtn"
        >
          Save
        </button>
      </div>
    </div>
  );
}

export default HospitalAdmin;
