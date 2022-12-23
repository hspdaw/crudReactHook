const dutiesCtrl = {}

const Duty = require('../models/Duty');

dutiesCtrl.deleteDuty = async (req, res) => {
    await Duty.findByIdAndDelete(req.params.id)
    res.json('Duty Deleted')
}
dutiesCtrl.updateDuty = async (req, res) => {
    const { data } = req.body;
    await Duty.findByIdAndUpdate(req.params.id, 
        data.name
    );
    res.json('Duty Updated')
}
dutiesCtrl.getDuty = async (req, res) => {
    const duty = await Duty.findById(req.params.id)
    res.json(duty.rows[0])
}
dutiesCtrl.createDuty = async (req, res) => {
    const { data } = req.body;
    await Duty.create(data.name)
    res.json('New Duty added')
}
dutiesCtrl.getDuties = async (req, res) => {
    const duties = await Duty.findAll()
    res.json(duties.rows)
}

module.exports = dutiesCtrl