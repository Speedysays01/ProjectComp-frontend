import React, { useState } from 'react';
import axios from 'axios';
import styles from './Form.module.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import qr from './qrIDBI.jpg';

const Form = () => {
  const [formData, setFormData] = useState({
    leaderName: '',
    leaderYear: '',
    leaderRollNo: '',
    leaderPhoneNo: '',
    leaderEmail: '',
    category: '',
    member1: '',
    member2: '',
    member3: ''
  });

  const [step, setStep] = useState(1);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isPopupOpen, setIsPopupOpen] = useState(false); // Popup state

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const nextStep = () => {
    toast.success('Information updated!');
    setStep((prevStep) => Math.min(prevStep + 1, 3));
  };

  const prevStep = () => setStep((prevStep) => Math.max(prevStep - 1, 1));

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(formData);
    setIsSubmitting(true);
    setIsPopupOpen(true); // Show popup while submitting

    try {
      await axios.post('https://nirmaan-server.onrender.com/api/project/create', { ...formData });
      toast.success('Data submitted successfully!');
      setIsSubmitted(true);
    } catch (error) {
      toast.error('Error submitting data.');
      console.error('Error submitting data:', error);
    } finally {
      setIsSubmitting(false);
      setIsPopupOpen(false); // Hide popup after submission
    }
  };

  const renderStepContent = () => {
    switch (step) {
      case 1:
        return (
          <div className={styles.formGroup}>
            <h4>Leader Info</h4>
            <input
              type="text"
              name="leaderName"
              placeholder="Leader Name"
              value={formData.leaderName}
              onChange={handleChange}
              required
            />
            <input
              type="text"
              name="leaderRollNo"
              placeholder="Leader Roll No (eg. T312004)"
              value={formData.leaderRollNo}
              onChange={handleChange}
              required
            />
            <input
              type="tel"
              name="leaderPhoneNo"
              placeholder="Leader Phone No (eg. 0123456789)"
              value={formData.leaderPhoneNo}
              onChange={handleChange}
              required
            />
            {formData.leaderPhoneNo && !/^\d{10}$/.test(formData.leaderPhoneNo) && (
              <p className={styles.error}>Please enter a valid 10-digit phone number.</p>
            )}
            <input
              type="email"
              name="leaderEmail"
              placeholder="Leader Email (you will receive project updates here)"
              value={formData.leaderEmail}
              onChange={handleChange}
              required
            />
            {formData.leaderEmail && !/\S+@\S+\.\S+/.test(formData.leaderEmail) && (
              <p className={styles.error}>Please enter a valid email address.</p>
            )}
          </div>
        );

      case 2:
        return (
          <div className={styles.formGroup}>
            <h4>Add Members</h4>
            <input type="text" name="member1" placeholder="Member 1" value={formData.member1} onChange={handleChange} />
            <input type="text" name="member2" placeholder="Member 2" value={formData.member2} onChange={handleChange} />
            <input type="text" name="member3" placeholder="Member 3" value={formData.member3} onChange={handleChange} />
          </div>
        );

        case 3:
          return (
            <div className={styles.formGroup}>
              <h4>Leader Year</h4>
              <select
                className={styles.select}
                name="leaderYear"
                value={formData.leaderYear}
                onChange={handleChange}
                required
              >
                <option value="">Select Year</option>
                <option value="SE">SE</option>
                <option value="TE">TE</option>
              </select>
        
              <h4>Project Category</h4>
              <select
                className={styles.select}
                name="category"
                value={formData.category}
                onChange={handleChange}
                required
              >
                <option value="">Select Project category</option>
                <option value="software">Software (only code)</option>
                <option value="hardware">Hardware (Software + hardware or only hardware)</option>
              </select>
            </div>
          );
        
        

      default:
        return null;
    }
  };

  return (
    <>
      {isPopupOpen && (
        <div className={styles.popupOverlay}>
          <div className={styles.popupContent}>
            <h3>Processing Registration</h3>
            <p>Please wait while we confirm your registration...</p>
            <div className={styles.loader}></div>
          </div>
        </div>
      )}

      {isSubmitted ? (
        <div className={styles.successMessage}>
          <h4>Registration Successful!</h4>
          <p>Your registration has been successfully completed.</p>
          <button onClick={() => window.location.href = '/'} className={styles.homeButton}>
            Back to Home
          </button>
        </div>
      ) : (
        <form className={styles.form} onSubmit={handleSubmit}>
          {renderStepContent()}
          <div className={styles.buttons}>
            <button type="button" onClick={prevStep} disabled={step === 1}>Back</button>
            {step < 3 ? (
              <button type="button" onClick={nextStep}>Next</button>
            ) : (
              <button type="submit" disabled={isSubmitting}>
                {isSubmitting ? 'Submitting...' : 'Submit'}
              </button>
            )}
          </div>
        </form>
      )}

      <ToastContainer />
    </>
  );
};

export default Form;
