const express = require("express");
const router = express.Router();

const data = [
  {
    title: "🍄 নে তোর Gf তাও আর আমারে জালাইস না",
    profile_link: "https://www.facebook.com/profile.php?id=61553330428769",
    image_url: "https://i.postimg.cc/K8647Jvb/8.jpg",
  },
  {
    title: "🔥 আজকের স্পেশাল অফার, মিস করবেন না!",
    profile_link: "https://www.facebook.com/profile.php?id=123456789",
    image_url: "https://i.postimg.cc/K8647Jvb/8.jpg",
  },
  {
    title: "😆 ফানি ভিডিও দেখুন আর হাসুন!",
    profile_link: "https://www.facebook.com/profile.php?id=987654321",
    image_url: "https://i.postimg.cc/K8647Jvb/8.jpg",
  },
  {
    title: "💖 Love ভিডিও! এখনি দেখুন!",
    profile_link: "https://www.facebook.com/profile.php?id=567891234",
    image_url: "https://i.postimg.cc/K8647Jvb/8.jpg",
  },
  {
    title: "MAHABUB",
    image_url: "https://i.postimg.cc/K8647Jvb/8.jpg",
  },
];

router.get("/", (req, res) => {
  // ক্যাশিং বন্ধ করে দিলাম, যাতে প্রতি রিফ্রেশে নতুন ডাটা আসে
  res.setHeader("Cache-Control", "no-store, no-cache, must-revalidate, proxy-revalidate");
  res.setHeader("Pragma", "no-cache");
  res.setHeader("Expires", "0");

  // র‍্যান্ডম ডাটা পাঠানো হচ্ছে
  const randomItem = data[Math.floor(Math.random() * data.length)];
  res.status(200).json(randomItem);
});

module.exports = router;
