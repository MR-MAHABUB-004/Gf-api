const express = require("express");
const router = express.Router();

router.get("/", async (req, res) => {
  const data = [
    {
      title: "🍄নে তোর Gf তাও আর আমারে জালাইস না",
      profile_link: "https://www.facebook.com/profile.php?id=61553330428769",
      image_url: "https://i.postimg.cc/K8647Jvb/8.jpg",
    },
    {
      title: "MAHABUB",
      image_url: "https://i.postimg.cc/K8647Jvb/8.jpg",
    },
  ];
  res.status(200).json(data);
});

module.exports = router;
