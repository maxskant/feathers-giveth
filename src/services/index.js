const dacs = require('./dacs/dacs.service.js');
const milestones = require('./milestones/milestones.service.js');
const campaigns = require('./campaigns/campaigns.service.js');
const users = require('./users/users.service.js');
const uploads = require('./uploads/uploads.service.js');
const donations = require('./donations/donations.service.js');
import challenges from './challenges/challenges.service.js';
const whitelist = require('./whitelist/whitelist.service.js');
const gasprice = require('./gasprice/gasprice.service.js');
import pledgeAdmins from './pledgeAdmins/pledgeAdmins.service';
import donationsHistory from './donationsHistory/donationsHistory.service';
import donationTokens from './donationTokens/donationTokens.service';


module.exports = function () {
  const app = this;
  app.configure(dacs);
  app.configure(milestones);
  app.configure(campaigns);
  app.configure(users);
  app.configure(uploads);
  app.configure(donationsHistory);
  app.configure(donations);
  app.configure(challenges);
  app.configure(pledgeAdmins);
  app.configure(donationTokens);
  app.configure(whitelist);
  app.configure(gasprice);
};
