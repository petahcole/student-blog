var express = require('express');
var router = express.Router();
var knex = require("../database-connection");


/* GET home page. */
router.get('/blogs',(req, res, next) => {
  knex("blogs").then((blogs)  =>  {

  console.log(blogs);
  res.render('index', {blogs: blogs});
  });
});

router.get("/blogs/:id", (req, res, next) =>  {
  knex("blogs").where("id", req.params.id).first().then((blog)  =>  {
    res.render("post", {blog: blog})
  })
})

router.get("/create", (req, res, next)  =>  {
  res.render("create")
})

router.post("/blogs", (req, res, next) =>  {
  console.log(req.body);
  knex("blogs").insert(req.body).returning("id").then((post)  =>  {
    res.redirect("/blogs/" + post)
  });
})

router.delete("/blogs/:id", (req, res, next)  =>  {
  knex("blogs").where("id", req,params.id).delete().then((id) =>{
    res.send("Bye bye now.")
  })
})
module.exports = router;
