import React, { useState } from 'react';
import axios from 'axios';
import styles from './Form.module.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import qr from './qrIDBI.jpg'

const Form = () => {
  const [formData, setFormData] = useState({
    projectName: '',
    category: '',
    description: '',
    leaderName: '',
    leaderDepartment: '',
    leaderRollNo: '',
    leaderPhoneNo: '',
    leaderEmail: '',
    transactionID: '',
    members: [{ memberNo: 1, name: '', rollNo: '' }],
  });

  const [step, setStep] = useState(1);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false); // Track if form is submitted

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleMemberChange = (index, e) => {
    const { name, value } = e.target;
    const updatedMembers = [...formData.members];
    updatedMembers[index][name] = value;
    setFormData((prevData) => ({
      ...prevData,
      members: updatedMembers,
    }));
  };

  const addMember = () => {
    if (formData.members.length < 3) {
      setFormData((prevData) => ({
        ...prevData,
        members: [
          ...prevData.members,
          { memberNo: prevData.members.length + 1, name: '', rollNo: '' },
        ],
      }));
    }
  };

  const removeLastMember = () => {
    if (formData.members.length > 1) {
      const updatedMembers = formData.members.slice(0, -1);
      setFormData((prevData) => ({
        ...prevData,
        members: updatedMembers,
      }));
    }
  };

  const nextStep = () => {
    toast.success('Information updated!');
    setStep((prevStep) => Math.min(prevStep + 1, 4));
  };

  const prevStep = () => setStep((prevStep) => Math.max(prevStep - 1, 1));

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
  
    // Show success message immediately
    setIsSubmitted(true); // Trigger the success pop-up
  
    const filteredMembers = formData.members.filter(
      (member) => member.name && member.rollNo
    );
  
    try {
      await axios.post(
        'https://nirmaan-server.onrender.com/api/project/create',
        {
          ...formData,
          members: filteredMembers,
        }
      );
      toast.success('Data submitted successfully!');
      console.log(formData)
    } catch (error) {
      toast.error('Error submitting data.');
      console.error('Error submitting data:', error);
    } finally {
      setIsSubmitting(false);
    }
  };
  

  const renderStepContent = () => {
    switch (step) {
      case 1:
        return (
          <div className={styles.formGroup}>
            <h4 className={styles.title}>Project Info</h4>
            <input
              type="text"
              name="projectName"
              placeholder="Enter Project Name (eg. Smart Home Automation)"
              value={formData.projectName}
              onChange={handleChange}
              required
            />
            <select
              className={styles.select}
              name="category"
              value={formData.category}
              onChange={handleChange}
              required
            >
              <option value="">Select Category</option>
              <option value="Software">Software (only code / software)</option>
              <option value="Hardware">Hardware (only hardware / software+hardware)</option>
            </select>
            <textarea
              name="description"
              placeholder="Brief Project Description"
              value={formData.description}
              onChange={handleChange}
              required
            />
          </div>
        );
      case 2:
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
            <select
              className={styles.select}
              name="leaderDepartment"
              value={formData.leaderDepartment}
              onChange={handleChange}
              required
            >
              <option value="">Select Department</option>
              <option value="CSE">CSE</option>
              <option value="IT">IT</option>
              <option value="AIDS">AIDS</option>
              <option value="AIML">AIML</option>
              <option value="E&TC">E&TC</option>
              <option value="ECE">ECE</option>
              <option value="ELE">ELE</option>
              <option value="R&A">Robotics Automation</option>
              <option value="Mech">Mech</option>
              <option value="Civil">Civil</option>
            </select>
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
      case 3:
        return (
          <div className={styles.formGroup}>
            <h4>Add Members</h4>
            {formData.members.map((member, index) => (
              <div key={index} className={styles.member}>
                <input
                  type="text"
                  name="name"
                  placeholder={`Member ${index + 1} Name`}
                  value={member.name}
                  onChange={(e) => handleMemberChange(index, e)}
                />
                <input
                  type="text"
                  name="rollNo"
                  placeholder={`Member ${index + 1} Roll No`}
                  value={member.rollNo}
                  onChange={(e) => handleMemberChange(index, e)}
                />
              </div>
            ))}
            <div className={styles.memberButtons}>
              <button
                type="button"
                onClick={addMember}
                disabled={formData.members.length >= 3}
              >
                Add Member
              </button>
              <button
                type="button"
                onClick={removeLastMember}
                disabled={formData.members.length <= 1}
              >
                Remove Member
              </button>
            </div>
          </div>
        );
      case 4:
        return (
          <div className={styles.formGroup}>
            <h4>Payment Info</h4>
            <div className={styles.tcontent}>
              <div className={styles.qr}>
                <h3>Registration fee per team: 200Rs</h3>
                <img src={qr} alt="Qr code to pay the fees" />
                <p>Kindly pay the amount on the given QR or number 9326004793 and submit your transaction ID</p>
              </div>
              <div className={styles.transactionID}>
                <input
                  type="text"
                  name="transactionID"
                  placeholder="Enter Transaction ID here"
                  value={formData.transactionID}
                  onChange={handleChange}
                  required
                />
                <p className={styles.warning}>
                  <span>WARNING:</span> Any team found providing invalid or fake transaction IDs will have their team lead reported to higher authorities and the entire team will be blacklisted from all future events organized by the E&TC department.
                </p>
              </div>
            </div>
          </div>
        );
      default:
        return null;
    }
  };
  

  const ProgressBar = () => {
    const progress = (step - 1) * (100 / 4); // For 4 steps
    return (
      <div className={styles.progressContainer}>
        <div className={styles.progressBar}>
          <div
            className={styles.progressBarFill}
            style={{ width: `${progress}%` }}
          ></div>
        </div>
      </div>
    );
  };

  return (
    <>
     {isSubmitted ? (
  <div className={styles.successMessage}>
    <h4>Registration Successful!</h4>
    <p>Your project has been registered successfully. Below are the details you provided:</p>
    <div className={styles.summary}>
      <h5>Project Info:</h5>
      <p><strong>Name:</strong> {formData.projectName}</p>
      <p><strong>Category:</strong> {formData.category}</p>
      <p><strong>Description:</strong> {formData.description}</p>

      <h5>Leader Info:</h5>
      <p><strong>Name:</strong> {formData.leaderName}</p>
      <p><strong>Department:</strong> {formData.leaderDepartment}</p>
      <p><strong>Roll No:</strong> {formData.leaderRollNo}</p>
      <p><strong>Phone No:</strong> {formData.leaderPhoneNo}</p>
      <p><strong>Email:</strong> {formData.leaderEmail}</p>

      <h5>Team Members:</h5>
      {formData.members.map((member, index) => (
        <p key={index}><strong>Member {index + 1}:</strong> {member.name} ({member.rollNo})</p>
      ))}

      <h5>Payment Info:</h5>
      <p><strong>Transaction ID:</strong> {formData.transactionID}</p>
    </div>

    <button
      onClick={() => {
        window.location.href = '/';
      }}
      className={styles.homeButton}
    >
      Back to Home
    </button>
  </div>
) : (
  <form className={styles.form} onSubmit={handleSubmit}>
    {renderStepContent()}
    <div className={styles.buttons}>
      <button type="button" onClick={prevStep} disabled={step === 1}>
        Back
      </button>
      <ProgressBar />
      {step < 4 ? (
        <button type="button" onClick={nextStep}>
          Next
        </button>
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
