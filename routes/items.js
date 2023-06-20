import express from 'express';
const router = express.Router();
import itemController from '../controller/itemController.js';

router.get('/api/items', itemController.getAllItems);
router.get('/api/items/:id', itemController.getItemById);
router.post('/api/items', itemController.createItem);
router.put('/api/items/:id', itemController.updateItemById);
router.delete('/api/items/:id', itemController.deleteItemById);

export default router;
