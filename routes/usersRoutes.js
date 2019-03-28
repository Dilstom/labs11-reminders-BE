const express = require('express');

const Users = require('../dbHelpers/usersModels.js');

const usersRoutes = express.Router();

//endpoint route handler to get all of the users
usersRoutes.get('/', async (req, res) => {
  try {
    const users = await Users.getAllUsers();
    res.status(200).json(users);
  } catch (error) {
    res.status(500).json(error);
  }
});

//endpoint route handler that gets a single user by id
usersRoutes.get('/:id', async (req, res) => {
  try {
    const user = await Users.getUserByID(req.params.id);
    res.status(200).json(user);
  } catch (error) {
    res.status(500).json(error);
  }
});


module.exports = usersRoutes;
