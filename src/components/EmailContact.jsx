import React, { useState } from "react";
import { send } from 'emailjs-com'; // Correct import

const EmailContact = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    comment: ""
  });
  const [isLoading, setIsLoading] = useState(false);
  const [message, setMessage] = useState("");

  // EmailJS configuration
  const EMAILJS_CONFIG = {
    SERVICE_ID: "service_3nm6iuc",
    TEMPLATE_ID: "template_2v4z5a4", 
    PUBLIC_KEY: "op8tYVCswEB5bRSX2"
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setMessage("");

    try {
      // Send email using EmailJS - correct function call
      const result = await send(
        EMAILJS_CONFIG.SERVICE_ID,
        EMAILJS_CONFIG.TEMPLATE_ID,
        {
          from_name: formData.name,
          phone: formData.phone,
          message: formData.comment,
          to_name: "SRM Educare",
        },
        EMAILJS_CONFIG.PUBLIC_KEY
      );

      if (result.status === 200) {
        setMessage("Message sent successfully! We'll get back to you soon.");
        setFormData({ name: "", phone: "", comment: "" });
      }
    } catch (error) {
      console.error("Error sending email:", error);
      setMessage("Failed to send message. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="flex-1">
      <form onSubmit={handleSubmit} className="flex flex-col gap-3">
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="Your Name"
          className="p-2 rounded border border-[#7B2425] bg-[#19183B] text-[#E7E2Ef] placeholder:text-[#E7E2Ef] focus:outline-none"
          required
          disabled={isLoading}
        />
        <input
          type="text"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          placeholder="Phone"
          className="p-2 rounded border border-[#7B2425] bg-[#19183B] text-[#E7E2Ef] placeholder:text-[#E7E2Ef] focus:outline-none"
          required
          disabled={isLoading}
        />
        <textarea
          name="comment"
          value={formData.comment}
          onChange={handleChange}
          placeholder="Comment"
          className="p-2 rounded border border-[#7B2425] bg-[#19183B] text-[#E7E2Ef] placeholder:text-[#E7E2Ef] focus:outline-none"
          required
          disabled={isLoading}
          rows="4"
        ></textarea>
        
        <button
          type="submit"
          disabled={isLoading}
          className="bg-[#7B2425] hover:bg-[#E7E2Ef] hover:text-[#19183B] transition-colors duration-200 p-2 rounded font-semibold disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {isLoading ? "Sending..." : "Submit"}
        </button>
      </form>

      {message && (
        <div className={`mt-3 p-2 rounded text-center ${
          message.includes("successfully") 
            ? "bg-green-100 text-green-800" 
            : "bg-red-100 text-red-800"
        }`}>
          {message}
        </div>
      )}
    </div>
  );
};

export default EmailContact;