import { useState } from "react";
//TODO add email validation
import Input from "./Input";
const ContactForm = () => {
  const initialFValues = {
    name: "",
    email: "",
    message: "",
  };
  const [values, setValues] = useState(initialFValues);
  const [submitted, setSubmitted] = useState(false);
  const handleChange = (e) => {
    const { id, value } = e.target;
    setValues({ ...values, [id]: value });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    fetch("/api/contact", {
      method: "POST",
      headers: {
        Accept: "application/json, text/plain, */*",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(values),
    })
      .then((res) => {
        console.log("Response received");
        if (res.status === 200) {
          console.log("Response succeeded!");
          setSubmitted(true);
          setValues(initialFValues);
        }
      })
      .catch((err) => {
        console.error("defne bok", err);
      });
  };
  return (
    <form className="w-full">
      <div className="flex flex-wrap mb-6">
        <div className="w-full md:w-2/3 ">
          <label className="block tracking-wide mr-3 py-1 text-left font-medium text-xl px-2 text-transparent bg-clip-text bg-gradient-to-br from-orange-400  to-primary-400">
            Name
          </label>
          <Input
            id="name"
            type="text"
            value={values.name}
            onChange={handleChange}
          />
        </div>
        <div className="w-full md:w-2/3 ">
          <label className="block tracking-wide mr-3 py-1 text-left font-medium text-xl px-2 text-transparent bg-clip-text bg-gradient-to-br from-orange-400  to-primary-400">
            E-mail
          </label>
          <Input
            id="email"
            type="email"
            value={values.email}
            onChange={handleChange}
          />
        </div>
      </div>
      <div className="flex flex-wrap mb-6">
        <div className="w-full md:w-2/3">
          <label className="block tracking-wide mr-3 py-1 text-left font-medium text-xl px-2 text-transparent bg-clip-text bg-gradient-to-br from-orange-400  to-primary-400">
            Message
          </label>
          <textarea
            id="message"
            className="no-resize block w-full appearance-none rounded-md border-primary-100  text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none focus:ring-primary-200 focus:border-primary-200 h-36 resize-none shadow-sm dark:bg-gray-800 dark:text-gray-100"
            onChange={handleChange}
            value={values.message}
          ></textarea>
        </div>
      </div>
      <div className="flex flex-wrap mb-6">
        <button
          className="  bg-primary-100 flex items-center justify-center font-medium  border-0 p-2 rounded-md shadow-sm hover:shadow-md"
          onClick={handleSubmit}
        >
          <span className="px-1 text-transparent bg-clip-text bg-gradient-to-br from-orange-400  to-primary-400">
            Submit
          </span>
        </button>
      </div>
    </form>
  );
};

export default ContactForm;
