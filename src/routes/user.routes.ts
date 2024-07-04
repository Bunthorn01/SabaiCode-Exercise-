// src/routes/user.routes.ts

import express from 'express';
import { RegisterRoutes } from '../routes/v1/routes'; // Adjust this path based on where tsoa generated the routes

const router = express.Router();

RegisterRoutes(router); // Register tsoa-generated routes

export default router;
