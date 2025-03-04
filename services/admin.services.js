// import Location from "../model/user.model.js";
import Location from "../models/user.model.js";

export const getAllLocations = async () => {
    return await Location.find();
};


