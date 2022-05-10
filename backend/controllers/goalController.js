
const asyncHandler = require('express-async-handler')
//@desc     Get goals
//@route    GET /api/goals
//@access   Private 
const getGoals = async (req, res) => {
    res
        .status(200)
        .json({message: "Get goal"})
}

//@desc     Set goals
//@route    POST /api/goals
//@access   Private 
const setGoals = asyncHandler(async (req, res) => {
    console.log(req.body)

    if(!req.body.text) {
        res.status(400)

        throw new Error('Please a text field')
    }

    res
        .status(200)
        .json({message: "Set goal"})
})

//@desc     Update goals
//@route    PUT /api/goals/:id
//@access   Private 
const updateGoals = asyncHandler(async (req, res) => {
    res
        .status(200)
        .json({message: "Update goal"})
})

//@desc     Delete goals
//@route    DELETE /api/goals/:id
//@access   Private 
const deleteGoals = asyncHandler(async (req, res) => {
    res
        .status(200)
        .json({message: "Delete goal"})
})

module.exports = {
    getGoals,
    setGoals,
    updateGoals,
    deleteGoals,
}