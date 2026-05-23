async function getTravelData() {
  const city = document.getElementById("city").value;
  const results = document.getElementById("results");

  if (!city) {
    results.innerHTML = "Please enter a destination.";
    return;
  }

  const apiKey = "YOUR_API_KEY_HERE";

  try {
    const res = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`
    );

    const data = await res.json();

    const temp = data.main.temp;
    const weather = data.weather[0].description;
    const humidity = data.main.humidity;

    // Travel tips logic
    let tip = "";
    if (temp > 30) tip = "Hot weather – bring sunscreen ☀️";
    else if (temp < 10) tip = "Cold weather – pack warm clothes 🧥";
    else tip = "Perfect weather for exploring 🚶";

    // Destination insight (simple AI-style logic)
    let insight = "";
    if (weather.includes("rain")) insight = "Expect rain – indoor plans recommended.";
    else if (weather.includes("clear")) insight = "Clear skies – great for sightseeing!";
    else insight = "Check local conditions before planning activities.";

    results.innerHTML = `
      <h2>${city}</h2>
      <p>🌡 Temperature: ${temp}°C</p>
      <p>🌥 Condition: ${weather}</p>
      <p>💧 Humidity: ${humidity}%</p>
      <hr>
      <p>💡 Tip: ${tip}</p>
      <p>📍 Insight: ${insight}</p>
    `;

  } catch (error) {
    results.innerHTML = "Could not retrieve travel data.";
  }
}

// Dark mode
function toggleTheme() {
  document.body.classList.toggle("dark");
}
