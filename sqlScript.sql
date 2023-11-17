create database personalWebsite;
use personalWebsite;


drop table if exists tags;
CREATE TABLE `tags` (
`tag_id` INT(10) UNSIGNED NOT NULL AUTO_INCREMENT,
`tag_name` VARCHAR(20) NOT NULL,
PRIMARY KEY (`tag_id`)
);

drop table if exists posts;
CREATE TABLE `posts` (
`post_id` INT(10) UNSIGNED NOT NULL AUTO_INCREMENT,
`post_title` VARCHAR(200) NOT NULL,
`post_content` VARCHAR(10000) NOT NULL,
`upvote` INT(10),
`tag_id` INT(10) UNSIGNED NOT NULL,
PRIMARY KEY (`post_id`),
FOREIGN KEY (`tag_id`) REFERENCES `tags`(`tag_id`)
);

-- drop table if exists comments;
-- CREATE TABLE comments (
--     comments_id INT(10) UNSIGNED NOT NULL PRIMARY KEY,
--     post_id INT(10) UNSIGNED NOT NULL,
--     comments_content TEXT
--     FOREIGN KEY (post_id) REFERENCES posts(post_id)
-- );

SHOW ERRORS;

INSERT INTO tags (tag_name) VALUES
('internet'),
('wifi'),
('technology'),
('tecnologia'),
('marketing'),
('fibraoptica'),
('instagram'),
('network'),
('web'),
('computer');

select * from tags;
select * from posts;
select post_id, post_title, post_content, upvote, posts.tag_id, tag_name from posts 
	join tags
	on posts.tag_id = tags.tag_id
    order by post_id;
    
select * from posts where post_title like concat('%','similique','%')
union (select * from posts where post_content like concat('%','similique','%'));
UPDATE posts
SET upvote = upvote + 1
WHERE post_id = 1;
INSERT INTO `posts` (`post_title`, `post_content`, `upvote`, `tag_id`)
VALUES ('testtitle', 'test content', 2, 3);
