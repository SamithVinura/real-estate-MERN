import express from "express";
import {
  deleteUser,
  getUserListing,
  updateUser,
} from "../controllers/user.controller.js";
import { verifyToken } from "../utils/verifyUSer.js";

const router = express.Router();

router.post("/update/:id", verifyToken, updateUser);
router.delete("/delete/:id", verifyToken, deleteUser);
router.get("/listings/:id", verifyToken, getUserListing);

export default router;
