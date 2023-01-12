import { Task } from '../models/Task.js'

export const getTasks = async (req, res) => {
    try {
        const tasks = await Task.findAll();
        res.json(tasks);
    } catch (error) {
        return res.status(500).json({ message: error.message })
    }
};
export const createTask = async (req, res) => {
    const { name, done, projectId } = req.body;
    try {
        const newTask = await Task.create({ name, done, projectId });
        res.json(newTask);
    } catch (error) {
        return res.status(500).json({ message: error.message });
    };
};

export const getTask = async (req, res) => {
    const { id } = req.params;
    try {
        const task = await Task.findByPk({
            where: { id }
        })
        res.json(task);
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
};

export const updateTask = async (req, res) => {
    const { id } = req.params;
    try {
        const task = await Task.findOne({
            where: {id}
        })
        task.set(req.body);
        await task.save();
        return res.json(task);
    } catch (error) {
        return res.status(500).json({ message: error.message });
    };
};

export const deleteTask = async (req, res) => {
    const { id } = req.params;
    try {
        const result = await Task.destroy({
            where: { id }
        });
        return res.sendStatus(204);
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
};