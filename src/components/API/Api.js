import React, { useState } from "react";

const Api = () => {
  // Step 2: Create a state variable to store the API response data.
  const [apiData, setApiData] = useState(null);

  // Step 3: Set up an input field to allow users to specify the API endpoint or URL.
  const [apiUrl, setApiUrl] = useState("");

  // Step 4: Handle user input and make an API request when the user interacts with the playground.
  const handleApiRequest = async () => {
    try {
      const response = await fetch(apiUrl);
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const data = await response.json();
      // Step 5: Update the state with the API response data.
      setApiData(data);
    } catch (error) {
      console.error("Error fetching API data:", error);
    }
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      <div>
        <h1>API Playground</h1>
        {/* Step 3: Input field for the API URL */}
        <input
          type="text"
          placeholder="Enter API URL"
          value={apiUrl}
          onChange={(e) => setApiUrl(e.target.value)}
        />
        {/* Step 4: Button to trigger API request */}
        <button onClick={handleApiRequest}>Fetch Data</button>
      </div>
      <div>
        {/* Step 5: Render the API response data */}
        {apiData && (
          <div>
            <h2>API Response:</h2>
            <pre>{JSON.stringify(apiData, null, 2)}</pre>
          </div>
        )}
      </div>
    </div>
  );
};

export default Api;
