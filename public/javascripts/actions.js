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

function validateForm() {
    let $form = $("form").val()
    if ($form == "" || typeof $form !== "string") {
        alert("Invalid input");
        return false;
    }
}