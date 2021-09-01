const router = require('express').Router();
const { Post } = require('../models');
const withAuth = require('../utils/auth');

// Prevent non logged in users from viewing the homepage
router.get('/', withAuth, async (req, res) => {
  try {
    const postData = await Post.findAll();

    const posts = postData.map((submission) => submission.get({ plain: true }));

    res.render('homepage', {
      posts,
      // Pass the logged in flag to the template
      logged_in: req.session.logged_in,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});
router.get('/dashboard', (req, res) => {
    // If a session exists, redirect the request to the homepage
    if (!req.session.logged_in) {
      res.redirect('/login');
      return;
    }
  
    res.render('dashboard');
  });

router.get('/login', (req, res) => {
  // If a session exists, redirect the request to the homepage
  if (req.session.logged_in) {
    res.redirect('/');
    return;
  }

  res.render('login');
});

module.exports = router;