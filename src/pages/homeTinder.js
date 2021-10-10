import React, { useMemo, useState } from "react";
import { useQuery } from "react-query";
import TinderCard from "react-tinder-card";
import { getTinder } from "../api/tinderApi";

const db = [
  {
    message: "스와이프를 시작해보세요",
    id: 1,
  },
];

const alreadyRemoved = [];
let tindersState = db; // This fixes issues with updating tinders state forcing it to use the current state and not the state that was active when the card was created.

export default function HomeTinder() {
  const [tinders, setTinders] = useState(db);
  const [lastDirection, setLastDirection] = useState();
  const [reload, setReload] = useState(false);
  console.log(alreadyRemoved);
  console.log(reload);
  const { isLoading } = useQuery(
    ["getTinder", { count: 3 }],
    () => getTinder(3, 3),
    {
      enabled: !!reload,
      onSuccess: (data) => {
        data.data.forEach((tinder) => {
          tinders.unshift(tinder);
        });
      },
    }
  );

  console.log(tinders);

  const childRefs = useMemo(
    () =>
      Array(db.length)
        .fill(0)
        .map((i) => React.createRef()),
    []
  );

  const swiped = (direction, messageToDelete) => {
    console.log("removing: " + messageToDelete);
    setLastDirection(direction);
    alreadyRemoved.push(messageToDelete);
    setReload(true);
  };

  const outOfFrame = (message) => {
    console.log(message + " left the screen!");
    tindersState = tindersState.filter((tinder) => tinder.message !== message);
    setTinders(tindersState);
    setReload(false);
  };

  const swipe = (dir) => {
    const cardsLeft = tinders.filter(
      (tinder) => !alreadyRemoved.includes(tinder.message)
    );

    console.log("cardsLeft", cardsLeft);
    if (cardsLeft.length) {
      const toBeRemoved = cardsLeft[cardsLeft.length - 1].message; // Find the card object to be removed
      const index = db.map((tinder) => tinder.message).indexOf(toBeRemoved); // Find the index of which to make the reference to
      alreadyRemoved.push(toBeRemoved); // Make sure the next card gets removed next time if this card do not have time to exit the screen
      childRefs[index].current.swipe(dir); // Swipe the card!
    }
  };

  return (
    <div>
      <div className="cardContainer">
        {tinders.map((tinder, index) => (
          <TinderCard
            ref={childRefs[index]}
            className="swipe "
            key={tinder.id}
            onSwipe={(dir) => swiped(dir, tinder.message)}
            onCardLeftScreen={() => outOfFrame(tinder.message)}
          >
            <div className="bg-grayscale-0 card pt-24 text-center ">
              <h3>{tinder.message}</h3>
            </div>
          </TinderCard>
        ))}
      </div>

      <div className="px-md flex justify-around">
        <div className="bg-grayscale-0 w-16 h-16 flex items-center justify-center rounded-full">
          <img src="/assets/icons/Emoji/Dislike.png" alt="icon" />
        </div>
        <div className="bg-grayscale-0 w-16 h-16 flex items-center justify-center rounded-full">
          <img src="/assets/icons/Emoji/Like.png" alt="icon" />
        </div>
        <div className="bg-grayscale-0 w-16 h-16 flex items-center justify-center rounded-full">
          <img src="/assets/icons/Emoji/Best.png" alt="icon" />
        </div>
        <div className="bg-grayscale-0 w-16 h-16 flex items-center justify-center rounded-full">
          <img src="/assets/icons/Emoji/Pass.png" alt="icon" />
        </div>
      </div>
    </div>
  );
}
