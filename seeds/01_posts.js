
exports.seed = function(knex, Promise) {

  return knex('blogs').del()
    .then(function () {
      const seedBlogs = [{
        "firstName": "Cole",
        "lastName": "Batson",
        "cohortID": "G38",
        "post": "So I made this app and I didn't cry too much."
      },{
        "firstName": "Phil",
        "lastName": "Cunnell",
        "cohortID": "G38",
        "post": "Guys, I promise I eat food."
      },{
        "firstName": "Murph",
        "lastName": "Granger",
        "cohortID": "G38",
        "post": "How are the greens rolling today?"
      },{
        "firstName": "Mike",
        "lastName": "Roque",
        "cohortID": "G38",
        "post": "I got the jerky. I always get the jerky"
      },{
        "firstName": "Aaron",
        "lastName": "Goodman",
        "cohortID": "G38",
        "post": "I'm tired of hiking 14ers. Do they have any 18ers?"
      },{
        "firstName": "Dillon",
        "lastName": "Corkran",
        "cohortID": "G38",
        "post": "My roommate still owes me a propane tank."
      },{
        "firstName": "Steven",
        "lastName": "Castroverde",
        "cohortID": "G38",
        "post": "I am the Giphy wizard!"
      },{
        "firstName": "Cass",
        "lastName": "Torske",
        "cohortID": "G38",
        "post": "I play a mean clarinet solo. No practice, no squeaking."
      },{
        "firstName": "Zac",
        "lastName": "Jocelyn",
        "cohortID": "G38",
        "post": "Whispercore. Speak softly and carry a big guitar"
      },{
        "firstName": "CJ",
        "lastName": "Reynolds",
        "cohortID": "G38",
        "post": "It's not rocket surgery, and I still can't pronounce brrrwwwrrryyy"
      }];
      return knex("blogs").insert(seedBlogs);
    });
};
