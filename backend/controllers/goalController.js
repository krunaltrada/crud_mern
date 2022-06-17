const asyncHandler = require('express-async-handler');

module.exports = {
    // @desc    Get Goals
    // @route   GET /api/goals
    // @access  Private
    getGoals: asyncHandler(async (req, res) => {
        res.status(200).json({ message: 'Get Goals' });
    }),

    // @desc    Set Goals
    // @route   POST /api/goals
    // @access  Private
    setGoal: asyncHandler(async (req, res) => {
        if (!req.body.text) {
            // res.status(400).json({ message: 'Please add a text field' });
            res.status(400)
            throw new Error('Please add a text field');
        }
        res.status(200).json({ message: 'Set Goal' });
    }),

    // @desc    Update Goals
    // @route   PUT /api/goals/:id
    // @access  Private
    updateGoal: asyncHandler(async (req, res) => {
        res.status(200).json({ message: `Update Goal ${req.params.id}` });
    }),

    // @desc    Delete Goals
    // @route   DELETE /api/goals/:id
    // @access  Private
    deleteGoal: asyncHandler(async (req, res) => {
        res.status(200).json({ message: `Delete Goal ${req.params.id}` });
    }),
}