/**
 * TasksController
 *
 * @description :: Server-side logic for managing Tasks
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
  list: function (req, res) {
    var userid = req.param('userid');

    return res.view();
  },
  store: function (req, res) {
    var userid = req.param('userid');

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

