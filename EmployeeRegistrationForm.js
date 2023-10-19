import React, { useState } from 'react';

const EmployeeRegistrationForm = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [mobileNumber, setMobileNumber] = useState('');
  const [qualification, setQualification] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(
      `First Name: ${firstName}\nLast Name: ${lastName}\nEmail: ${email}\nMobile Number: ${mobileNumber}\nQualification: ${qualification}`
    );
  };

  return (
    <div style={{ width: '350px', padding: '20px', border: '1px dashed #000', borderRadius: '5px' }}>
      <h2>Employee Registration Form</h2>
      <form onSubmit={handleSubmit}>
        <div style={{ marginBottom: '10px' }}>
          <label>First Name (Minimum 5 Char)</label>
          <input 
            type="text"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            style={{ width: '100%', padding: '5px' }}
            minLength="5"
          />
        </div>
        <div style={{ marginBottom: '10px' }}>
          <label>Last Name</label>
          <input 
            type="text"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            style={{ width: '100%', padding: '5px' }}
          />
        </div>
        <div style={{ marginBottom: '10px' }}>
          <label>Email ID</label>
          <input 
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            style={{ width: '100%', padding: '5px' }}
          />
        </div>
        <div style={{ marginBottom: '10px' }}>
          <label>Mobile Number</label>
          <input 
            type="tel"
            value={mobileNumber}
            onChange={(e) => setMobileNumber(e.target.value)}
            style={{ width: '100%', padding: '5px' }}
          />
        </div>
        <div style={{ marginBottom: '20px' }}>
          <label>Qualification</label><br />
          <input type="radio" name="qualification" value="High School(10th)" onChange={(e) => setQualification(e.target.value)} /> High School(10th) <br />
          <input type="radio" name="qualification" value="Higher School(12th)" onChange={(e) => setQualification(e.target.value)} /> Higher School(12th) <br />
          <input type="radio" name="qualification" value="Graduation(Bachelors)" onChange={(e) => setQualification(e.target.value)} /> Graduation(Bachelors) <br />
          <input type="radio" name="qualification" value="Post Graduation(Masters)" onChange={(e) => setQualification(e.target.value)} /> Post Graduation(Masters) <br />
          <input type="radio" name="qualification" value="Other" onChange={(e) => setQualification(e.target.value)} /> Other
        </div>
        <div>
          <button type="submit" style={{ padding: '7px 15px', marginRight: '10px' }}>Submit</button>
          <button type="reset" style={{ padding: '7px 15px' }}>Reset</button>
        </div>
      </form>
    </div>
  );
};

export default EmployeeRegistrationForm;
