-- Create the table in the specified schema
CREATE TABLE note
(
	id BIGSERIAL NOT NULL PRIMARY KEY,
	title VARCHAR(50) NOT NULL,
	review TEXT NOT NULL,
	rating INT NOT NULL CHECK(
		rating >= 1
			and rating <= 5
	)
);


insert into note
	(id, title, review, rating)
values
	(124, 'seloct*', 'easy', 4);


