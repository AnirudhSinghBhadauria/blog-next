import React, { useEffect, useRef, useState } from "react";
import Notification from "components/ui/Notification";
import classes from "./contact-form.module.css";

const sendContactData = async (contactDetails) => {
  const response = await fetch("/api/contact", {
    method: "POST",
    body: JSON.stringify(contactDetails),
    headers: { "Content-Type": "application/json" },
  });

  const data = response.json();

  if (!response.ok) {
    throw new Error(data.message || "Something went wrong!");
  }
};

const ContectForm = () => {
  const [reqStatus, setReqStatus] = useState();
  const [error, setError] = useState();

  const emailRef = useRef();
  const nameRef = useRef();
  const messageRef = useRef();

  useEffect(() => {
    if (reqStatus === "success" || reqStatus === "error") {
      const timer = setTimeout(() => {
        setReqStatus(null);
        setError(null);
      }, 3000);

      return () => clearTimeout(timer);
    }
  }, [reqStatus]);

  const sendMessageHandeler = async (event) => {
    event.preventDefault();

    setReqStatus("pending");

    try {
      await sendContactData({
        email: emailRef.current.value,
        message: nameRef.current.value,
        name: messageRef.current.value,
      });

      setReqStatus("success");
      emailRef.current.value === "";
      nameRef.current.value === "";
      messageRef.current.value === "";
      
    } catch (error) {
      setError(error.message);
      setReqStatus("error");
    }
  };

  let notification;

  if (reqStatus === "pending") {
    notification = {
      status: "pending",
      title: "Sending Message...",
      message: "Your message is on its Way!",
    };
  }
  if (reqStatus === "success") {
    notification = {
      status: "success",
      title: "Success!",
      message: "Message Sent Succesfully!",
    };
  }
  if (reqStatus === "error") {
    notification = {
      status: "error",
      title: "Error!",
      message: error,
    };
  }

  return (
    <section className={classes.contact}>
      <h1>How can I help you?</h1>
      <form onSubmit={sendMessageHandeler} className={classes.form}>
        <div className={classes.controls}>
          <div className={classes.control}>
            <label htmlFor="email">Your Email</label>
            <input ref={emailRef} type="email" id="email" />
          </div>
          <div className={classes.control}>
            <label htmlFor="name">Your Name</label>
            <input ref={nameRef} type="text" id="name" />
          </div>
          <div className={classes.control}>
            <label htmlFor="message">Your Message</label>
            <textarea ref={messageRef} id="message" rows="5"></textarea>
          </div>
        </div>
        <div className={classes.actions}>
          <button>Send Message</button>
        </div>
      </form>

      {notification && (
        <Notification
          message={notification.message}
          title={notification.title}
          status={notification.status}
        />
      )}
    </section>
  );
};

export default ContectForm;
