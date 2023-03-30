import { CreateInfDehyari } from "../controllers/InfDehyari";
import { CreateLogin } from "../controllers/login";

const CreateInfCron = () => {
  const array = [
    { name: "حسین آباد", admin: "رضا صائبی", account: 1575785747257 },
    { name: "نسیم آباد", admin: "محسن ترکی", account: 1575787424557 },
  ];

  array.forEach((element) => {
    CreateInfDehyari({ name: element.name, admin: element.admin, account: element.account });
  });

  CreateLogin({ email: "heydari", password: 123456 });
};

export default CreateInfCron;
