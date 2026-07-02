import { Router } from "express";
import { descargarReporte } from "../controllers/reporte.controller.js";

const router = Router();
router.get('/descargar', descargarReporte);

export default router;