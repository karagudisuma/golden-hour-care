import express from "express";
import bodyParser from "body-parser";
let app = express();

const port = 5000;

const hospitalData = [
  {
    name: "Venkal Hospital",
    address: "#123, 5th Main road, R.R. Nagar, Bengaluru",
    contact: "080 789069",
    city: "bengaluru",
    emergency: "accident",
  },
  {
    name: "D. G. Hospital",
    address: "#256, P.R Road, J. J Nagar, Bengaluru",
    contact: "980789069",
    city: "chennai",
    emergency: "accident",
  },
  {
    name: "Maharaj Hospital",
    address: "#1234, 9th Block, Jayanagar",
    contact: "2389069",
    city: "mumbai",
    emergency: "accident",
  },
  {
    name: "Pristine Care",
    address: "No 102, 15th Cross, 4th Main Road, City Center",
    contact: "2389069",
    city: "delhi",
    emergency: "accident",
  },
  {
    name: "Gopal Heart Center",
    address: "#89, 1st Main Road, Sharda Colony, KHB Colony",
    contact: "907823456",
    city: "delhi",
    emergency: "heart-attack",
  },
  {
    name: "Santosh Hospital",
    address: "741, 1st Floor, AECS Layout, Whitefield",
    contact: "080 2523456",
    city: "bengaluru",
    emergency: "heart-attack",
  },
  {
    name: "Vasavi Hospital",
    address: "Amman Koil Street, T Nagar",
    contact: "0982520006",
    city: "chennai",
    emergency: "heart-attack",
  },
  {
    name: "St Isabel Hospital",
    address: "Oliver Road, P Nagar",
    contact: "976567889",
    city: "mumbai",
    emergency: "heart-attack",
  },
  {
    name: "Agada Hospital",
    address: "Dr Nair Road, Avadi",
    contact: "044 2655890",
    city: "delhi",
    emergency: "labour-pain",
  },
  {
    name: "AG Hospital",
    address: "Near Vidya Theater, Kakkan street, Teez Hazari",
    contact: "011 2415456",
    city: "mumbai",
    emergency: "labour-pain",
  },
  {
    name: "Max Hospital",
    address: "Outer Ring Rd,  Sector 14, T. R. Nagar",
    contact: "080 6124567",
    city: "bengaluru",
    emergency: "labour-pain",
  },
  {
    name: "Aashlok Hospital",
    address: "Naresh Park,Near Water Tank, Chennai",
    contact: "9804567899",
    city: "chennai",
    emergency: "labour-pain",
  },
  {
    name: "Kaira Hospital",
    address:
      "Bhagawan Mahavir Marg, Near Madhuban Chowk, Block A, Rohini Nagar",
    contact: "01145005700",
    city: "mumbai",
    emergency: "burn",
  },
  {
    name: "St Stephan's Hospital",
    address: "Rajendra Nagar, Delhi",
    contact: "011 2523456",
    city: "delhi",
    emergency: "burn",
  },
  {
    name: "Shanti Hospital",
    address: "#3419, Mugalivakkam Main Rd, Kumudam Nagar",
    contact: "080 2523456",
    city: "chennai",
    emergency: "burn",
  },
  {
    name: "Santosh Hospital and Reasearch Center",
    address: "175, Big Street, Outer Ring Road",
    contact: "080 68899023",
    city: "bengaluru",
    emergency: "burn",
  },
  {
    name: "Sen Hospital",
    address: "#51, Old 18, Kakkan St, near Vidya Theater, Tambaram West.",
    contact: "044 28243456",
    city: "chennai",
    emergency: "burn",
  },
  {
    name: "Ayush Hospital",
    address: "91-A, Millers Rd",
    contact: "923457888",
    city: "mumbai",
    emergency: "accident",
  },
  {
    name: "Family Welfare Hospital",
    address: "Chandragupta Marg, Chanakyapuri, New Delhi, Delhi 110021",
    contact: "011 26723456",
    city: "delhi",
    emergency: "accident",
  },
  {
    name: "Giridhar Hosiptal",
    address: "K B Das Road, Sadashivnagar, Bengaluru",
    contact: "080 4567456",
    city: "bengaluru",
    emergency: "heart-attack",
  },
];

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get("/lists/:area/:emergency", function (req, res) {
  const area = req.params.area;
  const emergency = req.params.emergency;
  const result = hospitalData.filter(
    (object) => object.city === area && object.emergency === emergency
  );
  res.send({
    data: result,
  });
});

app.post("/postData", function (req, res) {
  const { name, address, contact, city, emergency } = req.body;
  if (name && address && contact && city && emergency) {
    hospitalData.push({
      name,
      address,
      contact,
      city,
      emergency,
    });
    res.end("Success");
  } else {
    res.end("Error");
  }
});
app.listen(port, () => console.log("Example app listening on port 5000!"));
