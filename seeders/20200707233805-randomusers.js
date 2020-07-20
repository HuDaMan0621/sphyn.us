'use strict';

module.exports = {

  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Services', [
      {
        nick_name: 'First sweet home',
        sq_ft: '3000',
        address: '204 Manous Way',
        city: 'Canton',
        state: 'GA',
        zipcode: '30115',
        price: '300',
        completed: true,
        reschedule: false,
        schedule_confirm: false,
        payment_id: '1',
        service_date: null,
        matterport: 'https://my.matterport.com/show/?m=CoPaqg84uwx&brand=0',
        createdAt: new Date(),
        updatedAt: new Date(),
      }
    ])
    return await queryInterface.bulkInsert('Customers', [
      {
        first_name: 'John',
        last_name: 'Doe',
        email: 'JohnDoe@John.com',

        login_password: 'password',
        createdAt: new Date(),
        updatedAt: new Date(),
      }, {
        first_name: 'Bobby',
        last_name: 'Bobs',
        email: 'BobbyBobs@Bobs.com',
        login_password: 'password',
        phone_number: '1112222',
        createdAt: new Date(),
        updatedAt: new Date(),
      }, {
        first_name: 'Sam',
        last_name: 'Sammy',
        email: 'test@email.com',
        login_password: '$2b$10$g5HBNZzSpAI574Yk7mcvFOToqHTnWPWMHInMmxnDX6JN31XXW3Ta.',
        phone_number: '1112222',
        createdAt: new Date(),
        updatedAt: new Date(),
      }, {
        first_name: 'Authorized',
        last_name: 'User',
        email: 'authorized@gmail.com',
        login_password: '$2b$10$y5WE60HrD8AmlP1sehNfx.VZrQnSZeNnSUvXz0aDOJxKjn4BK3Ho6',
        phone_number: '5555555555',
        createdAt: new Date(),
        updatedAt: new Date(),
      }
    ], {})

    down: async (queryInterface, Sequelize) => {
      await queryInterface.bulkDelete('Services', null, {})
      await queryInterface.bulkDelete('Customer', null, {})
    }
  }
};
