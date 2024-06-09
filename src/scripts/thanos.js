import { PATH_DB } from '../constants/contacts.js';
import fs from 'fs/promises';
export const thanos = async () => {
  try {
    const data = await fs.readFile(PATH_DB, 'utf-8');
    const contacts = JSON.parse(data);
    const updateContacts = contacts.filter(() => Math.random() >= 0.5);
    await fs.writeFile(
      PATH_DB,
      JSON.stringify(updateContacts, null, 2),
      'utf-8',
    );
    console.log(
      `Successfully applied the Thanos snap. Updated contacts are saved to ${PATH_DB}`,
    );
  } catch (error) {
    console.error('Error applying the Thanos snap:', error);
  }
};

(async () => {
  await thanos();
})();
