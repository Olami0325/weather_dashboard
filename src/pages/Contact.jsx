import { useState } from "react";

function Contact() {

  const [formData, setFormData] = useState ({
    name : "",
    email : "",
    message : "", 
  })

  const handleChange = (e) => {
    setFormData ({
      ...formData, [e.target.name] : e.target.value})
  }

  const handleSubmit =(e) => {
    e.preventDefault();
    console.log ("Form Submitted Successfully:", formData)
  }
  return (
    <div className="w-full max-w-[540px] shadow-md mx-auto bg-gray-100 flex flex-col p-6 sm:p-8 rounded-lg">
      <h1 className="text-3xl font-bold mb-4 text-blue-600 text-center sm:text-left">Contact Us</h1>
      <p className="text-gray-700 text-center sm:text-left">If you have any questions or feedback, feel free to reach out!</p>
      
      <form onSubmit={handleSubmit} className="space-y-4 mt-4">
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="Your name"
          className="w-full border p-3 rounded-md focus:ring-2 focus:ring-blue-500 outline-none"
        />
        <input
          type="text"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="Your Email"
          className="w-full border p-3 rounded-md focus:ring-2 focus:ring-blue-500 outline-none"
        />
        <textarea
          placeholder="Your Message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          rows="4"
          className="w-full border p-3 rounded-md focus:ring-2 focus:ring-blue-500 outline-none"
        ></textarea>
        <button className="w-full bg-blue-600 text-white p-2 rounded-md hover:blue-700 transition-colors duration-200" type="submit">
          Send Message
        </button>
      </form>
    </div>
  );
}

export default Contact;
