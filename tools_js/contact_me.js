

$(document).ready ->
  $('#contact_form').submit (e) ->
    name = document.getElementById('contact_name')
    email = document.getElementById('contact_email')
    message = document.getElementById('contact_message')
    if !name.value or !email.value or !message.value
      alertify.error 'please check your entries'
      return false
    else
      $.ajax
        method: 'POST'
        url: 'https://formspree.io/xyyyzwwb'
        data: $('#contact-form').serialize()
        datatype: 'json'
      e.preventDefault()
      $(this).get(0).reset()
      alertify.success 'message sent'