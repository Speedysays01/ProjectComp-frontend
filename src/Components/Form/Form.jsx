import React, { useState } from "react";
import axios from "axios";
import styles from "./Form.module.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Form = () => {
  const [formData, setFormData] = useState({
    projectName: "",
    category: "",
    description: "",
    leaderName: "",
    leaderDepartment: "",
    leaderRollNo: "",
    leaderPhoneNo: "",
    leaderEmail: "",
    transactionID: "",
    members: [{ memberNo: 1, name: "", rollNo: "" }],
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
          { memberNo: prevData.members.length + 1, name: "", rollNo: "" },
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
    toast.success("Information updated!");
    setStep((prevStep) => Math.min(prevStep + 1, 4));
  };

  const prevStep = () => setStep((prevStep) => Math.max(prevStep - 1, 1));

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    const filteredMembers = formData.members.filter(
      (member) => member.name && member.rollNo
    );

    try {
      await axios.post(
        "https://nirmaan-server.onrender.com/api/project/create",
        {
          ...formData,
          members: filteredMembers,
        }
      );
      toast.success("Data submitted successfully!");
      setIsSubmitted(true); // Mark form as submitted
    } catch (error) {
      toast.error("Error submitting data.");
      console.error("Error submitting data:", error);
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
              placeholder="Project Name"
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
              <option value="Software">Software</option>
              <option value="Hardware">Hardware</option>
            </select>
            <textarea
              name="description"
              placeholder="Description"
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
              <option value="ETC">ETC</option>
              <option value="ECE">ECE</option>
              <option value="Electrical">Electrical</option>
              <option value="Robotics Automation">Robotics Automation</option>
              <option value="Mechanical">Mechanical</option>
              <option value="Civil">Civil</option>
            </select>
            <input
              type="text"
              name="leaderRollNo"
              placeholder="Leader Roll No"
              value={formData.leaderRollNo}
              onChange={handleChange}
              required
            />
            <input
              type="tel"
              name="leaderPhoneNo"
              placeholder="Leader Phone No"
              value={formData.leaderPhoneNo}
              onChange={handleChange}
              required
            />
            <input
              type="email"
              name="leaderEmail"
              placeholder="Leader Email"
              value={formData.leaderEmail}
              onChange={handleChange}
              required
            />
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
            <input
              type="text"
              name="transactionID"
              placeholder="Transaction ID"
              value={formData.transactionID}
              onChange={handleChange}
              required
            />
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <>
      {!isSubmitted ? (
        <form className={styles.form} onSubmit={handleSubmit}>
          {renderStepContent()}
          <div className={styles.buttons}>
            <button type="button" onClick={prevStep} disabled={step === 1}>
              Back
            </button>
            {step < 4 ? (
              <button type="button" onClick={nextStep}>
                Next
              </button>
            ) : (
              <button type="submit" disabled={isSubmitting}>
                {isSubmitting ? "Submitting..." : "Submit"}
              </button>
            )}
          </div>
        </form>
      ) : (
        <div className={styles.successMessage}>
          <h4>Registration Successful!</h4>
          <p>
            Your project has been registered successfully. You will receive an
            email on the leader's email address shortly.
          </p>
          <button
            onClick={() => {
              window.location.href = "/"; // Redirect to home page
            }}
            className={styles.homeButton}
          >
            Back to Home
          </button>
        </div>
      )}
      <ToastContainer />
    </>
  );
};

export default Form;
