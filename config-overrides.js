// getting the values of useBabelRC
// useBableRc allows me to use a bable config file in create react app
// overide helps  to overide cra setups
const { useBabelRc, override } = require('customize-cra');

module.exports = override(useBabelRc());
