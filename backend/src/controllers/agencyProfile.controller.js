import AgencyProfile from "../models/AgencyProfile.js";

export const createAgencyProfile = async (req, res) => {
  try {
    const profile = await AgencyProfile.create({
      user: req.user.id,
      ...req.body,
    });

    res.status(201).json({
      message: "Agency profile created",
      profile,
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
