import fs from 'node:fs/promises';
import path from 'node:path';

export const GET = async () => {
  const filePath = path.join(import.meta.dirname, '..', '..', 'cms_config.yml');
  const buffer = await fs.readFile(filePath);
  return new Response(buffer);
};
