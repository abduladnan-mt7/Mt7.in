import User from "../models/User.js";

export const getAllClients = async (req, res) => {
  try {
    const clients = await User.find({ role: "client" }).select("-password");

    res.status(200).json({
      count: clients.length,
      clients,
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

export const getAllAgencies = async (req, res) => {
  try {
    const agencies = await User.find({ role: "agency" }).select("-password");

    res.status(200).json({
      count: agencies.length,
      agencies,
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};
