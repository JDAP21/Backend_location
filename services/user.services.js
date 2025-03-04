import Location from "../models/user.model.js";

export const addLocation = async (data) => {
    const location = new Location(data);
    return await location.save();
};

// import { addLocation } from "../services/user.services.js";

// export const addLocation = async (req, res) => {
//     try {
//         const location = await addLocation(req.body);
//         res.status(201).json(location);
//     } catch (error) {
//         res.status(400).json({ message: error.message });
//     }
// };
