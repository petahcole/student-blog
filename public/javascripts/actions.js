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
    let $form = $(".form");
  if (!$form) {
    alert("No input")
    return false
  } 
  if (!$form.firstName || !$form.lastName || !$form.cohortID || !$form.post)  {
    alert(`Missing input value`);
    return false
  }
  if (typeof $form.firstName !== "string" || typeof $form.lastName !== "string" || typeof $form.cohortID !== "string" || typeof $form.post !== "string")  {
    alert("Please only use text");
    return false
  }
  
} 