const express = require('express')

const {blogspot} = require('../controllers')

const router = express.Router();

router.post('/blogpost', blogpost.postBlogpost)