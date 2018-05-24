exports.seed = (knex, Promise) => (
  knex('users').del()
    .then(() => (
      knex('users').insert([{
        id: 1,
        username: 'hello@me.com',
        password: '$2a$10$X8oMGPVpcU33L/YGR7caTOIYnMLkt.Gv5WFWGom.q28V73Qlad6d2'
      }])
    ))
    .then(() => knex.raw(`SELECT setval('users_id_seq', (SELECT MAX(id) FROM users));`))
)
