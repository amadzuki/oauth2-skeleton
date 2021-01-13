'use strict'
const bcrypt = require('bcrypt')
const saltRounds = 11
const demoPassword = process.env.DEMO_USER_PASS

module.exports = {
  up: async (queryInterface) => {
    await queryInterface.bulkInsert(
      'users',
      [
        {
          name: 'Soekarno',
          username: 'soekarno',
          email: 'soekarno@president.id',
          hash: await bcrypt.hash(demoPassword, saltRounds),
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: 'Soeharto',
          username: 'soeharto',
          email: 'soeharto@president.id',
          hash: await bcrypt.hash(demoPassword, saltRounds),
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: 'B. J. Habibie',
          username: 'bjhabibie',
          email: 'bjhabibie@president.id',
          hash: await bcrypt.hash(demoPassword, saltRounds),
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: 'Abdurrahman Wahid',
          username: 'gusdur',
          email: 'gusdur@president.id',
          hash: await bcrypt.hash(demoPassword, saltRounds),
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: 'Megawati Soekarnoputri',
          username: 'megawati',
          email: 'megawati@president.id',
          hash: await bcrypt.hash(demoPassword, saltRounds),
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: 'Susilo Bambang Yudhoyono',
          username: 'esbeye',
          email: 'esbeye@president.id',
          hash: await bcrypt.hash(demoPassword, saltRounds),
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: 'Joko Widodo',
          username: 'jokowi',
          email: 'jokowi@president.id',
          hash: await bcrypt.hash(demoPassword, saltRounds),
          created_at: new Date(),
          updated_at: new Date(),
        },
      ],
      {}
    )
  },

  down: async (queryInterface) => {
    await queryInterface.bulkDelete('users', null, {
      truncate: true,
      restartIdentity: true,
    })
  },
}
