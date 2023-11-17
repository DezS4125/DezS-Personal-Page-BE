const knex = require('../database/knex');

function createContactsService(){
    async function getAllPosts() {
        try {
            const posts = await knex.select('post_id', 'post_title', 'post_content', 'upvote', 'posts.tag_id', 'tag_name')
                .from('posts')
                .join('tags', 'posts.tag_id', '=', 'tags.tag_id')
                .orderBy('post_id')
            return posts;
        } catch (error) {
            console.error(error);
            throw error;
        }
    }
    async function getPostByTag(tagId) {
        try {
            const posts = await knex.select('post_id', 'post_title', 'post_content', 'upvote', 'posts.tag_id', 'tag_name')
                .from('posts')
                .join('tags', 'posts.tag_id', '=', 'tags.tag_id')
                .orderBy('post_id')
                .where('posts.tag_id', '=', tagId);
            return posts;
        } catch (error) {
            console.error(error);
            throw error;
        }
    }


    async function getAllTags() {
        try {
            const tags = await knex.select('*').from('tags');
            return tags;
        } catch (error) {
            console.error(error);
            throw error;
        }
    }
    async function searchPost(searchString) {
        try {
            let query1 = knex('posts').where('post_title', 'like', `%${searchString}%`).select();
            let query2 = knex('posts').where('post_content', 'like', `%${searchString}%`).select();
            let posts = await knex.union([query1, query2])
            console.log(posts);
            return posts;
        } catch (error) {
            console.error(error);
            throw error;
        }
    }
    async function upvote(postId){
        try {
            knex('posts')
                .where('post_id', postId)
                .increment('upvote', 1)
                .then(() => console.log(`Upvoted post ${postId}`))
                .catch((error) => console.error(`Error upvoting post ${postId}:`, error));
        } catch (error) {
            console.error(error);
            throw error;
        }
    }
    async function downvote(postId){
        try {
            knex('posts')
                .where('post_id', postId)
                .increment('upvote', -1)
                .then(() => console.log(`Downvoted post ${postId}`))
                .catch((error) => console.error(`Error upvoting post ${postId}:`, error));
        } catch (error) {
            console.error(error);
            throw error;
        }
    }
    return {
        getAllPosts,
        getAllTags,
        getPostByTag,
        searchPost,
        upvote,
        downvote
    };
}
module.exports = createContactsService;