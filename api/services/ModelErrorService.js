module.exports = {
  parse: function (message) {
    if (message.invalidAttributes !== undefined) {
      return module.exports.invalidAttributes(message.invalidAttributes)
    }
  },

  invalidAttributes: function (attributes) {
    var res = {}

    for (var attr in attributes) {
      attributes[attr].forEach(function (constraint) {
        if (res[attr] === undefined) {
          res[attr] = []
        }

        res[attr].push(
          module.exports.rules[constraint.rule].replace("{attribute}", attr)
        )
      })
    }

    return res
  },

  rules: {
    "string": "attribute {attribute} should be an string",
    "required": "attribute {attribute} is required",
  }
};
