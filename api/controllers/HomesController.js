/**
 * HomesController
 *
 * @description :: Server-side logic for managing Homes
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
  list: function (req, res) {
    Homes.find().exec({
      error: function (err) {
        return res.badRequest(ModelErrorService.parse({message: err}))
      },
      success: function(users) {
        return res.json(users)
      }
    })
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

