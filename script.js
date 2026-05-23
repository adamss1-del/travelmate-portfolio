// Skills (AI-generated)
const skills = ["HTML", "CSS", "JavaScript", "API Integration"];

const skillsList = document.getElementById("skills");

skills.forEach(skill => {
  const li = document.createElement("li");
  li.textContent = skill;
  skillsList.appendChild(li);
});

// 🌍 TravelMate Main Function
async function getTravelData() {
  const city = document.getElementById("city").value;
  const results = document.getElementById("results");

  if (!city) {
    results.innerHTML = "Please enter a city.";
    return;
  }

  const apiKey = "99abd94b1dcb8a584a71ba27cf0f115a";

  try {
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`
    );

    const data = await response.json();

    const temp = data.main.temp;
    const weather = data.weather[0].description;

    // Simple travel tips logic
    let tip = "";

    if (temp > 30) {
      tip = "It's hot! Bring sunscreen and stay hydrated.";
    } else if (temp < 10) {
      tip = "Cold weather! Pack warm clothes.";
    } else {
      tip = "Great weather for exploring!";
    }

    results.innerHTML = `
      <h3>${city}</h3>
      <p>Temperature: ${temp}°C</p>
      <p>Condition: ${weather}</p>
      <p>Tip: ${tip}</p>
    `;

  } catch (error) {
    results.innerHTML = "Error fetching travel data.";
  }
}

// 🌙 Dark Mode
function toggleTheme() {
  document.body.classList.toggle("dark");
}
