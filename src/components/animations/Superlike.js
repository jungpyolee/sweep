import Lottie from "react-lottie";
import superlike from "../../animation/Emoji_Best.json";

import React from "react";

function Superlike() {
  const lottieOptions = {
    animationData: superlike,
    loop: false,
    autoplay: false,
  };

  return (
    <Lottie
      options={lottieOptions}
      autoplay
      isClickToPauseDisabled={false}
      style={{ width: "30px", height: "30px" }} // svg의 부모 div에 적용
      eventListeners={[
        {
          eventName: "complete",
          callback: () => console.log("the animation completed"),
        },
      ]}
    />
  );
}

export default Superlike;
