import { addLocation } from "../services/user.services.js";


export const addLocations = async (req, res) => {
    try {
        const location = await addLocation(req.body);
        res.status(201).json(location);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};
