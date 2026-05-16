import AgencyProfile from "../models/AgencyProfile.js";
import ClientProfile from "../models/ClientProfile.js";

export const findMatches = async (req, res) => {
  try {
    const clientPrfile = await ClientProfile.findOne({ user: req.user.id });
    if (!clientPrfile) {
      return res.status(404).json({ message: "Client profile not found" });
    }
    const agencyProfiles = await AgencyProfile.find();

    const matches = agencyProfiles.map((agency) => {
      let matchScore = 0;
      const servicesMatched = agency.services.filter((service) =>
        clientPrfile.services.includes(service),
      );
      matchScore += servicesMatched.length * 20;
      if (clientPrfile.budget == agency.pricingRange) {
        matchScore += 25;
      }
      if (agency.experienceYears >= 5) {
        matchScore += 15;
      }
      return {
        agencyId: agency._id,
        name: agency.agencyName,
        matchScore,
      };
    });
    const sortedMatches = matches.sort((a, b) => b.matchScore - a.matchScore);
    res.json({ matches: sortedMatches });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
