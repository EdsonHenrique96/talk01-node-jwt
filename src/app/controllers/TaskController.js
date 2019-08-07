import Tasks from "../models/Tasks";

class TaskControlller {
  show(req, res) {
    return res.json(Tasks);
  }

  store(req, res) {
    const { task } = req.body;

    Tasks.push({ name: task });

    return res.status(201).json({ message: "created task" });
  }
}

export default new TaskControlller();
