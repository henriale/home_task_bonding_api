/**
 * Users.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {
  schema: true,

  attributes: {
    id: {
      type: 'integer',
      primaryKey: true,
      autoIncrement: true
    },
    firstName: {
      type: 'string'
    },
    lastName: {
      type: 'string'
    },
    email: {
      type: 'string',
      unique: true,
      required: true
    },
    username: {
      type: 'string',
      unique: true,
      required: true
    },
    phone: {
      type: 'string'
    },
    status: {
      type: 'integer',
      defaultsTo: 1
    }
  },
};

