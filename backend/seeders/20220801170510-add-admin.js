'use strict';
const bcrypt = require('bcrypt')

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('users', [{
      first_name: 'Sima',
      last_name: 'Tran',
      email: 'admin@example.com',
      role: 'admin',
      password_digest: await bcrypt.hash(process.env.ADMIN_PASSWORD, 10),
      created_at: new Date(),
      updated_at: new Date()
    }])
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('users', {
      email: 'admin@example.com'
    })
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};