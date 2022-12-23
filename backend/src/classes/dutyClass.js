// N
class CDuty {
  constructor(id, name) {
    this.id = id;
    this.name = name;
  }
  get getId() {
    return this.id;
  }
  get getName() {
    return this.name;
  }
  set setName(name) {
    this.name = name;
  }
}

module.exports = CDuty;
