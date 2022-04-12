import {Router} from 'express';

import {inventory as controller} from '../controllers';
import {validator} from '../middlewares';

const router = Router();

router.get(
    '/',
    controller.getList,
);

router.get(
    '/:id',
    validator.inventoryGetItem,
    controller.getItem,
);

router.post(
    '/',
    controller.createItem,
);

router.put(
    '/:id',
    validator.inventoryUpdateItem,
    controller.updateItem,
);

router.delete(
    '/:id',
    validator.inventoryDeleteItem,
    controller.deleteItem,
);

export default router;
