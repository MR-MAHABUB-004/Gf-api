const express = require("express");
const router = express.Router();

router.get("/", async (req, res, next) => {
  return res.status(200).json({
    title: "Express Testing",
    url: "The app is working properly!",
  },
                              {
    title: "🍄নে তোর Gf তাও আর আমারে জালাইস না \n https://www.facebook.com/profile.php?id=61553330428769",
      url: "https://i.postimg.cc/K8647Jvb/8.jpg"
                              });
});

module.exports = router;
