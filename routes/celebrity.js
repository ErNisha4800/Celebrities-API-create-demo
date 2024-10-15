const express =require("express");
const router = express.Router();
 
const { getAllCelebrities, 
        createCelebritiesTesting
    } = require("../controllers/celebrity");


router.route("/").get(getAllCelebrities);
router.route("/testing").get(createCelebritiesTesting);
      

module.exports = router;


 