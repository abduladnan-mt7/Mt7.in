import mongoose from "mongoose";

const agencyProfileSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },

    agencyName: {
      type: String,
      required: true,
    },

    services: [
      {
        type: String,
      },
    ],

    industries: [
      {
        type: String,
      },
    ],

    pricingRange: {
      type: String,
    },

    teamSize: {
      type: Number,
    },

    experienceYears: {
      type: Number,
    },

    description: {
      type: String,
    },
  },
  { timestamps: true }
);

import { mockStore } from "../mockStore.js";

const AgencyProfile = mongoose.model("AgencyProfile", agencyProfileSchema);

function MockAgencyProfile(data) {
  return {
    ...data,
    _id: Date.now().toString(),
    save: async function() {
      return mockStore.add('agencyProfiles', this);
    }
  };
}

MockAgencyProfile.findOne = async (query) => mockStore.findOne('agencyProfiles', query);
MockAgencyProfile.find = async (query) => mockStore.find('agencyProfiles', query);
MockAgencyProfile.create = async (data) => mockStore.add('agencyProfiles', data);
MockAgencyProfile.findById = async (id) => mockStore.findOne('agencyProfiles', { _id: id });

export default process.env.MONGO_URI ? AgencyProfile : MockAgencyProfile;