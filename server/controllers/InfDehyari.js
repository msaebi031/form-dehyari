const InfDehyari = require("../models/infDehyari");

const CreateInfDehyari = async ({ name, admin, account }) => {
  const checkExistingUser = await InfDehyari.findOne({ where: { name } });
  if (!checkExistingUser) await InfDehyari.create({ name, admin, account });
};

const SelectInfDehyari = async ({ id }) => {
  const data = await InfDehyari.findOne({ where: { id } });
  return data;
};

const SelectAllInfDehyari = async () => {
  const data = await InfDehyari.findAll();
  return data;
};

const UpdateInfDehyari = async ({ id }, object) => {
  await InfDehyari.update(object, { where: { id } });
};
module.exports = { CreateInfDehyari, SelectInfDehyari, SelectAllInfDehyari, UpdateInfDehyari };
