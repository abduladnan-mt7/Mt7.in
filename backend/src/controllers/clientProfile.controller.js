import ClientProfile from "../models/ClientProfile.js";

export const createClientProfile = async (req, res) => {
  try {
    const profile = await ClientProfile.create({
      user: req.user.id,
      ...req.body,
    });

    res.status(201).json({
      message: "Client profile created",
      profile,
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
