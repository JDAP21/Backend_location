import { getAllLocations } from "../services/admin.services.js";


export const getLocations = async (req, res) => {
    try {
        const locations = await getAllLocations();
        res.json(locations);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};