-- Create the table in the specified schema
CREATE TABLE topic
(
	id BIGSERIAL NOT NULL PRIMARY KEY,
	topic_name VARCHAR(50) NOT NULL,
	lang VARCHAR(100) NOT NULL
);


CREATE TABLE note
(
	id BIGSERIAL NOT NULL PRIMARY KEY,
	topic_id BIGINT NOT NULL REFERENCES topic(id),
	code TEXT NOT NULL,
	explanation TEXT NOT NULL,
	rating INT NOT NULL CHECK(
		rating >= 1
			and rating <= 5
	)
);


insert into note
	(id, title, review, rating)
values
	(124, 'seloct*', 'easy', 4);


