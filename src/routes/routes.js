import express from 'express';
import {getEstudiantes} from '../controllers/estudiantes.controller.js';
const router = express.Router()

router.get('/', getEstudiantes)

export default router


