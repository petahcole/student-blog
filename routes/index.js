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
  knex("blogs").where("id", req.params.id).delete().then((id) =>  {
    res.send("Bye bye now.")
  })
})

router.get("/edit/:id", (req, res, next)  =>  {
knex("blogs").where("id", req.params.id).first().then((blog)  =>  {
  res.render("edit", {blog: blog})
  })
})

router.put("/blogs/:id", (req, res, next) =>  {
if (isValidPost(req.body))  {
    knex("blogs").where("id", req.params.id).update({
      "firstName": req.body.firstName,
      "lastName": req.body.lastName,
      "cohortID": req.body.cohortID,
      "post": req.body.post
      }).then((blog) =>  {
      res.redirect("/blogs")
    })
  } else {
    res.render("error", {message: "Invalid Input"})
  }
})

function isValidPost(post)  {
  if (!post) {
    return false
  } 
  if (!post.firstName || !post.lastName || !post.cohortID || !post.post)  {
    return false
  }
  if (typeof post.firstName !== "string" || typeof post.lastName !== "string" || typeof post.cohortID !== "string" || typeof post.post !== "string")  {
    return false
  }
  return true
} 
module.exports = router;
