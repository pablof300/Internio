require("ts-node").register();
const { Seeder } = require("mongo-seeding");

const seedConfig = {
  database: {
    host: "localhost",
    port: 27017,
    name: "internio"
  },
  dropDatabase: true
};
const seeder = new Seeder(seedConfig);
console.log("Seeding from " + __filename + "/data")
const collections = seeder.readCollectionsFromPath( __filename.replace("seed.js", "data"), {
  extensions: ["ts"],
  transformers: [Seeder.Transformers.replaceDocumentIdWithUnderscoreId]
});

seeder
  .import(collections)
  .then(() => {
    console.log("Success loading data into database");
  })
  .catch(err => {
    console.log("Error loading data into database", err);
  });
