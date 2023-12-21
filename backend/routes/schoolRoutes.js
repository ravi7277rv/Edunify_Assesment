import express from 'express';
import { fetchingSchoolData, insertSchoolData } from '../controllers/schoolController.js';

const router = express.Router();

router.route("/addSchool").post(insertSchoolData);
router.route("/fetchData").get(fetchingSchoolData);





export default router;