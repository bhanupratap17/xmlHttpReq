const requestUrl = 'https://api.github.com/users/bhanupratap17'
    // Creates a new XMLHttpRequest object
    const xhr = new XMLHttpRequest();
    //Specifies the request
    xhr.open('GET',requestUrl)

    xhr.onreadystatechange = function()
    {
        console.log(xhr.readyState);
         if (xhr.readyState === 4 && xhr.status === 200) {
        const data = JSON.parse(this.responseText);

        // Set the user data in the card
        document.getElementById('avatar').src = data.avatar_url;
        document.getElementById('username').textContent = data.name || data.login;
        document.getElementById('bio').textContent = data.bio || 'No bio available';
        document.getElementById('location').textContent = data.location || 'Location not provided';
        document.getElementById('followers').textContent = data.followers;
        document.getElementById('repos').textContent = data.public_repos;
        document.getElementById('gists').textContent = data.public_gists;
        document.getElementById('joined').textContent = new Date(data.created_at).toDateString();
    }
    }
    xhr.send();