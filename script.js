// Skills (AI-assisted example)
const skills = [
    "HTML",
    "CSS",
    "JavaScript",
    "API Integration",
    "Responsive Design"
];

const skillsList = document.getElementById("skills-list");

skills.forEach(skill => {
    let li = document.createElement("li");
    li.textContent = skill;
    skillsList.appendChild(li);
});

// 🌦 Weather API (Assignment requirement)
async function getWeather() {
    const city = document.getElementById("city").value;

    const apiKey = "YOUR_API_KEY_HERE";
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    try {
        const response = await fetch(url);
        const data = await response.json();

        document.getElementById("weather-result").innerText =
            `Temperature in ${city}: ${data.main.temp}°C`;
    } catch (error) {
        document.getElementById("weather-result").innerText =
            "Could not fetch weather data.";
    }
}

// 🌙 Dark mode toggle (extra feature)
function toggleTheme() {
    document.body.classList.toggle("dark");
}
