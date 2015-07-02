'use strict';

module.exports = {
  rules: {
    'object-shorthand': require('./rules/object-shorthand'),
    'generator-star-spacing': require('./rules/generator-star-spacing'),
    'generator-star': require('./rules/generator-star'),
    'new-cap': require('./rules/new-cap'),
    'space-in-brackets': require('./rules/space-in-brackets'),
  },
  rulesConfig: {
    'generator-star-spacing': 0,
    'generator-star': 0,
    'object-shorthand': 0,
    'new-cap': 0,
    'space-in-brackets': 0
  }
};
