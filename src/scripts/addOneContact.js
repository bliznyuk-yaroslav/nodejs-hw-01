import { PATH_DB } from '../constants/contacts.js';
import fs from 'fs/promises';
import { createFakeContact } from '../utils/createFakeContact.js';

export const addOneContact = async () => {
  try {
    const data = await fs.readFile(PATH_DB, 'utf-8');
    const contacts = JSON.parse(data);
    const newContacts = createFakeContact();
    contacts.push(newContacts);
    await fs.writeFile(PATH_DB, JSON.stringify(contacts, null, 2), 'utf-8');
    console.log(`Successfully added one contact and saved tp ${PATH_DB}`);
  } catch (error) {
    console.error('Error adding one contact:', error);
  }
};

await addOneContact();
