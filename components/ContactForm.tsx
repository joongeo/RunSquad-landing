import React, { useState } from 'react';
import axios from 'axios';

// eslint-disable-next-line import/no-anonymous-default-export
const ContactForm = () => {
  const [status, setStatus] = useState({
    submitted: false,
    submitting: false,
    info: { error: false, msg: null },
  });
  const [inputs, setInputs] = useState({
    email: '',
    message: '',
  });
  const handleServerResponse = (ok, msg) => {
    if (ok) {
      setStatus({
        submitted: true,
        submitting: false,
        info: { error: false, msg: msg },
      });
      setInputs({
        email: '',
        message: '',
      });
      // setInputs({
      //   email: ''
      // });
    } else {
      setStatus({
        info: { error: true, msg: msg },
      });
    }
  };
  const handleOnChange = (e) => {
    e.persist();
    setInputs((prev) => ({
      ...prev,
      [e.target.id]: e.target.value,
    }));
    setStatus({
      submitted: false,
      submitting: false,
      info: { error: false, msg: null },
    });
  };
  const handleOnSubmit = (e) => {
    e.preventDefault();
    setStatus((prevStatus) => ({ ...prevStatus, submitting: true }));
    axios({
      method: 'POST',
      url: 'https://formspree.io/f/mdorjdpz',
      data: inputs,
    })
      .then(() => {
        handleServerResponse(
          true,
          'Thank you, your email has been submitted.',
        );
      })
      .catch((error) => {
        handleServerResponse(false, error.response.data.error);
      });
  };
  return (
    <main>
      <hr />
      <form onSubmit={handleOnSubmit} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        {/* <label htmlFor="email">Email</label> */}
        <div style={{ display: 'flex', width: '100%' }}>
          {/* <input
            id="email"
            type="email"
            name="_replyto"
            onChange={handleOnChange}
            required
            value={inputs.email}
            style={{
              flex: 1,
              padding: '10px',
              margin: '5px 0',
              boxSizing: 'border-box',
              border: '1px solid #ccc',
              borderRadius: '4px',
              backgroundColor: 'white' // White background for the email input
            }}
          /> */}
          <input
            id="email"
            type="email"
            name="_replyto"
            onChange={handleOnChange}
            required
            value={inputs.email}
            placeholder="Email"
            style={{
              flex: 1,
              padding: '10px',
              margin: '5px 0',
              boxSizing: 'border-box',
              border: '1px solid #ccc',
              borderRadius: '4px',
              backgroundColor: 'white',
              color: 'black', // Black text color for user input
            }}
          />
          <button
            type="submit"
            disabled={status.submitting}
            style={{
              width: '100px', // Adjust width and height as per your requirement
              height: '40px',
              backgroundColor: '#ccc', // Grey background color for the button
              color: 'white', // Text color
              border: 'none',
              borderRadius: '4px',
              margin: '5px 0 5px 10px', // Margin to separate the button from the input
              cursor: 'pointer',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center'
            }}
          >
            <span style={{ display: 'block' }}>
              {!status.submitting ? (!status.submitted ? 'Sign Up' : 'Submitted') : 'Submitting...'}
            </span>
          </button>
        </div>
      </form>
      {status.info.error && (
        <div className="error">Error: {status.info.msg}</div>
      )}
      {!status.info.error && status.info.msg && <p>{status.info.msg}</p>}
    </main>
  );
};
export default ContactForm;