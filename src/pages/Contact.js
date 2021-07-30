import './../css/contact.css';

export default function Contact() {
	return (
		<div className="App App-header">
			<div className="contact-container">
        <h3>Please leave me a message</h3>
        <div className="contact-form-container">
          <form id="contact-form" method="POST">
            <div className="form-group">
              <label htmlFor="name" className="label">Name</label>
              <input type="text" className="form-control" placeholder="John Doe" />
            </div>
            <div className="form-group">
              <label htmlFor="exampleInputEmail1" className="label">Email address</label>
              <input type="email" className="form-control" aria-describedby="emailHelp" placeholder="somebody@email.com" />
            </div>
            <div className="form-group">
              <label htmlFor="message" className="label">Message</label>
              <textarea className="form-control" rows="5"  placeholder="Enter your message here"/>
            </div>
            <div className="button-container">
              <button href="#" type="submit" id="submitBtn" onClick={submitMessage}>Submit</button>
            </div>
          </form>
        </div>
      </div>
    </div>
	) 

  function submitMessage(e) {
    e.preventDefault();
    alert ("Thank you for leaving me a message!")
  }
  

}

