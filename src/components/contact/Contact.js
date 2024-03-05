import React from 'react'
import "./Contact.css"
const Contact = () => {
    const [result, setResult] = React.useState("");

    const onSubmit = async (event) => {
        event.preventDefault();
        setResult("Sending....");
        const formData = new FormData(event.target);
        formData.append("access_key", "d83d8fa0-33be-4bbc-8f35-6aca855e5cb4");
        const response = await fetch("https://api.web3forms.com/submit", {
            method: "POST",
            body: formData
        });
        const data = await response.json();

        if (data.success) {
            setResult("Form Submitted Successfully");
            event.target.reset();
            setTimeout(() => {
                setResult("");
            },2000)
        } else {
            console.log("Error", data);
            setResult(data.message);
        }
    };
  return (
    <div className='contact-wrapper'>
    <div className="heading">Contact-us</div>
     <div className='contact'>
        <div className="contact-left">
            <h3>Send us a message </h3>
            <p>Feel free to reach out through the contact form or find my contact information below. Your feedback, inquiries, and collaborations are highly valued.</p>
            <ul>
                <li>prabhattiwari9629@gmail.com</li>
                <li>+91 9301829416</li>
                <li>Satna<br />MadhyaPradesh,India</li></ul>
        </div>
        <div className="contact-right" >
            <form autoComplete='off' onSubmit={onSubmit}>
                <label htmlFor="name">Your name</label>
                <input type="text" name="name" id="name" placeholder='Enter your name' required />
                <label htmlFor="phone">Phone Number</label>
                <input type="text" name="phone" id="phone" placeholder='Enter your phone number' required maxLength={10} />
                <label htmlFor="email">Your Email</label>
                <input type="email" name="email" id="email" placeholder='Enter your email' required />
                <label htmlFor="message">Write your messages here</label>
                <textarea name="message" id="message" rows="6" placeholder='Enter your message' />
                <button className="btn dark-btn" type='submit'>Submit Now</button>
            </form>
            {result && (
                <span className='msg'>{result}</span>
            )}
        </div>
    </div>
     </div>
  )
}

export default Contact