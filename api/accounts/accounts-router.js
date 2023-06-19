const router = require("express").Router();
const accounts = require("./accounts-model");
const mid = require("./accounts-middleware");
router.get("/", async (req, res, next) => {
  try {
    const rows = await accounts.getAll();
    res.json(rows);
  } catch (err) {
    next(err);
  }
});

router.get("/:id", mid.checkAccountId, async (req, res, next) => {
  try {
    const rows = await accounts.getById(req.params.id);
    res.json(rows);
  } catch (err) {
    next(err);
  }
});

router.post(
  "/",
  mid.checkAccountNameUnique,
  mid.checkAccountPayload,
  async (req, res, next) => {
    try {
      const newAccount = await accounts.create({
        name: req.body.name,
        budget: req.body.budget,
      });
      res.status(201).json(newAccount);
    } catch (err) {
      next(err);
    }
  }
);

router.put("/:id", (req, res, next) => {
  // KODLAR BURAYA
});

router.delete("/:id", (req, res, next) => {
  // KODLAR BURAYA
});

router.use((err, req, res, next) => {
  // eslint-disable-line
  // KODLAR BURAYA
});

module.exports = router;
