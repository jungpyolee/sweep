import React from "react";
import { useQuery } from "react-query";
import { getHistory } from "../../../api/tinderApi";
import moment from "moment";
export default function Recent() {
  const { data } = useQuery("getHistory", getHistory);

  console.log(data);
  return (
    <div className="pb-xl">
      {data &&
        data.data?.map((tinder) => {
          let createdAt = moment(tinder.createdAt).format("M월 D일");
          console.log(createdAt);
          return (
            <div className="ml-5 flex flex-col justify-between 	rounded-2xl w-80 h-card bg-grayscale-0 mb-4 mt-6">
              <div className="pt-4 pr-4 text-xs flex justify-end">
                {createdAt}
              </div>

              <div className="mx-auto text-base flex justify-center items-center w-72 h-24">
                {tinder.message}
              </div>

              <div className="w-80 h-14 flex border-t  border-grayscale-100 justify-around items-center">
                <div className="flex justify-center items-center">
                  <img
                    className="w-4 h-4 mr-2"
                    src="/assets/icons/Emoji/Best.png"
                    alt="superlike"
                  />
                  <div>{tinder.superlike}개</div>
                </div>
                <div className="flex justify-center items-center">
                  <img
                    className="w-4 h-4 mr-2"
                    src="/assets/icons/Emoji/Like.png"
                    alt="like"
                  />
                  <div>{tinder.like}개</div>
                </div>
                <div className="flex justify-center items-center">
                  <img
                    className="w-4 h-4 mr-2"
                    src="/assets/icons/Emoji/Dislike.png"
                    alt="dislike"
                  />
                  <div>{tinder.dislike}개</div>
                </div>
              </div>
            </div>
          );
        })}
    </div>
  );
}
