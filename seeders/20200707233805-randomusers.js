'use strict';

module.exports = {

  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Services', [
      {
        nick_name: 'My First Property in Buckhead',
        sq_ft: '1250',
        address: '3324 Peachtree RD NE',
        city: 'Atlanta',
        state: 'GA',
        zipcode: '30326',
        price: '300',
        completed: true,
        reschedule: false,
        schedule_confirm: false,
        payment_id: '1',
        service_date: null,
        img_url: 'https://my.matterport.com/show/?m=CoPaqg84uwx&brand=0',
        createdAt: new Date(),
        updatedAt: new Date(),

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
        img_url: 'https://my.matterport.com/show/?m=CoPaqg84uwx&brand=0',
        createdAt: new Date(),
        updatedAt: new Date(),
      }
    ])
    return await queryInterface.bulkInsert('Customers', [
      {
        first_name: 'Sam',
        last_name: 'Sammy',
        email: 'sam@email.com',
        login_password: '$2b$10$y5WE60HrD8AmlP1sehNfx.VZrQnSZeNnSUvXz0aDOJxKjn4BK3Ho6',
        phone_number: '1112222',
        is_admin: false,
        createdAt: new Date(),
        updatedAt: new Date(),
      }, {
        first_name: 'Authorized',
        last_name: 'User',
        email: 'authorized@gmail.com',
        login_password: '$2b$10$y5WE60HrD8AmlP1sehNfx.VZrQnSZeNnSUvXz0aDOJxKjn4BK3Ho6',
        phone_number: '5555555555',
        is_admin: true,
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
