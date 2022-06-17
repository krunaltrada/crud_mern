const asyncHandler = require('express-async-handler');
const Goal = require('../models/goalModel');

module.exports = {
    // @desc    Get Goals
    // @route   GET /api/goals
    // @access  Private
    getGoals: asyncHandler(async (req, res) => {
        let findGoals = await Goal.find();
        res.status(200).json({ data: findGoals });
    }),

    // @desc    Set Goals
    // @route   POST /api/goals
    // @access  Private
    setGoal: asyncHandler(async (req, res) => {
        let { text } = req.body;
        if (!text) {
            // res.status(400).json({ message: 'Please add a text field' });
            res.status(400)
            throw new Error('Please add a text field');
        }

        let createGoal = await Goal.create({ text });
        res.status(200).json({ message: 'Goal Added Successfully', data: createGoal });
    }),

    // @desc    Update Goals
    // @route   PUT /api/goals/:id
    // @access  Private
    updateGoal: asyncHandler(async (req, res) => {
        const findGoal = await Goal.findById(req.params.id);

        if (!findGoal) {
            res.status(400)
            throw new Error('Goal Not Found')
        }

        const updatedGoal = await Goal.findByIdAndUpdate(req.params.id, req.body, { new: true });

        res.status(200).json({ message: 'Goal Updated Successfully', data: updatedGoal });
    }),

    // @desc    Delete Goals
    // @route   DELETE /api/goals/:id
    // @access  Private
    deleteGoal: asyncHandler(async (req, res) => {
        const findGoal = await Goal.findById(req.params.id);

        if (!findGoal) {
            res.status(400)
            throw new Error('Goal Not Found');
        }

        const deleteGoal = await findGoal.remove();

        res.status(200).json({ message: 'Goal Deleted Successfully', data: deleteGoal });
    }),
}