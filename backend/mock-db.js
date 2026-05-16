import fs from 'fs';
import path from 'path';

const DATA_DIR = path.join(process.cwd(), 'data');
if (!fs.existsSync(DATA_DIR)) {
  fs.mkdirSync(DATA_DIR);
}

const getFilePath = (collection) => path.join(DATA_DIR, `${collection}.json`);

const readData = (collection) => {
  const filePath = getFilePath(collection);
  if (!fs.existsSync(filePath)) return [];
  return JSON.parse(fs.readFileSync(filePath, 'utf8'));
};

const writeData = (collection, data) => {
  fs.writeFileSync(getFilePath(collection), JSON.stringify(data, null, 2));
};

export const MockModel = (collection) => ({
  find: async (query) => {
    const data = readData(collection);
    // Simple filter (only supports exact matches for this mock)
    return data.filter(item => {
      return Object.entries(query).every(([key, value]) => item[key] === value);
    });
  },
  findOne: async (query) => {
    const data = readData(collection);
    return data.find(item => {
      return Object.entries(query).every(([key, value]) => item[key] === value);
    }) || null;
  },
  create: async (doc) => {
    const data = readData(collection);
    const newDoc = { ...doc, id: Date.now().toString(), _id: Date.now().toString() };
    data.push(newDoc);
    writeData(collection, data);
    return newDoc;
  },
  findById: async (id) => {
    const data = readData(collection);
    return data.find(item => item.id === id || item._id === id) || null;
  }
});
