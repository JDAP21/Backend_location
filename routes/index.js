import express from 'express';
import userRoutes from "../routes/user.route.js";
import adminRoutes from "../routes/admin.route.js";

const router = express.Router();

const defaultRoutes = [
    {
        path: '/user',
        route: userRoutes,
    },
    {
        path: '/admin',
        route: adminRoutes,
    },
];

defaultRoutes.forEach((route) => {
    router.use(route.path, route.route);
});

export default router;
