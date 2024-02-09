
    var form = document.getElementById("my-form");
    
    async function handleSubmit(event) {
      event.preventDefault();
      var status = document.getElementById("my-form-status");
      var data = new FormData(event.target);
      fetch(event.target.action, {
        method: form.method,
        body: data,
        headers: {
            'Accept': 'application/json'
        }
      }).then(response => {
        if (response.ok) {
          status.innerHTML = "<span class='text-success'>Thanks for your submission!</span>";
          form.reset()
        } else {
          response.json().then(data => {
            if (Object.hasOwn(data, 'errors')) {
              status.innerHTML = data["errors"].map(error => error["message"]).join(", ") 
            } else {
              status.innerHTML = "<span class='text-danger'>Oops! There was a problem submitting your form </span>"
            }
          })
        }
      }).catch(error => {
        status.innerHTML = "<span class='text-danger'>Oops! There was a problem submitting your form </span>"
      });
    }
    form.addEventListener("submit", handleSubmit)
