const Account = require("./accounts-model");

exports.checkAccountPayload = async (req, res, next) => {
  try {
    const AccountStatus = (await req.body.name) && req.body.budget;
    if (!AccountStatus) {
      res.status(400).json({ message: "name and budget are required" });
    } else if (req.body.name < 3 || req.body.name > 100) {
      res
        .status(400)
        .json({ message: "name of account must be between 3 and 100" });
    } else if (typeof req.body.budget !== "number") {
      res.status(400).json({ message: "budget of account must be a number" });
    } else if (req.body.budget < 0 || req.body.budget > 1000000) {
      res
        .status(400)
        .json({ message: "budget of account is too large or too small" });
    } else {
      next();
    }
  } catch (error) {
    next(error);
  }
};

exports.checkAccountNameUnique = async (req, res, next) => {
  try {
    const AccountName = await Account.getByName(req.body.name);
    if (AccountName) {
      res
        .status(400)
        .json({ message: "Bu isim alınmış. Lütfen başka bir isim deneyiniz." });
    } else {
      next();
    }
  } catch (error) {
    next(error);
  }
};

exports.checkAccountId = async (req, res, next) => {
  try {
    const AccountId = await Account.getById(req.params.id);
    if (!AccountId) {
      res.status(404).json({ message: "account not found" });
    } else {
      req.account = AccountId;
      next();
    }
  } catch (error) {
    next(error);
  }
};
