function Contact() {
  return (
    <div className="min-h-screen w-full max-w-[540px] shadow-md mx-auto bg-gray-100 flex flex-col p-4">
      <h1 className="text-2xl font-bold mb-4 text-blue-600">Contact Us</h1>
      <p className="text-gray-700">If you have any questions or feedback, feel free to reach out!</p>
      <form className="space-y-4 mt-4">
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
        <button className="w-full bg-blue-600 text-white p-2 rounded-md hover:blue-700" type="submit">
          Send Message
        </button>
      </form>
    </div>
  );
}

export default Contact;
