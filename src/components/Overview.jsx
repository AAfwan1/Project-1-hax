import React from "react";
import SimpleIconWrapper from "./SimpleIconWrapper";

const Overview = ({ details }) => {
  if (!details || !details.metadata) {
    return <p>No overview data available.</p>;
  }

  const siteMetadata = details.metadata.site || {};
  const themeMetadata = details.metadata.theme?.variables || {};

  const logoUrl = siteMetadata.logo
    ? `${siteMetadata.logo.startsWith("http") ? "" : "/"}${siteMetadata.logo}`
    : "/default-logo.png";

  const hexCode = themeMetadata.hexCode || "#000";

  const formatDate = (timestamp) => {
    if (!timestamp) return "N/A";
    const date = new Date(timestamp * 1000);
    return date.toLocaleDateString();
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        gap: "20px",
        border: `2px solid ${hexCode}`,
        padding: "20px",
        borderRadius: "8px",
        backgroundColor: hexCode,
        maxWidth: "800px",
        textAlign: "left",
        boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
        marginTop: "20px",
      }}
    >

      <img
        src={logoUrl}
        alt="Site Logo"
        style={{
          width: "150px",
          height: "150px",
          objectFit: "cover",
          borderRadius: "8px",
          backgroundColor: "#fff",
          padding: "5px",
        }}
        onError={(e) => (e.target.src = "/default-logo.png")}
      />

      <div style={{ flex: 1, color: "#000", fontWeight: "bold" }}>
        <h2 style={{ margin: "0" }}>Name: {siteMetadata.name || "No Name Available"}</h2>
        <p style={{ margin: "5px 0" }}>
          Description: {details.description || "No Description Provided"}
        </p>
        <p style={{ margin: "5px 0" }}>
          Date Created: {formatDate(siteMetadata.created)}
        </p>
        <p style={{ margin: "5px 0" }}>
          Last Updated: {formatDate(siteMetadata.updated)}
        </p>
        <p style={{ margin: "5px 0" }}>
          Theme: {details.metadata?.theme?.name || "No Theme Available"}
        </p>
        <div style={{ marginTop: "10px" }}>
          <SimpleIconWrapper accentColor={hexCode} icon={themeMetadata.icon || "hax:hax2022"} />
        </div>
      </div>
    </div>
  );
};

export default Overview;

