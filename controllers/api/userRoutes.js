const router = require('express').Router();
// Import the User model from the models folder
const { User } = require('../../models');


// If a POST request is made to /api/users, a new user is created. The user id and logged in state is saved to the session within the request object.
router.post('/', async (req, res) => {
  try {
  
    const userData = await User.create(req.body);
    const user = userData.get({plain: true});
  
    req.session.save(() => {
      req.session.user_id = user.user_id;
      req.session.logged_in = true;
      req.session.is_worker = user.worker;
      req.session.zipcode = user.zipcode;
     

      res.status(200).json(user);
    });
  } catch (err) {
    res.status(400).json(err);
  }
});

// If a POST request is made to /api/users/login, the function checks to see if the user information matches the information in the database and logs the user in. If correct, the user ID and logged-in state are saved to the session within the request object.
router.post('/login', async (req, res) => {
  try {
    const userData = await User.findOne({ where: { email: req.body.email } });

    if (!userData) {
      res
        .status(400)
        .json({ message: 'Incorrect email or password, please try again' });
      return;
    }

    
    const validPassword = await userData.checkPassword(req.body.password);
    if (!validPassword) {
      res
        .status(400)
        .json({ message: 'Incorrect password, please try again' });
      return;
    }
    userData.get({plain: true})

    req.session.save(() => {
      req.session.user_id = userData.dataValues.user_id;
      req.session.logged_in = true;
      req.session.is_worker = userData.dataValues.worker;
      req.session.zipcode = userData.dataValues.zipcode;
      
      res.json({ user: userData, message: 'You are now logged in!' });
    });

  } catch (err) {
    res.status(400).json(err);
  }
});

// If a POST request is made to /api/users/logout, the function checks the logged_in state in the request.session object and destroys that session if logged_in is true.
router.post('/logout', (req, res) => {
  if (req.session.logged_in) {
    req.session.destroy(() => {
      res.status(204).end();
    });
  } else {
    res.status(404).end();
  }
});

// adding a get route for the sake of populating handlebars
router.get('/', async (req, res) => {
  try {
    const users = await User.findAll();
    res.json(users);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error. Check your connection and/or try again later.' });
  }
});

module.exports = router;
