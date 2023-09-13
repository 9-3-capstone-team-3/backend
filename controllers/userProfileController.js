const express = require("express");
const userProfile = express.Router();
const { getUserProfileById } = require("../queries/userProfile");

userProfile.get("/:user_id", async (req, res) => {
    try {
        const { user_id } = req.params;

        // Call the query function to fetch the user's profile
        const { error, result } = await getUserProfileById(user_id);

        if (error?.code === 0) {
            // Handle the case where the user is not found
            return res.status(404).json({ error: 'User Profile not found' });
        } else if (error) {
            // Handle other server errors
            return res.status(500).json({ error: 'Server error' });
        }

        return res.status(200).json(result);
    } catch (error) {
        // Handle unexpected errors 
        console.error('Error in UserProfileController', error);
        return res.status(500).json({ error: 'Server error'});
    }
});

module.exports = userProfile;