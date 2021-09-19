import expres from 'express';
const route = expres.Router();
route.get('/test', (req, res) => {
    res.status(200).json({ message: "Welcome to Node.js & Express "});
  })
export default route;