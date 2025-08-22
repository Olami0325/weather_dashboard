import { useState } from "react";

function Contact() {

  const [FormData, setFormData] = useState ({
    name : "",
    email : "",
    message : "", 
  })

  const handleChange = (e) => {
    setFormData ({
      ...FormData, [e.target.name] : e.target.value})
  }

  const handleSubmit =(e) => {
    e.preventDefault();
    console.log ("Form Submitted Successfully:", FormData)
  }
  return (
    <div className="min-h-screen w-full max-w-[540px] shadow-md mx-auto bg-gray-100 flex flex-col p-4">
      <h1 className="text-2xl font-bold mb-4 text-blue-600">Contact Us</h1>
      <p className="text-gray-700">If you have any questions or feedback, feel free to reach out!</p>
      
      <form onSubmit={handleSubmit} className="space-y-4 mt-4">
        <input
          type="text"
          name="name"
          value={FormData.name}
          onChange={handleChange}
          placeholder="Your name"
          className="w-full border p-2 rounded-md"
        />
        <input
          type="text"
          name="email"
          value={FormData.email}
          onChange={handleChange}
          placeholder="Your Email"
          className="w-full border p-2 rounded-md"
        />
        <textarea
          placeholder="Your Message"
          name="message"
          value={FormData.message}
          onChange={handleChange}
          rows="4"
          className="w-full border p-2 rounded-md"
        ></textarea>
        <button className="w-full bg-blue-600 text-white p-2 rounded-md hover:blue-700" type="submit">
          Send Message
        </button>
      </form>
    </div>
  );
}

export default Contact;
