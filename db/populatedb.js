#! /usr/bin/env node

require('dotenv').config()

const { Client } = require('pg')

const SQL = `
CREATE TABLE IF NOT EXISTS habitats (
  id INTEGER PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
  habitat_name VARCHAR(255) NOT NULL,
  superpower VARCHAR(255) NOT NULL,
  img TEXT NOT NULL
);

INSERT INTO habitats (habitat_name, superpower, img)
VALUES 
  ('Enchanted Forest', 'Invisibility', 'https://images.unsplash.com/photo-1518562180175-34a163b1a9a6?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'),
  ('Mystic Mountain', 'Flight', 'https://images.unsplash.com/photo-1508860639366-a31bb8d06e97?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'),
  ('Crystal Lake', 'Water Breathing', 'https://images.unsplash.com/photo-1534447677768-be436bb09401?q=80&w=2094&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D');


CREATE TABLE IF NOT EXISTS creatures (
  id SERIAL PRIMARY KEY,
  name VARCHAR(255) UNIQUE NOT NULL,
  nickname VARCHAR(50) UNIQUE NOT NULL,
  class_name VARCHAR(255) NOT NULL,
  speed INTEGER NOT NULL,       
  max_weight INTEGER NOT NULL,  
  lifespan INTEGER NOT NULL,    
  habitat_id INTEGER NOT NULL,
  FOREIGN KEY (habitat_id) REFERENCES habitats(id),
  img TEXT NOT NULL
);

INSERT INTO creatures (name, nickname, class_name, speed, max_weight, lifespan, habitat_id, img)
VALUES 
  ('Smaug', 'Sm', 'Dragon', 80, 5000, 1000, 1, 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d8/Friedrich-Johann-Justin-Bertuch_Mythical-Creature-Dragon_1806.jpg/300px-Friedrich-Johann-Justin-Bertuch_Mythical-Creature-Dragon_1806.jpg'),
  ('Draco', 'Dr', 'Dragon', 80, 5000, 1000, 1, 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/24/Chinese_dragon_asset_heraldry.svg/330px-Chinese_dragon_asset_heraldry.svg.png'),
  ('Silvermane', 'Sil', 'Unicorn', 50, 1200, 500, 1, 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/70/Oftheunicorn.jpg/220px-Oftheunicorn.jpg'),
  ('Luna', 'Lu', 'Unicorn', 50, 1200, 500, 1, 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/82/DomenichinounicornPalFarnese.jpg/330px-DomenichinounicornPalFarnese.jpg'),
  ('Fawkes', 'Faw', 'Phoenix', 200, 100, 500, 2, 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c4/Phoenix_%281583%29.svg/330px-Phoenix_%281583%29.svg.png'),
  ('Inferno', 'Inf', 'Phoenix', 200, 100, 500, 2, 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/43/Phoenix-Fabelwesen.jpg/220px-Phoenix-Fabelwesen.jpg'),
  ('Griff', 'Gr', 'Griffin', 100, 1500, 300, 2, 'https://media.mythopedia.com/1lIW08IDTwCm9M1Ts0fp75/281227928a0802deeaac2cbdfbb9b504/griffioen-antonio-tempesta-ca-1650.jpg'),
  ('Aquila', 'Aq', 'Griffin', 100, 1500, 300, 2, 'https://miro.medium.com/v2/resize:fit:1089/1*D4wX807zD8aJwRLtNEKGvQ.jpeg'),
  ('Mira', 'Mir', 'Mermaid', 25, 300, 200, 3, 'https://www.rmg.co.uk/sites/default/files/styles/max_width_1440/public/1600px-072_Ramakien_Murals_%289150815520%29.jpg?itok=Gn2rC1dD'),
  ('Sirena', 'Sir', 'Mermaid', 25, 300, 200, 3, 'https://ancworlds.wordpress.com/wp-content/uploads/2017/12/three_sirens_from_the_ballet_comique_de_la_reine.jpg'),
  ('Domovoi', 'Lev', 'Progenitor', 25, 300, 200, 3, 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSUP2CoIcW4oCPq2m8H0s5mNKJbdyb21I_5Ow&s'),
  ('Nereus', 'Ner', 'Bird', 25, 300, 200, 3, 'https://i0.wp.com/www.ancient-origins.net/sites/default/files/field/image/Viktor-Vasnetsov.jpg');

`

async function main() {
  console.log('seeding...')

  const client = new Client({
    user: process.env.USER,
    host: process.env.DATABASE_HOST,
    database: process.env.DATABASE_NAME,
    password: process.env.DATABASE_PASSWORD,
    port: process.env.DATABASE_PORT,
  })
  await client.connect()
  await client.query(SQL)
  await client.end()
  console.log('done')
}

main()
