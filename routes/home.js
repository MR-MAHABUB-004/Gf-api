const express = require("express");
const cors = require("cors");

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors()); // Allow cross-origin requests

// Sample Data
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
    title: "MAHABUB",
    image_url: "https://i.postimg.cc/K8647Jvb/8.jpg",
  },
];

// Route to return a random item
app.get("/", (req, res) => {
  res.setHeader("Cache-Control", "no-store, no-cache, must-revalidate, proxy-revalidate");
  res.setHeader("Pragma", "no-cache");
  res.setHeader("Expires", "0");

  const randomItem = data[Math.floor(Math.random() * data.length)];
  res.status(200).json(randomItem);
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
