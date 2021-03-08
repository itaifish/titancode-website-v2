/* eslint-disable no-undef */
/* eslint-disable @typescript-eslint/no-var-requires */
const withPlugins = require("next-compose-plugins");
const withImages = require("next-optimized-images");
const withSass = require("@zeit/next-sass");

module.exports = withPlugins([[withSass, {}], withImages]);
