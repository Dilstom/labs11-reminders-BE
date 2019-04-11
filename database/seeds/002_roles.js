exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return (
    knex('roles')
      //.truncate()
      .then(function() {
        // Inserts seed entries
        return knex('roles').insert([
          { title: 'Teacher' },
          { title: 'Student' },
          { title: 'Country Manager' },
          { title: 'Board Member' },
        ]);
      })
  );
};
