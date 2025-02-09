import express from 'express'
import { login } from '../controller/user.js'

const router = express.Router()

router.post('/google-login', login);

export default router;