import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    role: {
      type: String,
      enum: ["client", "agency", "admin"],
      default: "client",
    },
  },
  { timestamps: true },
);

import { mockStore } from "../mockStore.js";

const User = mongoose.model("User", userSchema);

function MockUser(data) {
  return {
    ...data,
    _id: Date.now().toString(),
    save: async function() {
      return mockStore.add('users', this);
    }
  };
}

MockUser.findOne = async (query) => mockStore.findOne('users', query);
MockUser.find = async (query) => mockStore.find('users', query);
MockUser.create = async (data) => mockStore.add('users', data);
MockUser.findById = async (id) => mockStore.findOne('users', { _id: id });

export default process.env.MONGO_URI ? User : MockUser;
