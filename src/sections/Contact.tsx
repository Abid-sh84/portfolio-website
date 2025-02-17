import React from 'react';


const Contact: React.FC = () => {
  const handleButtonClick = () => {
    window.location.href = 'mailto:technoabid.dev@gmail.com';


  };

  return (
    <div className="contact" id="contact">
      <h2 className="contact-title">What&apos;s Next?</h2>
      <h2 className="contact-sub-title">Get In Touch</h2>
      <p className="contact-text">
        Although I’m currently looking for any new opportunities, my inbox
        is always open. Whether you have a question or just want to say hi, I’ll
        try my best to get back to you!
      </p>
      <button className="contact-button" onClick={handleButtonClick}>
        Get in Touch
      </button>
    </div>
  );
};

export default Contact;