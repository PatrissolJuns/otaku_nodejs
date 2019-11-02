const express = require('express');
const router = express.Router();

const VideoController = require('../controllers/video');

router.put('/add', VideoController.addVideo);
router.get('/', VideoController.getAllVideo);
router.get('/:id', VideoController.getOneVideo);
// router.put('/update/:id', VideoController.updateVideo);
router.post('/toggle/is/bookmarked', VideoController.toggleIsBookmarked);
router.delete('/delete/:id', VideoController.deleteVideo);

module.exports = router;
