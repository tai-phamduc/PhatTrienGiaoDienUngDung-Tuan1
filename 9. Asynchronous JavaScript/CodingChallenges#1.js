// PART 1: Function to get location from coordinates
function whereAmI(lat, lng) {
    // Reverse geocoding using the geocode.xyz API
    fetch(`https://geocode.xyz/${lat},${lng}?geoit=json`)
        .then(response => {
            // Handle the case where the request fails (e.g., too many requests per second)
            if (!response.ok) {
                throw new Error(`Failed to fetch location. Status code: ${response.status}`);
            }
            return response.json();
        })
        .then(data => {
            // Check if the API returned a valid location
            if (!data.city || !data.country) {
                throw new Error("Could not find location data.");
            }
            // Extract city and country from the API response
            const city = data.city;
            const country = data.country;
            console.log(`You are in ${city}, ${country}`);
            
            // PART 2: Now, let's use the country name to render the country info
            // For this step, we need to fetch the country data from the countries API
            return fetch(`https://restcountries.com/v3.1/name/${country}`);
        })
        .then(response => response.json())
        .then(data => {
            // Log country details or handle the case where no country data is returned
            if (!data || data.length === 0) {
                throw new Error("Could not find country details.");
            }
            const countryData = data[0];  // Assume the first result is the correct one
            console.log(`Country data: ${JSON.stringify(countryData)}`);
        })
        .catch(error => {
            // Log any errors encountered during the process
            console.error("Error: ", error.message);
        });
}

// Test the function with sample coordinates
// Coordinates 1: Berlin, Germany
whereAmI(52.508, 13.381);

// Coordinates 2: Mumbai, India
whereAmI(19.037, 72.873);

// Coordinates 3: Cape Town, South Africa
whereAmI(-33.933, 18.474);
