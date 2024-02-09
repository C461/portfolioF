import { ChangeEvent, FormEvent, useState, useEffect } from "react";
import { createContact } from "../../api/contact";
import { Container } from "./styles";
import { Contact } from "../../interfaces/contact.interface";

function Form() {
  const initialContactState: Contact = {
    _id: "",
    name: "",
    email: "",
    message: "",
  };

  const [contact, setContact] = useState(initialContactState);
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => setContact({ ...contact, [e.target.name]: e.target.value });

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const res = await createContact(contact);

      if (res.ok) {
        setSuccessMessage("Message sent successfully");
        const form = e.target as HTMLFormElement;
        form.reset();
      }
    } catch (error: any) {
      setErrorMessage(`Error submitting the form: ${error.message}`);
    }
  };

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      if (successMessage) {
        setSuccessMessage("");
      }
    }, 5000);

    return () => clearTimeout(timeoutId);
  }, [successMessage]);

  return (
    <Container>
      <form onSubmit={handleSubmit}>
        <input
          placeholder="Name"
          id="name"
          type="text"
          name="name"
          required
          onChange={handleChange}
        />
        <input
          placeholder="Email"
          id="email"
          type="email"
          name="email"
          required
          onChange={handleChange}
        />

        <textarea
          required
          placeholder="Send a message to get started."
          id="message"
          name="message"
          onChange={handleChange}
        />
        {successMessage && <p style={{ color: "green" }}>{successMessage}</p>}
        {errorMessage && <p style={{ color: "red" }}>{errorMessage}</p>}
        <button type="submit" className="  p-4 rounded-md">
          Submit
        </button>
      </form>
    </Container>
  );
}

export default Form;
