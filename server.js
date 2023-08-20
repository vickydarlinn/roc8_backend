const express = require("express");
const axios = require("axios");
const cors = require("cors");
const app = express();

const port = process.env.PORT || 3001;

app.use(express.json());
app.use(cors());

// Route for generating token
app.post("/api/generate-token", async (req, res) => {
  try {
    const response = await axios.post(
      "https://dev-test.cimet.io/generate-token",
      {},
      {
        headers: {
          "Api-key": "4NKQ3-815C2-8T5Q2-16318-55301",
        },
      }
    );

    res.json(response.data);
  } catch (error) {
    console.error("Error generating token:", error);
    res
      .status(500)
      .json({ error: "An error occurred while generating token." });
  }
});

// Route for listing products
app.post("/api/plan-list", async (req, res) => {
  try {
    const response = await axios.post(
      "https://dev-test.cimet.io/plan-list",
      req.body,
      {
        headers: {
          "Api-key": "4NKQ3-815C2-8T5Q2-16318-55301",
          "Auth-token": req.headers["auth-token"], // Pass the auth token received from the client
        },
      }
    );

    res.json(response.data);
  } catch (error) {
    console.error("Error fetching product data:", error);
    res
      .status(500)
      .json({ error: "An error occurred while fetching product data." });
  }
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
