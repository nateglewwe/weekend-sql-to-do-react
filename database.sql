CREATE TABLE to_do_list (
	id SERIAL PRIMARY KEY,
	task varchar NOT NULL,
	completed BOOLEAN NOT NULL DEFAULT FALSE
);

INSERT INTO "to_do_list" ("task", "completed") 
VALUES ('Grocery shopping', false), ('Vacuum house', true);

INSERT INTO "to_do_list" ("task")
VALUES ('Mop floor'); --This will have completion status FALSE by default because table is created that way, see line 4
