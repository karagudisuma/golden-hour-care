import "./styles.css";
import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import image1 from "../assests/image1.jpg";
import image2 from "../assests/image2.jpg";
import image3 from "../assests/image3.jpg";

function Home() {
  const navigate = useNavigate();
  const [area, setArea] = useState("");
  const [emergency, setEmergency] = useState("");
  const [items, setItems] = useState([]);
  const [isLoading, setIsLoading] = useState("");
  let slideIndex = 1;

  function showSlides() {
    let i;
    let slides = document.getElementsByClassName("mySlides");
    if (slides && slides.length > 1) {
      for (i = 0; i < slides.length; i++) {
        slides[i].style = { display: "none" };
      }
      slideIndex++;
      if (slideIndex > slides.length) {
        slideIndex = 1;
      }
      slides[slideIndex - 1].style = { display: "block" };
      setTimeout(showSlides, 2000); // Change image every 2 seconds
    }
  }

  // Next/previous controls
  function plusSlides(n) {
    showSlides((slideIndex += n));
  }

  // Thumbnail image controls
  function currentSlide(n) {
    showSlides((slideIndex = n));
  }

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

  showSlides();
  return (
    <div className="App">
      <header className="App-header">
        <h1 className="goldenCareText">Golden Care</h1>
        <h5 className="subText">Golden hour care to save life</h5>
      </header>
      <div className="homeContainer">
        <div className="mainMenu">
          <div className="ddSelect">
            <select
              name="emergency"
              id="emergency"
              onChange={(e) => setEmergency(e.target.value)}
            >
              <option value="">Choose the emergency..</option>
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
              <option value="">Choose the area..</option>
              <option value="bengaluru">Bengaluru</option>
              <option value="chennai">Chennai</option>
              <option value="mumbai">Mumbai</option>
              <option value="delhi">Delhi</option>
            </select>
          </div>
          <div className="ddBtn">
            <button type="submit" onClick={onSubmit}>
              Get help
            </button>
          </div>
        </div>
        <div className="slideshow-container">
          <div className="mySlides fade">
            <div className="numbertext">1 / 3</div>
            <img src={image1} style={{ width: "100%" }} />
            <div className="text">Call Hospital</div>
          </div>

          <div className="mySlides fade">
            <div className="numbertext">2 / 3</div>
            <img src={image2} style={{ width: "100%" }} />
            <div className="text">Alert doctor</div>
          </div>

          <div className="mySlides fade">
            <div className="numbertext">3 / 3</div>
            <img src={image3} style={{ width: "100%" }} />
            <div className="text">Get treated</div>
          </div>

          <a className="prev" onClick={plusSlides(-1)}>
            ❮
          </a>
          <a className="next" onClick={plusSlides(1)}>
            ❯
          </a>
        </div>
        <br />

        <div style={{ textAlign: "center" }}>
          <span className="dot" onClick={currentSlide(1)}></span>
          <span className="dot" onClick={currentSlide(2)}></span>
          <span className="dot" onClick={currentSlide(3)}></span>
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
        <div>
          <Link to={"/hospital-admin"}>Add info</Link>
        </div>
      </div>
    </div>
  );
}

export default Home;
