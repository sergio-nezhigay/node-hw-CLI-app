const fs = require("fs/promises");
const path = require("path");
const { nanoid } = require("nanoid");

const contactsPath = path.join(__dirname, "db", "contacts.json");

async function listContacts() {
  const data = await fs.readFile(contactsPath);
  return JSON.parse(data);
}

async function getContactById(contactId) {
  const contacts = await listContacts();
  return contacts.find((contact) => contact.id === contactId) || null;
}

async function removeContact(contactId) {
  const contacts = await listContacts();
  const indexToRemove = contacts.findIndex(
    (contact) => contact.id === contactId
  );
  const [removedContact] = contacts.splice(indexToRemove, 1);
  const data = JSON.stringify(contacts, null, 2);
  await fs.writeFile(contactsPath, data);
  return removedContact;
}

async function addContact(name, email, phone) {
  const contacts = await listContacts();
  const newContact = {
    id: nanoid(),
    name,
    email,
    phone,
  };
  contacts.push(newContact);
  const data = JSON.stringify(contacts, null, 2);
  await fs.writeFile(contactsPath, data);
  return newContact;
}

module.exports = {
  listContacts,
  getContactById,
  addContact,
  removeContact,
};
