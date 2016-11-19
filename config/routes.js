/**
 * Route Mappings
 * (sails.config.routes)
 *
 * Your routes map URLs to views and controllers.
 *
 * If Sails receives a URL that doesn't match any of the routes below,
 * it will check for matching files (images, scripts, stylesheets, etc.)
 * in your assets directory.  e.g. `http://localhost:1337/images/foo.jpg`
 * might match an image file: `/assets/images/foo.jpg`
 *
 * Finally, if those don't match either, the default 404 handler is triggered.
 * See `api/responses/notFound.js` to adjust your app's 404 logic.
 *
 * Note: Sails doesn't ACTUALLY serve stuff from `assets`-- the default Gruntfile in Sails copies
 * flat files from `assets` to `.tmp/public`.  This allows you to do things like compile LESS or
 * CoffeeScript for the front-end.
 *
 * For more information on configuring custom routes, check out:
 * http://sailsjs.org/#!/documentation/concepts/Routes/RouteTargetSyntax.html
 */

module.exports.routes = {

  /***************************************************************************
  *                                                                          *
  * Make the view located at `views/homepage.ejs` (or `views/homepage.jade`, *
  * etc. depending on your default view engine) your home page.              *
  *                                                                          *
  * (Alternatively, remove this and add an `index.html` file in your         *
  * `assets` directory)                                                      *
  *                                                                          *
  ***************************************************************************/

  'GET /': {
    view: 'homepage'
  },

  'GET /user': {
    controller: 'Users',
    action: 'list'
  },
  'POST /user': {
    controller: 'Users',
    action: 'store'
  },
  'GET /user/:id': {
    controller: 'Users',
    action: 'show'
  },
  'PUT /user/:id': {
    controller: 'Users',
    action: 'update'
  },
  'DELETE /user/:id': {
    controller: 'Users',
    action: 'destroy'
  },
  'GET /user/:userid/task': {
    controller: 'Tasks',
    action: 'list'
  },
  'POST /user/:userid/task': {
    controller: 'Tasks',
    action: 'store'
  },
  'GET /user/:userid/home': {
    controller: 'Homes',
    action: 'list'
  },
  'POST /user/:userid/home': {
    controller: 'Homes',
    action: 'store'
  },

  'GET /task/:id': {
    controller: 'Tasks',
    action: 'show'
  },
  'PUT /task/:id': {
    controller: 'Tasks',
    action: 'update'
  },
  'DELETE /task/:id': {
    controller: 'Tasks',
    action: 'destroy'
  },

  'GET /home/:id': {
    controller: 'Homes',
    action: 'show'
  },
  'PUT /home/:id': {
    controller: 'Homes',
    action: 'update'
  },
  'DELETE /home/:id': {
    controller: 'Homes',
    action: 'destroy'
  },

  /***************************************************************************
  *                                                                          *
  * Custom routes here...                                                    *
  *                                                                          *
  * If a request to a URL doesn't match any of the custom routes above, it   *
  * is matched against Sails route blueprints. See `config/blueprints.js`    *
  * for configuration options and examples.                                  *
  *                                                                          *
  ***************************************************************************/

};
