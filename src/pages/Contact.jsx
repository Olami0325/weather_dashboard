function Contact() {
  return (
    <div>
      <h1>Contact Us</h1>
      <p>If you have any questions or feedback, feel free to reach out!</p>
      <form>
        <input
          type="text"
          placeholder="Your name"
          className="w-full border p-2 rounded-md"
        />
        <input
          type="text"
          placeholder="Your Email"
          className="w-full border p-2 rounded-md"
        />
        <textarea
          placeholder="Your Message"
          rows="4"
          className="w-full border p-2 rounded-md"
        ></textarea>
        <button className="w-full bg-blue-600 text-white p-2 rounded-md hover:blue-700">
          Send Message
        </button>
      </form>
    </div>
  );
}

export default Contact;
