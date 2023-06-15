const fs = require("fs/promises");
const path = require("path");
const { nanoid } = require("nanoid");

const contactsPath = path.join(__dirname, "db", "contacts.json");

function listContacts() {
  return fs.readFile(contactsPath).then((data) => JSON.parse(data));
}

function getContactById(contactId) {
  return listContacts().then(
    (contacts) => contacts.find((contact) => contact.id === contactId) || null
  );
}

function removeContact(contactId) {
  return listContacts().then((contacts) => {
    const indexToRemove = contacts.findIndex(
      (contact) => contact.id === contactId
    );
    const [removedContact] = contacts.splice(indexToRemove, 1);
    const data = JSON.stringify(contacts, null, 2);
    return fs.writeFile(contactsPath, data).then(() => removedContact);
  });
}

function addContact(name, email, phone) {
  return listContacts().then((contacts) => {
    const newContact = {
      id: nanoid(),
      name,
      email,
      phone,
    };
    contacts.push(newContact);
    const data = JSON.stringify(contacts, null, 2);
    return fs.writeFile(contactsPath, data).then(() => newContact);
  });
}

module.exports = {
  listContacts,
  getContactById,
  addContact,
  removeContact,
};
