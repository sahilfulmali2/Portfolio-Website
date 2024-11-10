import React, { useState } from "react";
import emailjs from "emailjs-com";
import "./ContactForm.css";

function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [error, setError] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      setError("Please fill all fields.");
      return;
    }
    setError("");
    emailjs
      .send(
        "service_2ibx1yi",
        "__ejs-test-mail-service__",
        formData,
        "Sahil Portfolio D"
      )
      .then(() => {
        alert("Message sent successfully!");
        setFormData({ name: "", email: "", message: "" });
      })
      .catch(() => alert("Failed to send message."));
  };

  return (
    <div className="contact-container" id="contact">
      <div className="d_element">
        <img src="/assets/Home_Page_1_photo.png" alt="Image" />
      </div>
      <form onSubmit={handleSubmit} className="contact-form">
        <h1>Connect With Me!!</h1>
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          value={formData.name}
          onChange={handleChange}
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Your Email"
          value={formData.email}
          onChange={handleChange}
          required
        />
        <textarea
          name="message"
          placeholder="Your Message"
          value={formData.message}
          onChange={handleChange}
          required
        />
        {error && <p className="error">{error}</p>}
        <button type="submit">Send</button>
      </form>
    </div>
  );
}

export default ContactForm;
