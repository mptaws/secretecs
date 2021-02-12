import { Router } from 'express';

const router = Router();

router.get('/', async (req, res) => {
  try {
    res.send("hello kkkkkwommrld")
  } catch (error) {
    res.status(400).send(error);
  }
});

export default router;
  