import "./styles.css";
import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import image2 from "../assests/image2.jpg";

function Home() {
  const navigate = useNavigate();
  const [area, setArea] = useState("");
  const [emergency, setEmergency] = useState("");
  const [items, setItems] = useState([]);
  const [isLoading, setIsLoading] = useState("");

  const onSubmit = async () => {
    try {
      setIsLoading(true);
      const result = await fetch(`/lists/${area}/${emergency}`);
      const body = await result.json();
      setItems(body.data);
    } catch (e) {
      navigate("/error");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1 className="goldenCareText">Golden Care</h1>
        <h5 className="subText">Golden care to save life</h5>
      </header>
      <div className="homeContainer">
        <div className="mainMenu">
          <div className="ddSelect">
            <select
              name="emergency"
              id="emergency"
              onChange={(e) => setEmergency(e.target.value)}
            >
              <option value="">Choose your emergency..</option>
              <option value="accident">Accident</option>
              <option value="heart-attack">Heart Attack</option>
              <option value="labour-pain">Labour Pain</option>
              <option value="burn">Burn Injuries</option>
            </select>
          </div>
          <div className="ddSelect">
            <select
              name="area"
              id="area"
              onChange={(e) => setArea(e.target.value)}
            >
              <option value="">Choose your area..</option>
              <option value="bengaluru">Bengaluru</option>
              <option value="chennai">Chennai</option>
              <option value="mumbai">Mumbai</option>
              <option value="delhi">Delhi</option>
            </select>
          </div>
          <div className="ddBtn">
            <button type="submit" onClick={onSubmit} className="hospitalbtn">
              Get help
            </button>
          </div>
        </div>
        {!isLoading && items.length > 0 && (
          <div>
            <table>
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Address</th>
                  <th>Contact</th>
                </tr>
              </thead>
              <tbody>
                {items.map((item) => {
                  return (
                    <tr>
                      <td>{item.name}</td>
                      <td>{item.address}</td>
                      <td>{item.contact}</td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        )}
      </div>
      <div className="img-container">
        <img src={image2} style={{ width: "100%" }} />
        <div className="linkText">
          <Link to={"/hospital-admin"}>
            <p>Add your hospital to Golden Care</p>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Home;
