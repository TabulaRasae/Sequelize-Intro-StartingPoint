const express = require("express");
const router = express.Router();
const { Task, User } = require("../database");

// TASK 4: Add the necessary routes here
// This time, use your newly created Sequelize models instead of the dummy database

// GET all tasks
router.get("/", async (req, res) => {
  try {
    // Replace this with your code!
    const tasks = await Task.findAll();
    // const users = User.findAll();
    // res.send(users)
    res.send(tasks);
    // res.status(501).send("Not implemented");
  } catch (error) {
    console.error("Failed to find all", error);
    res.sendStatus(404);
  }
});

// router.get("/users", async (req, res) => {
//   try {
//     // Replace this with your code!
//     // const tasks = await Task.findAll();
//     const users = User.findAll();
//     // res.send(users)
//     res.send(users);
//     // res.status(501).send("Not implemented");
//   } catch (error) {
//     console.error("Failed to find all", error);
//     res.sendStatus(404);
//   }
// });

// GET a single task by id
router.get("/:id", async (req, res) => {
  try {
    const id = Number(req.params.id);
    const task = await Task.findByPk(id);
    res.send(task);
  } catch (error) {
    console.error("Failed to find the specific task you are looking for");
    res.sendStatus(404);
  }
});

// Patch a task by id
router.patch("/:id", async (req, res) => {
  try {
    const id = Number(req.params.id);
    const changes = req.body;
    const task = await Task.findByPk(id);
    await task.update(changes);
    
    res.sendStatus(200);
  } catch (error) {
    console.error("Failed to update the specific task", error);
    res.sendStatus(404);
  }
});

// Delete a task by id
router.delete("/:id", async (req, res) => {
  try {
    const id = Number(req.params.id);
    await Task.destroy({
      where: {
        id: id,
      },
    });
  } catch (error) {
    console.error("Failed to delete the task, dog", error);
    res.sendStatus(404);
  }
});

// Create a new task
router.post("/", async (req, res) => {
  try {
    const task = await req.body;
    const createdTask = await Task.create(task);
    res.status(201).json(createdTask);
  } catch (error) {
    console.error("Failed to create a new task", error);
    res.sendStatus(404);
  }
});

module.exports = router;
// GET a single task by id

// Patch a task by id

// Delete a task by id

// Create a new task

module.exports = router;

// TASK 5: Create a new routes file for users, and add as many routes as you see fit
// Don't forget to export the router, and import it into api/index.js
