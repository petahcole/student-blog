
exports.seed = function(knex, Promise) {
      return knex.raw('TRUNCATE blogs; ALTER SEQUENCE blogs_id_seq restart with 1;')
  
};
