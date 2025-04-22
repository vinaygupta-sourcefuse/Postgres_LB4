'use strict';

exports.up = function (db, callback) {
  db.createTable('user', {
    id: { type: 'int', primaryKey: true, autoIncrement: true },
    name: { type: 'string', length: 100 },
    email: { type: 'string', length: 150 },
    created_at: {
      type: 'timestamp',
      defaultValue: new String('CURRENT_TIMESTAMP'),
    },
    updated_at: {
      type: 'timestamp',
      defaultValue: new String('CURRENT_TIMESTAMP'),
    },
  }, callback);
};

exports.down = function (db, callback) {
  db.dropTable('user', callback);
};
