-- Create the table in the specified schema
CREATE TABLE learnsql (
	id INT NOT NULL PRIMARY KEY,
	-- primary key column
	title_syntax VARCHAR(50) NOT NULL,
	review TEXT NOT NULL,
	rating INT NOT NULL CHECK(
		rating >= 1
		and rating <= 5
	) -- specify more columns here
);
