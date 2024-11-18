import React, { useState } from "react";

const SearchBar = ({ onAnalyze }) => {
  const [url, setUrl] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (url.trim()) {
      onAnalyze(url);
    } else {
      alert("Please enter a valid URL.");
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      style={{
        display: "flex",
        flexDirection: "row",
        gap: "10px",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <label
        htmlFor="url-input"
        style={{
          fontSize: "1rem",
          fontWeight: "bold",
        }}
      >
        HAX site
      </label>
      <input
        id="url-input"
        type="text"
        placeholder="https://haxtheweb.org/site.json"
        value={url}
        onChange={(e) => setUrl(e.target.value)}
        style={{
          padding: "10px",
          width: "300px",
          border: "1px solid #ddd",
          borderRadius: "5px",
        }}
      />
      <button
        type="submit"
        style={{
          padding: "10px 20px",
          backgroundColor: "#007BFF",
          color: "white",
          border: "none",
          borderRadius: "5px",
          cursor: "pointer",
        }}
      >
        Analyze
      </button>
    </form>
  );
};

export default SearchBar;

