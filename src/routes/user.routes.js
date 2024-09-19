import { Router } from "express";
import { registerUser, loginUser, logoutUser, getAllUserData } from "../controllers/user.controllers.js";


const router = Router()
router.route("/register").post(registerUser)
router.route("/login").post(loginUser)
router.route("/logout").post(logoutUser)
router.route("/allusers").get(getAllUserData)

  
export default router