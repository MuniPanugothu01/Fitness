import axios from "axios";
import React, { useState } from "react";
import { ClipLoader } from "react-spinners";
import { toast } from "react-toastify";
import Gallery from "./Gallery";
import Footer from "./Footer";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const sendMail = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const { data } = await axios.post(
        "http://localhost:3001/send/mail",
        {
          name,
          email,
          message,
        },
        {
          withCredentials: true,
          headers: { "Content-Type": "application/json" },
        }
      );
      setName("");
      setEmail("");
      setMessage("");
      toast.success(data.message);
      setLoading(false);
    } catch (error) {
      setLoading(false);
      toast.error(error.response.data.message);
    }
  };

  return (
    <>


      <section className="contact">
        <form onSubmit={sendMail}>
          <h1 ><u style={{ color: '#0095ff',textAlign:'center' }}>CONTACT US</u></h1>
          <div>
            <label style={{ color: '#f1f1f1', fontSize: '20px' }}>Name</label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div>
            <label style={{ color: '#f1f1f1', fontSize: '20px' }}>Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div>
            <label style={{ color: '#f1f1f1', fontSize: '20px' }}>Message</label>
            <input
              type="text"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            />
          </div>
          <button
            type="submit"
            disabled={loading}
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              gap: "15px",
              borderRadius:'20px'
            }}
          >
            {loading && <ClipLoader size={20} color="#f1f1f1" />}
            Send Message
          </button>
        </form>
      </section>
      {/* <Gallery /> */}
      {/* <Footer /> */}
    </>
  );
};

export default Contact;