/**
 * Created by admin to 2017/5/8.
 */
const router = require('express').Router()
const {BookCtrl} = require('../controller')

router.get('/', BookCtrl.getAll);

module.exports = router;