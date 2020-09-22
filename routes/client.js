const express = require('express');
const bodyParser = require('body-parser');

const clientController = require('../controllers/client.js');

const router = express.Router();
const app = express();


router.get('/home', clientController.getShowPosts);

router.post('/home-search', clientController.getShowPostsSearch)

router.get('/post/:id', clientController.getShowPost);



module.exports = router;