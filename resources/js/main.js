// Config data
const presetColors = {
    white: "#ffffff",
    black: "#000000",
    lime: "#00ff04",
    pink: "#ff00f2",
    purple: "#7700ff",
    lightGray: "#b5b5b5",
    gray: "#808080",
    darkGray: "#3b3b3b",
    red: "#ff0000",
    orange: "#ff8400",
    yellow: "#ffe600",
    lightGreen: "#91ff00",
    green: "#1aff00",
    darkGreen: "#0e8a00",
    turquoise: "#00ff8c",
    lightBlue: "#00ffd9",
    blue: "#0084ff",
    darkBlue: "#0800ff",
    darkPurple: "#2f0080",
    darkRed: "#800000"
}

const configs = [
{
    id: 1,
    name: "MiniBlox Liquidbounce/FDP Config",
    creator: "nicky",
    updated: "1/8/2025",
    tags: ["Blatant", "MiniBlox", "recommended"],
    anticheat: ["No AC, Only Setbacks"],
    description: ["Fly Method, Very Blatant, Tutorial for usage"],
    cover: "https://avatars.githubusercontent.com/u/97767956?s=200&v=4",
    ip: "localhost",
    screenshots: ["https://github.com/nickyghg/configs/raw/refs/heads/main/resources/screenshots/1.png", "https://raw.githubusercontent.com/nickyghg/configs/refs/heads/main/resources/screenshots/cherry1.png", "https://raw.githubusercontent.com/nickyghg/configs/refs/heads/main/resources/screenshots/cherry2.png"],
    downloadLink: "https://lootdest.org/s?aDs31I7B",
    otherButtons:[["https://adfoc.us/serve/sitelinks/?id=271228&url=https://maven.minecraftforge.net/net/minecraftforge/forge/1.8.9-11.15.1.2318-1.8.9/forge-1.8.9-11.15.1.2318-1.8.9-installer.jar", "Download Forge"], ["https://loot-link.com/s?f9IiBcr5", "Download Liquidbounce"], ["https://loot-link.com/s?Cu51LIqZ", "Download MiniBlox Translation Layer"], ["https://loot-link.com/s?c3NCuHnv", "Download SigmaBounce Theme"], ["https://lootdest.org/s?bLmnbo7Y", "Download Cherry Theme"], ["https://lootdest.org/s?ps3zlWuC", "Download FDP Client"]],
    colors: {
        text: "#ffffff", // Text
        accent: "#7700ff", // Accent
        header: "#0e8a00" // Header
    }
},
{
    id: 2,
    name: "BlocksMC Liquidbounce Config/Theme",
    creator: "nicky",
    updated: "1/8/2025",
    tags: ["Blatant", "BlocksMC", "recommended"],
    anticheat: ["Verus", "Updated NCP"],
    description: ["Liquidbounce BlocksMC Config"],
    cover: "resources/icons/BlocksMC.png",
    ip: "blocksmc.com",
    screenshots: ["https://github.com/nickyghg/configs/raw/refs/heads/main/resources/screenshots/1.png", "https://raw.githubusercontent.com/nickyghg/configs/refs/heads/main/resources/screenshots/cherry1.png", "https://raw.githubusercontent.com/nickyghg/configs/refs/heads/main/resources/screenshots/cherry2.png"],
    downloadLink: "https://loot-link.com/s?F8roS9ng",
    otherButtons:[["https://adfoc.us/serve/sitelinks/?id=271228&url=https://maven.minecraftforge.net/net/minecraftforge/forge/1.8.9-11.15.1.2318-1.8.9/forge-1.8.9-11.15.1.2318-1.8.9-installer.jar", "Download Forge"], ["https://loot-link.com/s?f9IiBcr5", "Download Liquidbounce"], ["https://loot-link.com/s?c3NCuHnv", "Download SigmaBounce Theme"], ["https://lootdest.org/s?bLmnbo7Y", "Download Cherry Theme"]],
    colors: {
        text: "#ffffff", // Text
        accent: "#0084ff", // Accent
        header: "#0e8a00" // Header
    }
},
{
    id: 3,
    name: "BlocksMC FDP Client Config/Theme",
    creator: "nicky",
    updated: "1/8/2025",
    tags: ["Blatant", "BlocksMC", "recommended"],
    anticheat: ["Verus", "Updated NCP"],
    description: ["BlocksMC Config for FDP Client"],
    cover: "resources/icons/BlocksMC.png",
    ip: "blocksmc.com",
    screenshots: ["https://github.com/nickyghg/configs/raw/refs/heads/main/resources/screenshots/MDUpiIO.png"],
    downloadLink: "https://lootdest.org/s?WqfUbZTn",
    otherButtons:[["https://adfoc.us/serve/sitelinks/?id=271228&url=https://maven.minecraftforge.net/net/minecraftforge/forge/1.8.9-11.15.1.2318-1.8.9/forge-1.8.9-11.15.1.2318-1.8.9-installer.jar", "Download Forge"], ["https://lootdest.org/s?pupuKAzZ", "Download Config for b11(broken rots)"], ["https://lootdest.org/s?ps3zlWuC", "Download FDP Client"], ["https://loot-link.com/s?3gytUJHD", "Download Theme"]],
    colors: {
        text: "#ffffff", // Text
        accent: "#36fff5", // Accent
        header: "#0e8a00" // Header
    }
},
{
    id: 4,
    name: "Raven XD BlocksMC Config",
    creator: "nicky",
    updated: "1/15/2025",
    tags: ["Blatant", "BlocksMC", "recommended"],
    anticheat: ["Verus", "Updated NCP"],
    description: ["BlocksMC Config for RavenXD 2.14.1.<b><br />Killaura - V<br />Speed - Y/Z<br />Cheststealer, Invcleaner, Autoarmor - B<br />Scaffold - X<br /> Bedaura - F</b>"],
    cover: "https://raw.githubusercontent.com/nickyghg/configs/refs/heads/main/resources/icons/BlocksMC.png",
    ip: "blocksmc.com",
    screenshots: ["https://raw.githubusercontent.com/nickyghg/configs/refs/heads/main/resources/screenshots/2025-01-15_16.57.13.png", "https://raw.githubusercontent.com/nickyghg/configs/refs/heads/main/resources/screenshots/2025-01-15_16.59.21.png", "https://raw.githubusercontent.com/nickyghg/configs/refs/heads/main/resources/screenshots/2025-01-15_16.59.41.png"],
    downloadLink: "https://lootdest.org/s?zobL7QbY",
    otherButtons:[["https://adfoc.us/serve/sitelinks/?id=271228&url=https://maven.minecraftforge.net/net/minecraftforge/forge/1.8.9-11.15.1.2318-1.8.9/forge-1.8.9-11.15.1.2318-1.8.9-installer.jar", "Download Forge"], ["https://lootdest.org/s?jTPoCg11", "Download Raven XD"]],
    colors: {
        text: "#ffffff", // Text
        accent: "#36fff5", // Accent
        header: "#0e8a00" // Header
    }
},
{
    id: 5,
    name: "Hypixel Config for Raven XD",
    creator: "nicky",
    updated: "1/15/2025",
    tags: ["Blatant", "recommended"],
    anticheat: ["Watchdog"],
    description: ["Great Hypixel Config"],
    cover: "https://avatars.githubusercontent.com/u/3840546?s=280&v=4",
    ip: "hypixel.net",
    downloadLink: "https://lootdest.org/s?FQWYntYC",
    otherButtons:[["https://adfoc.us/serve/sitelinks/?id=271228&url=https://maven.minecraftforge.net/net/minecraftforge/forge/1.8.9-11.15.1.2318-1.8.9/forge-1.8.9-11.15.1.2318-1.8.9-installer.jar", "Download Forge"], ["https://lootdest.org/s?jTPoCg11", "Download Raven XD"]],
    colors: {
        text: "#ffffff", // Text
        accent: "#ffe600", // Accent
        header: "#0e8a00" // Header
    }
},
{
    id: 6,
    name: "Hypixel Config for Liquidbounce",
    creator: "nicky",
    updated: "1/29/2025",
    tags: ["Blatant", "recommended"],
    anticheat: ["Watchdog"],
    description: ["Great Hypixel Config"],
    cover: "https://avatars.githubusercontent.com/u/3840546?s=280&v=4",
    ip: "hypixel.net",
    downloadLink: "https://loot-link.com/s?7VC9XdiW",
    otherButtons:[["https://liquidbounce.net/download", "Download Liquidbounce"], ["https://loot-link.com/s?MRiib5Vu", "Download Catppuccin Theme"]],
    colors: {
        text: "#ffffff", // Text
        accent: "#ffe600", // Accent
        header: "#0e8a00" // Header
    }
},
{
    id: 7,
    name: "MiniBlox Config for Raven XD",
    creator: "nicky",
    updated: "1/31/2025",
    tags: ["Blatant", "recommended"],
    anticheat: ["none"],
    description: ["Rage Config with Fly, Killaura, Speed, Scaffold etc"],
    cover: "https://avatars.githubusercontent.com/u/97767956?s=200&v=4",
    ip: "localhost",
    downloadLink: "https://lootdest.org/s?nhlZY1UQ",
    otherButtons:[["https://adfoc.us/serve/sitelinks/?id=271228&url=https://maven.minecraftforge.net/net/minecraftforge/forge/1.8.9-11.15.1.2318-1.8.9/forge-1.8.9-11.15.1.2318-1.8.9-installer.jar", "Download Forge"], ["https://lootdest.org/s?jTPoCg11", "Download Raven XD"], ["https://loot-link.com/s?Cu51LIqZ", "Download MiniBlox Translation Layer"]],
    colors: {
        text: "#ffffff", // Text
        accent: "#7700ff", // Accent
        header: "#0e8a00" // Header
    }
},
{
    id: 8,
    name: "MiniBlox Config for Exhibition",
    creator: "nicky",
    updated: "2/10/2025",
    tags: ["Blatant", "recommended"],
    anticheat: ["none"],
    description: ["Rage Config with Killaura, Speed, Scaffold etc"],
    cover: "https://avatars.githubusercontent.com/u/97767956?s=200&v=4",
    ip: "localhost",
    downloadLink: "https://loot-link.com/s?Nap4mVmG",
    otherButtons:[["https://lootdest.org/s?DbZpJRQm", "Download Exhibition Client"], ["https://loot-link.com/s?Cu51LIqZ", "Download MiniBlox Translation Layer"]],
    colors: {
        text: "#ffffff", // Text
        accent: "#7700ff", // Accent
        header: "#0e8a00" // Header
    }
}
];

