const express = require("express");
const router = express.Router();
const task = require("../models/task");
const app = express()
router.get("/task", async (req, res) => {

  try {
    const tasks = await task.find();
    res.status(200).json(tasks);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});


router.post("/task", async (req, res) => {
  try {
    const newtask = new task(req.body);
    await newtask.save();
    res.status(200).json({ message: "has been added successfully", task });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

router.put("/task/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const datatoupdate = req.body;
    const findtask = await task.findByIdAndUpdate(id, datatoupdate, {
      new: true,
    });
    res.status(200).json({ message: "updated successfully", findtask });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

router.delete("/task/:id", async (req,res)=>{
    try{
        const {id} = req.params
        const datatodelete = req.body
        const deletetask = await task.findByIdAndDelete(id,datatodelete, {new:true})
        res.send(200).json({message: "Deleted", deletetask})
    }catch(err){
        res.status(400).json({error: err.message})
    }
})

module.exports = router;
