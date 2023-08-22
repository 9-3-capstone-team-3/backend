const express = require("express");
const codefusion = express.Router();

const {
    getAllCodefusion,
    getCode, 
    createCode, 
    updateCode, 
    deleteCode } = //require('../queries/codefusion.js')


//index
codefusion.get("/", async (req, res) => {
    const { error, result } = await getAllCodefusion();
    if (error) {
      res.status(500).json({ error: "server error" });
    } else {
      res.status(200).json(result);
    }
  });

//show
codefusion.get("/:id", async (req, res) => {
    const { id } = req.params;
    const { error, result } = await getCode(id);
    if (error?.code === 0) {
      res.status(404).json({ error: "bookmark not found" });
    } else if (error) {
      res.status(500).json({ error: "server error" });
    } else {
      res.status(200).json(result);
    }
  });


//create
codefusion.post("/", async (req, res) => {
    const { error, result } = await createCode(req.body);
    if (error) {
      res.status(500).json({ error: "server error" });
    } else {
      res.status(201).json(result);
    }
  });

//update
codefusion.put("/:id", async (req, res) => {
    const { id } = req.params;
    const { error, result } = await updateCode(id, req.body);
    if (error) {
      res.status(500).json({ error: "server error" });
    } else {
      res.status(200).json(result);
    }
  });

//delete
codefusion.delete("/:id", async (req, res) => {
    const { id } = req.params;
    const { error, result } = await deleteCode(id);
    if (error) {
      res.status(404).json("Codefusion not found");
    } else {
      res.status(201).json(result);
    }
  });

module.exports = codefusion