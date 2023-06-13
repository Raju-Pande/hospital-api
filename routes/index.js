const express = require('express');
const router = express.Router();

const homeCount=require('../controllers/home_cont');
router.get('/',homeCount.home);

router.use('/doctors', require('./doctors'))
router.use('/patients', require('./patients'))
router.use('/reports', require('./reports'))



module.exports= router;