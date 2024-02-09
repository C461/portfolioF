export interface Contact {
    _id: string;
    name: string;
    email: string;
    message: string;
    createdAt?: Date;
    updatedAt?: Date;
  }

  export type CreateContact = Omit<Contact, "_id" | "createdAt" | "updatedAt">;