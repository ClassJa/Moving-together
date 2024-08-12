const router = require("express").Router();

// const { response } = require("express");
// Import the User model from the models folder
const { User } = require('../models');

router.get('/', async (res, req) => {
    try {
        if (logingUserData) {
          res.prependListener('login')
        }
    }
    catch(e) {
        res.status(400).json(e)
    }
})

// If a POST request is made to /api/users/login, the function checks to see if the user information matches the information in the database and logs the user in. If correct, the user ID and logged-in state are saved to the session within the request object.
router.post('/', async (req, res) => {
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

    req.session.save(() => {
      req.session.user_id = userData.id;
      req.session.logged_in = true;
      
    //   res.render('/welcomeBack')
    //   {{loggedUser}}
    //   res.json({ user: userData, message: 'You are now logged in!' });
    });

  } catch (err) {
    res.status(400).json(err);
  }
});

router.get('/welcomeBack', async (req, res) => {
  const userInfo = await User.findOne({
    where: {
    id: res.body.user_id
  }
})
if (!userInfo) {
  res.status(400).json("Invalid User")
}
res.json(userInfo)
})

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

module.exports = router;
