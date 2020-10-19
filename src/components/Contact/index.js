import React, { useState } from "react";
import ContactForm from "./../ContactForm";
import "./styles.scss";

function Contact(props) {
  const [status, setStatus] = useState();

  const onSubmit = ({ name, email, message }) => {
    setStatus({ type: "pending" });
    // Replace timeout with actual API call
    setTimeout(() => {
      setStatus({
        type: "success",
        message: "Your message has been sent! We'll get back to you soon."
      });
    }, 500);
  };
  return (
    <ContactForm
      parentColor={props.parentColor}
      showNameField={props.showNameField}
      buttonText={props.buttonText}
      onSubmit={onSubmit}
      status={status}
    />
  );
}

export default Contact;
