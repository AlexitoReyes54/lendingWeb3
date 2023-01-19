import express from 'express';
const router = express.Router();

interface userForm {
    username: string;
    password: string;
}

router.post('/singup', (_req, res) => {
    const data = _req.body as userForm;
    res.send(data);
});


router.post('/login', (_req, res) => {
    const data = _req.body as userForm;
    res.send(data);
});

router.get('/logout', (_req, res) => {
    res.send('Logout');
});

router.get('/profile', (_req, res) => {
    res.send('Callback');
});

export default router;
