/**
 * UsersController
 *
 * @description :: Server-side logic for managing users
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
  list: function (req, res) {

    return res.json([{name: 'Donald Trump'}]);
  },
  store: function (req, res) {
    return res.view();
  },
  show: function (req, res) {
    var id = req.param('id');

    return res.view();
  },
  update: function (req, res) {
    var id = req.param('id');

    return res.view();
  },
  destroy: function (req, res) {
    var id = req.param('id');

    return res.view();
  },
};

