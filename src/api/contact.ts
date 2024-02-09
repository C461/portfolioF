import { CreateContact } from "../interfaces/contact.interface";
const API = import.meta.env.VITE_API_URL;

export const createContact = (contact: CreateContact) =>
  fetch(`${API}/contact`, {
    method: "POST",
    body: JSON.stringify(contact),
    headers: {
      "Content-Type": "application/json",
    },
  });