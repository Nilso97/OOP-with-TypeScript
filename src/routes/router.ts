import { Router } from 'express';
import { firstController } from '../controllers/FirstController';

// Controller
const router: Router = Router();

// Routers
router.get('/', firstController.home);
router.get('/users', firstController.users);

export { router };