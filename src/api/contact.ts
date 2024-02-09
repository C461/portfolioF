import { CreateContact } from "../interfaces/contact.interface";
const API = "http://localhost:3000/api";

export const createContact = (contact: CreateContact) =>
  fetch(`${API}/contact`, {
    method: "POST",
    body: JSON.stringify(contact),
    headers: {
      "Content-Type": "application/json",
    },
  });