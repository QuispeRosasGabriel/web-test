import InstagramIcon from "../assets/Instagram.svg";
import TwitterIcon from "../assets/back.svg";
import TikTokIcon from "../assets/TikTok.png";

export const cardsData = [
  {
    children: (
      <div>
        <div
          style={{
            color: "#000",
            fontFamily: "Stevie Sans",
            fontSize: "16px",
            fontStyle: "normal",
            fontWeight: "550",
          }}
        >
          Refer a friend
        </div>
        <div
          style={{
            color: "#000",
            fontFamily: "Stevie Sans",
            fontSize: "15px",
            fontStyle: "normal",
            fontWeight: "400",
          }}
        >
          Completion status will update when your friend creates their account.
        </div>
      </div>
    ),
    isCompleted: true,
  },
  {
    children: (
      <div>
        <div
          style={{
            color: "#000",
            fontFamily: "Stevie Sans",
            fontSize: "16px",
            fontStyle: "normal",
            fontWeight: "550",
          }}
        >
          Check in at the Encore NYC meetup
        </div>
        <div
          style={{
            color: "#000",
            fontFamily: "Stevie Sans",
            fontSize: "15px",
            fontStyle: "normal",
            fontWeight: "400",
          }}
        >
          Tap to scan the QR code at the event.
        </div>
      </div>
    ),
    isNew: true,
  },
  {
    children: (
      <div style={{ display: "flex", gap: "6px", alignItems: "center" }}>
        <img src={InstagramIcon} alt="" />
        <div
          style={{
            color: "#000",
            fontFamily: "Stevie Sans",
            fontSize: "16px",
            fontStyle: "normal",
            fontWeight: 550,
          }}
        >
          Connect Instagram
        </div>
      </div>
    ),
  },
  {
    children: (
      <div>
        <div style={{ display: "flex", gap: "6px", alignItems: "center" }}>
          <img src={InstagramIcon} alt="" />
          <div>Follow Encore</div>
        </div>
        <div style={{ marginTop: "8px" }}>Connect Instagram to unlock</div>
      </div>
    ),
    isDisabled: true,
  },
  {
    children: (
      <div>
        <div style={{ display: "flex", gap: "6px", alignItems: "center" }}>
          <img src={InstagramIcon} alt="" />
          <div>Mention #encorefans in a post</div>
        </div>
        <div style={{ marginTop: "8px" }}>Connect Instagram to unlock</div>
      </div>
    ),
    isDisabled: true,
  },
  {
    children: (
      <div style={{ display: "flex", gap: "6px", alignItems: "center" }}>
        <img src={TwitterIcon} alt="" />
        <div
          style={{
            color: "#000",
            fontFamily: "Stevie Sans",
            fontSize: "16px",
            fontStyle: "normal",
            fontWeight: 550,
          }}
        >
          Connect Twitter
        </div>
      </div>
    ),
  },
  {
    children: (
      <div>
        <div style={{ display: "flex", gap: "6px", alignItems: "center" }}>
          <img src={TwitterIcon} alt="" />
          <div>Follow Encore</div>
        </div>
        <div style={{ marginTop: "8px" }}>Connect Twitter to unlock</div>
      </div>
    ),
    isDisabled: true,
  },
  {
    children: (
      <div style={{ display: "flex", gap: "6px", alignItems: "center" }}>
        <img src={TikTokIcon} alt="" />
        <div
          style={{
            color: "#000",
            fontFamily: "Stevie Sans",
            fontSize: "16px",
            fontStyle: "normal",
            fontWeight: 550,
          }}
        >
          Connect TikTok
        </div>
      </div>
    ),
  },
  {
    children: (
      <div>
        <div style={{ display: "flex", gap: "6px", alignItems: "center" }}>
          <img src={TikTokIcon} alt="" />
          <div>Follow Encore</div>
        </div>
        <div style={{ marginTop: "8px" }}>Connect TikTok to unlock</div>
      </div>
    ),
    isDisabled: true,
  },
  {
    children: (
      <div>
        <div style={{ display: "flex", gap: "6px", alignItems: "center" }}>
          <img src={TikTokIcon} alt="" />
          <div>Like Encore’s videos</div>
        </div>
        <div style={{ marginTop: "8px" }}>Connect TikTok to unlock</div>
      </div>
    ),
    isDisabled: true,
  },
];
