console.log("working!")


$(() => {
  $('#delete').click(function () {
    let id = $(this).attr('data-id');
    $.ajax({
      method: 'delete',
      url: `/blogs/${id}`,
      success: function () {
        location = "/blogs";
      },
      fail: function (err) {
        console.log(err);
      }
    });
  })
})

function validateForm()  {
    let $form = $("form").val();
    console.log($form);
//   if (!post) {
//     return false
//   } 
//   if (!post.firstName || !post.lastName || !post.cohortID || !post.post)  {
//     return false
//   }
//   if (typeof post.firstName !== "string" || typeof post.lastName !== "string" || typeof post.cohortID !== "string" || typeof post.post !== "string")  {
//     return false
//   }
//   return true
} 