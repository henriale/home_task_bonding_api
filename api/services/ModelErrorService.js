var self = {
  /**
   *
   * @required {Object} message
   *  The model error response
   */
  parse: function (options) {
    if (options.message.invalidAttributes !== undefined) {
      return self.invalidAttributes(options.message.invalidAttributes)
    }

    return {}
  },

  invalidAttributes: function (attributes) {
    var res = {}

    for (var attr in attributes) {
      attributes[attr].forEach(function (constraint) {
        if (res[attr] === undefined) {
          res[attr] = []
        }

        res[attr].push(
          self.rules[constraint.rule].replace("{attribute}", attr)
        )
      })
    }

    return res
  },

  rules: {
    "string": "attribute {attribute} should be an string",
    "required": "attribute {attribute} is required",
  }
}

module.exports = self
