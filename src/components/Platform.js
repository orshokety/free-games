import "./Platform.css";

function Platform({ platform }) {
  let src = null;
  if (platform === "Web Browser" || platform === "Web Browser") {
    src =
      "https://img.icons8.com/external-flatart-icons-outline-flatarticons/64/ffffff/external-web-page-website-element-flatart-icons-outline-flatarticons-1.png";
  }
  if (platform === "PC (Windows)" || platform === "Windows") {
    src = "https://img.icons8.com/ios/50/ffffff/windows-logo.png";
  }
  if (platform === "Windows, Web Browser" || platform === "PC (Windows), Web Browser") {
    return (
      <div>
        <img
          src="https://img.icons8.com/ios/50/ffffff/windows-logo.png"
          alt="slug"
          className="GamePlatform"
        />
        <img
          src="https://img.icons8.com/external-flatart-icons-outline-flatarticons/64/ffffff/external-web-page-website-element-flatart-icons-outline-flatarticons-1.png"
          alt="slug"
          className="GamePlatform"
        />
      </div>
    );
  }
  return <img src={src} alt="slug" className="GamePlatform" />;
}

export default Platform;
