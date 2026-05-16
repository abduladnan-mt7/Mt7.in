import fs from 'fs';
import path from 'path';

const DATA_FILE = path.join(process.cwd(), 'data.json');

const loadData = () => {
  if (!fs.existsSync(DATA_FILE)) return { users: [], clientProfiles: [], agencyProfiles: [] };
  return JSON.parse(fs.readFileSync(DATA_FILE, 'utf8'));
};

const saveData = (data) => {
  fs.writeFileSync(DATA_FILE, JSON.stringify(data, null, 2));
};

export const mockStore = {
  get: (collection) => loadData()[collection] || [],
  add: (collection, item) => {
    const data = loadData();
    if (!data[collection]) data[collection] = [];
    const _id = item._id || Date.now().toString();
    const newItem = { 
      ...item, 
      _id, 
      id: _id,
      save: async function() {
        const d = loadData();
        const index = d[collection].findIndex(i => i._id === this._id);
        if (index > -1) d[collection][index] = { ...this };
        else d[collection].push({ ...this });
        saveData(d);
        return this;
      }
    };
    data[collection].push(newItem);
    saveData(data);
    return newItem;
  },
  find: (collection, query) => {
    const items = loadData()[collection] || [];
    return items.filter(item => 
      Object.entries(query).every(([k, v]) => item[k] === v)
    ).map(item => ({
      ...item,
      save: async function() {
        const d = loadData();
        const index = d[collection].findIndex(i => i._id === this._id);
        d[collection][index] = { ...this };
        saveData(d);
        return this;
      }
    }));
  },
  findOne: (collection, query) => {
    const items = loadData()[collection] || [];
    const item = items.find(item => 
      Object.entries(query).every(([k, v]) => item[k] === v)
    );
    if (!item) return null;
    return {
      ...item,
      save: async function() {
        const d = loadData();
        const index = d[collection].findIndex(i => i._id === this._id);
        d[collection][index] = { ...this };
        saveData(d);
        return this;
      }
    };
  }
};
