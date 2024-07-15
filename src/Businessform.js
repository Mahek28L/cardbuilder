import react from "react";
import Businesscard from "./Businesscard";
import "./Businessform.css";
import jspdf from "jspdf";
import Img from "./image.jpg"

function Businessform() {
    let [fullname, setFullname] = react.useState("");
    let [position, setPosition] = react.useState("");
    let [companyname, setCompanyname] = react.useState("");
    let [email, setEmail] = react.useState("");
    let [phonenumber, setPhonenumber] = react.useState("");
    let [address, setAddress] = react.useState("");

    const handlefullname = (event) => {
        setFullname(event.target.value);
    };
    const handleposition = (event) => {
        setPosition(event.target.value);
    };
    const handlecompanyname = (event) => {
        setCompanyname(event.target.value);
    };
    const handleemail = (event) => {
        setEmail(event.target.value);
    };
    const handlephonenumber = (event) => {
        setPhonenumber(event.target.value);
    };
    const handleaddress = (event) => {
        setAddress(event.target.value);
    };
    const handlebutton = () => {
        console.log(fullname, position, companyname, email, phonenumber, address);
    };
    const handledownload = () => {
        let doc = new jspdf();
        doc.text(5, 5, fullname);
        doc.text(5, 15, position);
        doc.text(5, 25, companyname);
        doc.text(5, 30, email);
        doc.text(5, 35, phonenumber);
        doc.text(5, 40, address);
        // Load an image and add it to the card
        const img = new Image();
        img.src = Img;
        img.onload = function () {
            doc.addImage(img, 'JPG', 60, 40, 90, 60); // image, type, x, y, width, height

            doc.save("card.pdf");
        }
    };



    return (
        <div className="row">
            <div className="col-md-6" id="div1">
                <center>
                    {" "}
                    <h2>Business Form</h2>
                    <br></br>
                    <input
                        type="text"
                        placeholder="FULLNAME"
                        value={fullname}
                        onChange={handlefullname}
                        id="id1"
                    />
                    <br></br>
                    <br></br>
                    <input
                        type="text"
                        placeholder="POSITION"
                        value={position}
                        onChange={handleposition}
                        id="id2"
                    />
                    <br></br>
                    <br></br>
                    <input
                        type="text"
                        placeholder="COMPANY NAME"
                        value={companyname}
                        onChange={handlecompanyname}
                        id="id3"
                    />
                    <br></br>
                    <br></br>
                    <input
                        type="text"
                        placeholder="Email"
                        value={email}
                        onChange={handleemail}
                        id="id4"
                    />
                    <br></br>
                    <br></br>
                    <input
                        type="text"
                        placeholder="PHONE NUMBER"
                        value={phonenumber}
                        onChange={handlephonenumber}
                        id="id5"
                    />
                    <br></br>
                    <br></br>
                    <input
                        type="text"
                        placeholder="ADDRESS"
                        value={address}
                        onChange={handleaddress}
                        id="id6"
                    />
                    <br></br>
                    <br></br>
                    <button onClick={handlebutton} id="btn1">
                        <b>Submit</b>
                    </button>
                    <button onClick={handledownload} id="btn2">
                        <b>Download</b>
                    </button>
                </center>
            </div>

            <div className="col-md-6">
                <Businesscard fullname={fullname} position={position} email={email} phonenumber={phonenumber} address={address} companyname={companyname} />
            </div>
        </div>
    )
}
export default Businessform;