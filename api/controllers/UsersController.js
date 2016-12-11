/**
 * UsersController
 *
 * @description :: Server-side logic for managing users
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
  /**
   *
   * @param req
   * @param res
   */
  list: function (req, res) {
    Users.find().exec({
      error: function (err) {
        return res.badRequest(ModelErrorService.parse(err))
      },
      success: function(users) {
        return res.json(users)
      }
    })
  },

  /**
   *
   * @param req
   * @param res
   */
  store: function (req, res) {
    Users.create(req.params.all()).exec({
      error: function (err) {
        return res.badRequest(ModelErrorService.parse(err))
      },
      success: function (user) {
        return res.json(user)
      }
    })
  },

  /**
   *
   * @param req
   * @param res
   */
  show: function (req, res) {
    var id = req.param('id')

    Users.find({"id":id}).exec({
      error: function (err) {
        return res.badRequest(ModelErrorService.parse(err))
      },
      success: function (users) {
        if (users.length < 1) {
          return res.notFound('user not found')
        }

        return res.json(users[0])
      }
    })
  },

  /**
   *
   * @param req
   * @param res
   */
  update: function (req, res) {
    var id = req.param('id')

    Users.update({"id":id}, req.params.all()).exec({
      error: function (err) {
        return res.badRequest(ModelErrorService.parse(err))
      },
      success: function (users) {
        return res.json(users[0])
      }
    })
  },

  /**
   *
   * @param req
   * @param res
   */
  destroy: function (req, res) {
    var id = req.param('id')

    Users.destroy({"id":id}).exec({
      error: function (err) {
        return res.badRequest(ModelErrorService.parse(err))
      },
      success: function () {
        return res.ok(204)
      }
    })
  }
};

