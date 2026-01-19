const statusDiv = document.getElementById("status");
const userCard = document.getElementById("userCard");
const refreshBtn = document.getElementById("refreshBtn");

async function fetchUser() {
  statusDiv.style.display = "block";
  userCard.style.display = "none";
  statusDiv.innerText = "Loading...";

  try {
    const res = await fetch("https://randomuser.me/api/");
    
    if (!res.ok) throw new Error("Network error");

    const data = await res.json();
    const user = data.results[0];

    document.getElementById("photo").src = user.picture.large;
    document.getElementById("name").innerText = user.name.first + " " + user.name.last;
    document.getElementById("email").innerText = user.email;
    document.getElementById("country").innerText = user.location.country;

    statusDiv.style.display = "none";
    userCard.style.display = "block";

  } catch (err) {
    statusDiv.innerText = "Failed to fetch data!";
  }
}

refreshBtn.addEventListener("click", fetchUser);

fetchUser();
