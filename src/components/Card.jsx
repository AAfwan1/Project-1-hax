import React from "react";

const Card = ({ item, baseUrl }) => {
  const formatDate = (timestamp) => {
    if (!timestamp) return "N/A";
    const date = new Date(timestamp * 1000);
    return date.toLocaleDateString();
  };

  const imageUrl = item.metadata?.images?.[0]
    ? `${baseUrl}${item.metadata.images[0].startsWith("/") ? "" : "/"}${item.metadata.images[0]}`
    : "/PSU.png";

  const openContentUrl = item.slug.startsWith("http")
    ? item.slug
    : `${baseUrl}${item.slug.startsWith("/") ? "" : "/"}${item.slug}`;
  const openSourceUrl = `${baseUrl}${item.location.startsWith("/") ? "" : "/"}${item.location}`;

  return (
    <div
      style={{
        border: "1px solid #ddd",
        padding: "20px",
        borderRadius: "8px",
        width: "calc(25% - 20px)",
        boxSizing: "border-box",
        backgroundColor: "#fff",
        boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
        textAlign: "left",
      }}
    >

      <h3
        style={{
          textAlign: "center",
          marginBottom: "10px",
          fontWeight: "bold",
        }}
      >
        {item.title || "Page Title"}
      </h3>

      <img
        src={imageUrl}
        alt={item.title || "No Image"}
        style={{
          width: "100%",
          height: "150px",
          objectFit: "cover",
          borderRadius: "4px",
          marginBottom: "10px",
        }}
        onError={(e) => (e.target.src = "/PSU.png")}
      />

      <p>
        <strong>Last Updated:</strong> {formatDate(item.metadata?.updated)}
      </p>

      <p>
        <strong>Description:</strong> {item.description || "No description provided."}
      </p>

      <div style={{ marginTop: "10px" }}>

        <a
          href={openContentUrl}
          target="_blank"
          rel="noopener noreferrer"
          style={{ color: "#007BFF", textDecoration: "none", display: "block", marginBottom: "5px" }}
        >
          Open Content
        </a>

        <a
          href={openSourceUrl}
          target="_blank"
          rel="noopener noreferrer"
          style={{ color: "#007BFF", textDecoration: "none" }}
        >
          Open Source
        </a>
      </div>

      {item.metadata?.readtime && (
        <p>
          <strong>Estimated Read Time:</strong> {item.metadata.readtime} minute(s)
        </p>
      )}
    </div>
  );
};

export default Card;

