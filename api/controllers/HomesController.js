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
      success: function(homes) {
        return res.json(homes)
      }
    })
  },
  store: function (req, res) {
    Homes.create(req.params.all()).exec({
      error: function (err) {
        return res.badRequest(ModelErrorService.parse({message: err}))
      },
      success: function (homes) {
        return res.json(homes)
      }
    })
  },
  show: function (req, res) {
    var id = req.param('id')

    Homes.find({"id":id}).exec({
      error: function (err) {
        return res.badRequest(ModelErrorService.parse({message: err}))
      },
      success: function (homes) {
        if (homes.length < 1) {
          return res.notFound('user not found')
        }

        return res.json(homes[0])
      }
    })
  },
  update: function (req, res) {
    var id = req.param('id')

    Homes.update({"id":id}, req.params.all()).exec({
      error: function (err) {
        return res.badRequest(ModelErrorService.parse({message: err}))
      },
      success: function (homes) {
        return res.json(homes[0])
      }
    })
  },
  destroy: function (req, res) {
    var id = req.param('id')

    Homes.destroy({"id":id}).exec({
      error: function (err) {
        return res.badRequest(ModelErrorService.parse({message: err}))
      },
      success: function () {
        return res.ok(204)
      }
    })
  },
};

