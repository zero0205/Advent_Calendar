import "./styles.css";

const ShareBtn = () => {
  const onClick = async () => {
    try {
      if (!navigator.share) {
        alert("Web Share API is not available on your browser.");
        return;
      }
      const shareData = {
        title: "Web Share",
        text: "Check out Advent Calendar",
        url: window.location.href,
      };
      await navigator.share(shareData);
      console.log("Data was shared successfully!");
    } catch (error) {
      console.log("Share failed:", (error as Error).message);
    }
  };
  return (
    <footer>
      <div className="flex-row">
        <button id="shareButton" onClick={onClick}>
          공유하기
        </button>
      </div>
    </footer>
  );
};

export default ShareBtn;
