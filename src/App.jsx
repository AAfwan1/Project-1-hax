import React, { useState } from "react";
import SearchBar from "./components/SearchBar";
import Card from "./components/Card";
import Overview from "./components/Overview";

const App = () => {
  const [data, setData] = useState(null);
  const [error, setError] = useState("");
  const [baseUrl, setBaseUrl] = useState("");
  const [title, setTitle] = useState("Project-1");

  const handleAnalyze = async (url) => {
    try {
      const base = url.endsWith("site.json")
        ? url.substring(0, url.length - 9)
        : url;

      setBaseUrl(base);

      if (!url.endsWith("site.json")) {
        url = url.endsWith("/") ? `${url}site.json` : `${url}/site.json`;
      }

      const response = await fetch(url);

      if (!response.ok) {
        throw new Error(`HTTP Error: ${response.status}`);
      }

      const contentType = response.headers.get("content-type");
      if (!contentType || !contentType.includes("application/json")) {
        throw new Error("Invalid JSON response");
      }

      const jsonData = await response.json();
      setData(jsonData);
      setTitle("JSON Search, input your JSON:");
      setError("");
    } catch (err) {
      setError(err.message);
      setData(null);
      setTitle("Project-1");
    }
  };

  return (
    <div
      style={{
        minHeight: "100vh",
        minWidth: "100vw", //added newly
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        //justifyContent: "center", //added newly
        textAlign: "center",
        backgroundColor: "#f9f9f9",
        overflowY: "auto", //could be removed
        padding: "20px",
      }}
    >
      <h1 style={{ marginBottom: "20px", fontWeight: "bold" }}>{title}</h1>

      <SearchBar onAnalyze={handleAnalyze} />
      {error && <p style={{ color: "red", marginTop: "10px" }}>{error}</p>}

      {data && <Overview details={data} />}

      {Array.isArray(data?.items) && data.items.length > 0 && (
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: "20px",
            justifyContent: "center",
            maxWidth: "1200px",
            padding: "10px 0",
          }}
        >
          {data.items.map((item, index) => (
            <Card key={index} item={item} baseUrl={baseUrl} />
          ))}
        </div>
      )}
    </div>
  );
};

export default App;

