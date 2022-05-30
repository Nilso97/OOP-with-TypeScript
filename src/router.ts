import { Request, Response, Router } from 'express';

// Controller
import { firstController, secondController } from './controllers/FirstController';

const router: Router = Router();

// Routers
router.get('/', firstController.home);

router.get('/users', secondController.users)

export { router };