import React, { useState } from "react";

const sgMail = require("@sendgrid/mail");
sgMail.setApiKey(
  "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"
);

function ContactForm() {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [formMessage, setFormMessage] = useState("");

  const message = {
    to: "ogi.bulj@netscale.agency",
    from: email,
    subject: fullName,
    html: `<p><strong> ${fullName}</strong></p>
      <p>${formMessage}</p>`,
  };

  const sendMail = () => {
    sgMail.send(message).then(() => {
      ContactForm.resetFields();
    });
  };

  return (
    <div>
      <div className="form-upit">
        <p className="p-upit">
          Ime i prezime <strong>(obavezno)</strong>
        </p>
        <input className="input-upit" required />
        <br />
        <p className="p-upit">
          Email <strong>(obavezno)</strong>
        </p>
        <input className="input-upit" type="email" required />
        <br />
        <p className="p-upit">
          Vaša poruka <strong>(obavezno)</strong>
        </p>
        <textarea className="textarea-upit" rows="10" required />
        <span className="span-btn-upit">
          <button
            className="btn btn-dark form-upit"
            onClick={() => {
              sendMail();
            }}
          >
            Pošalji upit
          </button>
        </span>
      </div>
    </div>
  );
}

export default ContactForm;
