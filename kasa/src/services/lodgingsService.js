import Lodgings from "../data/logements.json";

const lodgingsService = {
  // get des données
  getAll: () => {
    return Lodgings;
  },
  getById: (lodgingId) => {
    return Lodgings.filter((Lodgings) => Lodgings.id === lodgingId);
  },
};

export default lodgingsService;
