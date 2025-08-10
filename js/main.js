const btnFriends = document.getElementById("btnFriends");
const btnGroup = document.getElementById("btnGroup");

function activateButton(btn) {
  btnFriends.classList.remove("active");
  btnGroup.classList.remove("active");
  btn.classList.add("active");
}

btnFriends.addEventListener("click", () => {
  activateButton(btnFriends);
  console.log("Friends Chat Activated");
  // TODO: Show friends chat UI
});

btnGroup.addEventListener("click", () => {
  activateButton(btnGroup);
  console.log("Group Chat Activated");
  // TODO: Show group chat UI
});

// Default active button on page load
activateButton(btnFriends);