const searchFields = ["creator", "name", "anticheat", "ip", "tag"];
let hideOutdated = true;
let currentField = null;
let searchCriteria = {};

document.addEventListener("DOMContentLoaded", () => {
    populateConfigs();
    setupSearchBar();
});

// Setup the search bar with event listeners
function setupSearchBar() {
    const searchBar = document.getElementById("searchBar");
    searchBar.addEventListener("keydown", handleKeyDown);
    searchBar.addEventListener("input", handleInput);
    document.addEventListener("keydown", handleGlobalKeyDown);
}

// Handle input for text changes in the search bar
function handleInput(event) {
    const searchBar = event.target;
    const input = searchBar.value.trim();

    // If the user is typing inside a field (e.g., "creator:"), update the current value for that field
    if (currentField && !input.endsWith(">")) {
        searchCriteria[currentField] = input;
    }

    populateConfigs();
}

// Handle key down events for special cases like space, arrow keys, and escape
function handleKeyDown(event) {
    const searchBar = event.target;
    const input = searchBar.value.trim();

    // Check if the input matches a command followed by a space (e.g., "creator:")
    if (event.key === " " && input.includes(":") && searchFields.some(field => input.startsWith(field + ":"))) {
        currentField = input.split(":")[0];
        searchCriteria[currentField] = ""; // Start capturing input for this field
        displayActiveSearchCommand(searchBar, currentField);
        event.preventDefault(); // Prevent default space behavior
    }

    // If the right arrow key is pressed, treat it as ending the current field's input
    if (event.key === "ArrowRight" && currentField) {
        currentField = null; // Finish the input for the current field
        searchBar.value += " "; // Add a space after the right arrow press for clarity
        event.preventDefault();
    }
}

