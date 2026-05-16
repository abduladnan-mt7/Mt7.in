import mongoose from "mongoose";

const clientProfileSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    company: String,
    phone: String,
    budget: {
      type: String,
      enum: ["< ₹50k", "₹50k – ₹2L", "₹2L – ₹5L", "₹5L+"],
    },
    plan: String,
    role: String,
    stage: String,
    services: [String],
    description: String,
    urgency: String,
  },
  { timestamps: true },
);

import { mockStore } from "../mockStore.js";

const ClientProfile = mongoose.model("ClientProfile", clientProfileSchema);

function MockClientProfile(data) {
  return {
    ...data,
    _id: Date.now().toString(),
    save: async function() {
      return mockStore.add('clientProfiles', this);
    }
  };
}

MockClientProfile.findOne = async (query) => mockStore.findOne('clientProfiles', query);
MockClientProfile.find = async (query) => mockStore.find('clientProfiles', query);
MockClientProfile.create = async (data) => mockStore.add('clientProfiles', data);
MockClientProfile.findById = async (id) => mockStore.findOne('clientProfiles', { _id: id });

export default process.env.MONGO_URI ? ClientProfile : MockClientProfile;
