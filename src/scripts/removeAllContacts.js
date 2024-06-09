import { PATH_DB } from '../constants/contacts.js';
import fs from 'fs/promises';

export const removeAllContacts = async () => {
  try {
    const data = await fs.readFile(PATH_DB, 'utf-8');
    const contacts = JSON.parse(data);
    console.log(contacts);
    const updateContacts = [];
    await fs.writeFile(
      PATH_DB,
      JSON.stringify(updateContacts, null, 2),
      'utf-8',
    );
    console.log(`Successfully removed all contacts from ${PATH_DB}`);
  } catch (error) {
    console.error('Error removing contacts:', error);
  }
};

(async () => {
  await removeAllContacts();
})();