// Handle global key down events
function handleGlobalKeyDown(event) {
    if (event.key === "Escape") {
        // Clear the entire search criteria and reset the input field
        currentField = null;
        searchCriteria = {};
        const searchBar = document.getElementById("searchBar");
        searchBar.value = "";
        clearActiveSearchCommands();
    }
}

// Display active search commands in a styled format within the input area
function displayActiveSearchCommand(searchBar, field) {
    // Show the active command with a styled look like a Discord command
    const commandDisplay = document.createElement("span");
    commandDisplay.className = "active-command";
    commandDisplay.textContent = `${field}:`;
    commandDisplay.setAttribute("data-field", field);

    // Insert the command display before the input field
    searchBar.insertAdjacentElement("beforebegin", commandDisplay);

    // Clear the input value
    searchBar.value = "";
}

// Clear all displayed active search commands
function clearActiveSearchCommands() {
    const commands = document.querySelectorAll(".active-command");
    commands.forEach(command => command.remove());
    populateConfigs(); // Refresh the displayed configs
}

// Updated populateConfigs function to handle null configList
function populateConfigs() {
    const configList = document.getElementById("configList");
    
    // If configList is not found, exit the function
    if (!configList) {
        return;
    }
    
    configList.innerHTML = '';

    configs.forEach(config => {
        if (hideOutdated && config.tags.includes("outdated")) {
            return;
        }

        if (matchesSearchCriteria(config, searchCriteria)) {
            const configDiv = document.createElement('div');
            configDiv.className = 'config';
            configDiv.innerHTML = `
                <img src="${config.cover}" alt="${config.name}">
                <h2>${config.name}</h2>
                <p>Anticheat: ${Array.isArray(config.anticheat) ? config.anticheat.join(", ") : config.anticheat}</p>
                <p>Creator: ${config.creator}</p>
                <p>IP: ${config.ip}</p>
                <a href="config?id=${config.id}">View Config</a>
            `;
            configList.appendChild(configDiv);
        }
    });
}

// Check if a config matches the current search criteria
function matchesSearchCriteria(config, criteria) {
    for (const field in criteria) {
        const value = criteria[field].toLowerCase();
        if (!value) continue;

        if (field === "tag") {
            if (!config.tags.some(tag => tag.toLowerCase().includes(value))) {
                return false;
            }
        } else if (field === "anticheat") {
            const anticheats = Array.isArray(config.anticheat) ? config.anticheat : [config.anticheat];
            if (!anticheats.some(anticheat => anticheat.toLowerCase().includes(value))) {
                return false;
            }
        } else if (!config[field].toLowerCase().includes(value)) {
            return false;
        }
    }
    return true;
}

// Toggle outdated configs visibility
function toggleOutdatedConfigs() {
    hideOutdated = !hideOutdated;
    document.getElementById('toggleOutdated').textContent = hideOutdated ? "Hide Outdated" : "Show Outdated";
    populateConfigs();
}
