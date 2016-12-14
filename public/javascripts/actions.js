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

$(".submit").click(function(event)   {
    //  event.preventDefault()
  if(validateForm() == false)   {
       event.preventDefault()
  }
})

function validateForm()  {
    let postObj = {}
    postObj.firstName = $("#first_name").val();
    postObj.lastName = $("#last_name").val();
    postObj.cohortID = $("#cohortID").val();
    postObj.post = $("#post").val();

  if ((typeof postObj.firstName == "string" && postObj.firstName.trim() != "" && isNaN(postObj.firstName)) &&
       (typeof postObj.lastName == "string" && postObj.lastName.trim() != "" && isNaN(postObj.lastName)) &&
       (typeof postObj.cohortID == "string" && postObj.cohortID.trim() != "" && isNaN(postObj.cohortID)) &&
       (typeof postObj.post == "string" && postObj.post.trim() != "" && isNaN(postObj.post)) )
  {
    return true
  } 
  return false
}