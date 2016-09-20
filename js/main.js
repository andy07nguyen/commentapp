function getInfo() {
	var username = document.getElementById("userInfo").value
	var comment = document.getElementById("userComment").value
	var image = document.getElementById("userPic").value

	var newUsername = document.createElement("h2")
	var newComment = document.createElement("p")

	var textUsername = document.createTextNode("Username: " + username)
	var textComment = document.createTextNode("Comment: " + comment)

	var newLi1 = document.createElement("li")
	var newLi2 = document.createElement("li")


	var newImg = document.createElement("img")
	newImg.setAttribute("src", image)


	newLi1.appendChild(textUsername)
	newLi2.appendChild(textComment)
	document.getElementById("list").appendChild(newLi1)
	document.getElementById("list").appendChild(newLi2)
	document.getElementById("dateTime").innerHTML = Date();
	document.getElementById("img0").appendChild(newImg)


	if(image === "") {
		newImg.setAttribute("src", "https://walter.trakt.us/images/shows/000/093/720/posters/thumb/e90844dd99.jpg")
	}

	// newUsername.appendChild(textUsername)
	// document.getElementById("displayUsername").appendChild(newUsername)

	// newComment.appendChild(textComment)
	// document.getElementById("displayComment").appendChild(newComment)
}