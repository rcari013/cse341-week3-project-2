import mongoose from "mongoose";
import Contact from "../models/contact.js";

// GET all contacts
export const getAllContacts = async (req, res, next) => {
  try {
    const contacts = await Contact.find();
    res.json(contacts);
  } catch (error) {
    next(error);
  }
};

// GET contact by ID
export const getContactById = async (req, res, next) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(400).json({ message: "Invalid contact ID" });
  }

  try {
    const contact = await Contact.findById(id);

    if (!contact) {
      return res.status(404).json({ message: "Contact not found" });
    }

    res.json(contact);
  } catch (error) {
    next(error);
  }
};

// CREATE contact
export const createContact = async (req, res, next) => {
  try {
    const contact = await Contact.create(req.body);
    res.status(201).json(contact);
  } catch (error) {
    next(error); // 👈 handled by error middleware
  }
};

// UPDATE contact
export const updateContact = async (req, res, next) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(400).json({ message: "Invalid contact ID" });
  }

  try {
    const updatedContact = await Contact.findByIdAndUpdate(
      id,
      req.body,
      { new: true, runValidators: true }
    );

    if (!updatedContact) {
      return res.status(404).json({ message: "Contact not found" });
    }

    res.json(updatedContact);
  } catch (error) {
    next(error);
  }
};

// DELETE contact
export const deleteContact = async (req, res, next) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(400).json({ message: "Invalid contact ID" });
  }

  try {
    const deleted = await Contact.findByIdAndDelete(id);

    if (!deleted) {
      return res.status(404).json({ message: "Contact not found" });
    }

    res.status(204).send();
  } catch (error) {
    next(error);
  }
};
