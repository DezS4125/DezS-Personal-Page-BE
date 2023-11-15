const { faker } = require('@faker-js/faker');
function createPost() {
  return {
    post_title: faker.lorem.words(10),
    post_content: faker.lorem.paragraphs(3),
    upvote: faker.number.int({ min: 1, max: 300 }),
    tag_id: faker.number.int({ min: 1, max: 10 }),
  };
}

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function (knex) {
  await knex('posts').del();
  await knex('posts').insert(Array(200).fill().map(createPost));
};