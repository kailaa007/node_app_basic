 const router = require('express').Router();
const user = require('../api/v1/usersController');

router.post('/authenticate', user.authenticate);
router.post('/register', user.register);
router.get('/', user.getAll);
router.get('/current', user.getCurrent);
router.get('/:id', user.getById);
router.put('/:id', user.update);
router.delete('/:id', user._delete);

module.exports = router;
