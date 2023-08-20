// api.js
const express = require("express");
const router = express.Router();

router.post("/plan-list", (req, res) => {
  const dummyResponse = [
    { id: 1, name: "Product 1", description: "Description for Product 1" },
    { id: 2, name: "Product 2", description: "Description for Product 2" },
  ];

  res.json(dummyResponse);
});

module.exports = router;
