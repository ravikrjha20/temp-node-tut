const os = require("os");
const user = os.userInfo();
// console.log(user)
console.log(os.uptime() / 3600);

const currentos = {
  name: os.type(),
  release: os.release(),
  totalmem: os.totalmem(),
  freeMem: os.freemem(),
};
console.log(currentos);
