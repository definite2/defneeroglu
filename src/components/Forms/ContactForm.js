import { useState } from "react";
//TODO add email validation
import Input from "./Input";
import Alert from "../Alert";
import { motion } from "framer-motion";
import { useForm } from "@/hooks/useForm";
const ContactForm = () => {
  const initialFValues = {
    name: "",
    email: "",
    message: "",
  };
  const validate = (fieldValues = values) => {
    let temp = { ...errors };
    if ("email" in fieldValues)
      temp.email = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(fieldValues.email)
        ? ""
        : "To reach you back, please add your email";

    if ("message" in fieldValues)
      temp.message =
        !fieldValues.message || fieldValues.message.length < 2 ? "It is a very short message:/" : "";
    temp.message =
      fieldValues.message.length > 1001 ? "Message is too long." : "";
    if ("name" in fieldValues)
      temp.name = fieldValues.name.length > 1 ? "" : "Your name is too short";
    setErrors({
      ...temp,
    });

    if (fieldValues == values) return Object.values(temp).every((x) => x == "");
  };
  const { values, errors, setErrors, handleInputChange, resetForm } = useForm(
    initialFValues,
    true,
    validate
  );
  const [alertMessage, setAlertMessage] = useState("");
  const [showAlert, setShowAlert] = useState(false);
  const [success, setSuccess] = useState(null);

 
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (validate()) {
      fetch("/api/contact", {
        method: "POST",
        headers: {
          Accept: "application/json, text/plain, */*",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(values),
      })
        .then((res) => {
          setShowAlert(true);
          if (res.status === 200) {
            resetForm();
            setAlertMessage("Thank you for reaching me out");
            setSuccess(true);
          }
        })
        .catch((err) => {
          setAlertMessage(err.message);
          setSuccess(false);
        });
    }
  };
  return (
    <>
      {showAlert && (
        <Alert
          show={showAlert}
          setShow={setShowAlert}
          message={alertMessage}
          success={success}
          title={success ? "Thank you!" : "Something went wrong"}
        />
      )}
      <form className="w-full">
        <div className="flex flex-wrap mb-6">
          <div className="w-full md:w-2/3 ">
            <Input
              id="name"
              type="text"
              label="Name"
              value={values.name}
              onChange={handleInputChange}
              error={errors.name}
            />
          </div>
          <div className="w-full md:w-2/3 ">
            <Input
              id="email"
              type="email"
              label="E-mail"
              value={values.email}
              onChange={handleInputChange}
              error={errors.email}
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
              onChange={handleInputChange}
              value={values.message}
              error={errors.message}
            />
             {errors.message && <span class="text-xs text-red-700">{errors.message}</span>}
          </div>
        </div>
        <div className="flex flex-wrap mb-6">
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="  bg-primary-100 flex items-center justify-center font-medium  border-0 p-2 rounded-md shadow-sm"
            onClick={handleSubmit}
          >
            <span className="px-1 text-transparent bg-clip-text bg-gradient-to-br from-orange-400  to-primary-400">
              Submit
            </span>
          </motion.button>
        </div>
      </form>
    </>
  );
};

export default ContactForm;
