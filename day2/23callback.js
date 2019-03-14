// problem with callback 
const id = 'tom'
$.getJSON({
url: ` https://api.github.com/users/${id}`,
success: updateUI,
error: showError,
})


// inversion control 

