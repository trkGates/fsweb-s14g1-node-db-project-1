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
        name: req.body.name.trim(),
        budget: req.body.budget,
      });
      res.status(201).json(newAccount);
    } catch (err) {
      next(err);
    }
  }
);

router.put(
  "/:id",
  mid.checkAccountId,
  mid.checkAccountNameUnique,
  mid.checkAccountPayload,
  async (req, res, next) => {
    try {
      const updatedAccount = await accounts.updateById(req.params.id, req.body);
      res.status(200).json(updatedAccount);
    } catch (error) {
      next(error);
    }
  }
);

router.delete("/:id", mid.checkAccountId, async (req, res, next) => {
  try {
    await accounts.deleteById(req.params.id);
    res.status(200).json(req.account);
  } catch (error) {
    next(error);
  }
});

module.exports = router;
