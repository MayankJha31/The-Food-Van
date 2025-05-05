import express from "express";
import cors from "cors";
import fetch from "node-fetch";

const app = express();
app.use(cors());

app.get("/api/restaurants", async (req, res) => {
  try {
    const response = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.63270&lng=77.21980&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
    const data = await response.json();
    res.json(data);
  } catch (error) {
    console.error("Error fetching Swiggy API:", error);
    res.status(500).json({ error: "Failed to fetch Swiggy data" });
  }
});

app.listen(5000, () => console.log("Proxy server running on http://localhost:5000"));
