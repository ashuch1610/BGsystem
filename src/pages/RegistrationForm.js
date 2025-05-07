
import React, { useRef } from "react";
import emailjs from "emailjs-com";



const RegistrationForm = ()=>{
    const form = useRef();


    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs
          .sendForm(
            "service_25wxv9q",     // from EmailJS dashboard
            "template_nhszovk",    // from EmailJS dashboard
            form.current,
            "UGlr6Ty8LC6RBTpN9"         // public key from EmailJS account
          )
          .then(
            (result) => {
              alert("Registration successful!");
              console.log(result.text);
            },
            (error) => {
              console.error("Failed to send email:", error.text);
            }
          );
    
        e.target.reset();
      };
    

    return(
      <div className='bg-white' >
      <div className='container' style={{ width: "70%", paddingTop: "80px ", fontFamily: 'Georgia, serif', paddingBottom: "100px" }} >
      
        <div className='row'>
        
          <div className=' col-7 '>
          <form ref={form} onSubmit={sendEmail}>
          <h3 className='text-left pe-5 pb-5' style={{ fontFamily: "Georgia, serif" }}><b>Register TODAY! </b></h3>
      <h2>Inquiry Form</h2>
      <div style={{ marginBottom: '40px' }}>
    <label>Name:</label>
    <input type="text" name="student_name" style={{ marginLeft: '0px', display: 'block', width: '100%' }} required />
  </div>

  <div style={{ marginBottom: '40px' }}>
    <label>Email:</label>
    <input type="email" name="student_email" style={{ marginLeft: '0px', display: 'block', width: '100%' }} required />
  </div>

  <div style={{ marginBottom: '40px' }}>
    <label>Contact number:</label>
    <input type="email" name="student_email" style={{ marginLeft: '0px', display: 'block', width: '100%' }} required />
  </div>

  <div style={{ marginBottom: '40px' }}>
    <label>Education:</label>
    <input type="text" name="student_course" style={{ marginLeft: '0px', display: 'block', width: '100%' }} required />
  </div>



  <div style={{ marginBottom: '40px' }}>
    <label>Street address:</label>
    <input type="text" name="student_street" style={{ marginLeft: '0px', display: 'block', width: '100%' }} required />
  </div>

  <div style={{ marginBottom: '40px' }}>
    <label>Town / City:</label>
    <input type="text" name="student_town" style={{ marginLeft: '0px', display: 'block', width: '100%' }} required />
  </div>
      <button type="submit">Submit</button>
    </form>
          </div>

          <div class="col-5  s5-img" style={{ marginTop: '180px' }}></div>

        </div>
      </div>
      {/* ---map--- */}
     
    </div>
    )



}



export default RegistrationForm;