import { Router } from "express";
import * as authCtrl from "../controllers/auth.controller.js";

const router = Router();

router.post('/signin', authCtrl.signIn);
router.post('/signup', authCtrl.signUp);

export default router;
