-- Create the initial tables
CREATE TABLE inventory(
    id SERIAL PRIMARY KEY NOT NULL,
    model VARCHAR(255) NOT NULL,
    price FLOAT NOT NULL,
    image VARCHAR NOT NULL
);