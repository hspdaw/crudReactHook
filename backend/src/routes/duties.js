const { Router } = require("express");
const router = Router();

const { getDuties, createDuty, getDuty , updateDuty, deleteDuty} = require("../controllers/duties.controller");

router.route("/")
        .get(getDuties)
        .post(createDuty);

router.route("/:id")
        .get(getDuty)
        .put(updateDuty)
        .delete(deleteDuty);

module.exports = router;
