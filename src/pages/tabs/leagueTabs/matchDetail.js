import { Link, Navbar, Page, Tab, Tabs, Toolbar } from "framework7-react";
import moment from "moment";
import { useState } from "react";
import { useQuery } from "react-query";
import { getGameResultById } from "../../../api/infoApi";
import { getPOGResult } from "../../../api/pogApi";
import { getTopTinder } from "../../../api/tinderApi";
import { gameResultDate } from "../../../utils/timeUtil";
import POGDetail from "./pogDetail";

function MatchDetailPage({ f7route }) {
  let gameId = f7route.params.gameId;
  const [gameResult, setGameResult] = useState("");
  const [MOGResult, setMOGResult] = useState("");
  const [POGResult, setPOGResult] = useState("");

  const { isLoading } = useQuery(
    ["matchDetail", { gameId: gameId }],
    () => getGameResultById(gameId),
    {
      onSuccess: (data) => {
        setGameResult(data.data);
      },
    }
  );

  const { data } = useQuery(
    ["MOGResult", { gameId: gameId }],
    () => getTopTinder(gameId),
    {
      onSuccess: (data) => {
        setMOGResult(data.data);
      },
    }
  );

  const { isFetching } = useQuery(
    ["POGResult", { gameId: gameId }],
    () => getPOGResult(gameId),
    {
      onSuccess: (data) => {
        setPOGResult(data.data);
      },
    }
  );

  console.log("gameResult", gameResult);
  console.log("MOGResult", MOGResult);
  console.log("POGResult", POGResult);
  return (
    <Page ptr={true}>
      <Navbar
        noShadow={true}
        backLink
        title={gameResultDate(gameResult?.startTime)}
      />
      {/* 스코어보드 */}
      <div className="bg-grayscale-100 pt-mdd">
        <div className="  rounded-xl h-23 mx-base bg-grayscale-0 flex justify-around items-center">
          <div className="w-10 h-15">
            <img
              className="w-10 h-10"
              src={gameResult?.aTeamIcon}
              alt="aTeamIcon"
            />
            <div className="w-10-h-5 text-center">{gameResult?.aTeamName}</div>
          </div>
          <div className="w-30 h-10 flex justify-around items-center">
            <div
              className={
                gameResult.aTeamScore === 2
                  ? "text-primary-500 text-xxl font-bold"
                  : "text-grayscale-300 text-xxl font-bold"
              }
            >
              {gameResult.aTeamScore}
            </div>
            <div className="text-grayscale-300 text-base font-medium">vs</div>
            <div
              className={
                gameResult.bTeamScore === 2
                  ? "text-primary-500 text-xxl font-bold"
                  : "text-grayscale-300 text-xxl font-bold"
              }
            >
              {gameResult.bTeamScore}
            </div>
          </div>
          <div className="w-10 h-15">
            <img
              className="w-10 h-10"
              src={gameResult?.bTeamIcon}
              alt="bTeamIcon"
            />
            <div className="w-10-h-5 text-center">{gameResult?.bTeamName}</div>
          </div>
        </div>
        {/* mog 10 */}
        <div className="ml-base mt-8 text-base font-semibold">MOG 10</div>
        <div className="overflow-x-scroll flex ml-base mt-4 h-70 ">
          {MOGResult.length ? (
            MOGResult.map((mog, key) => {
              return (
                <div
                  key={key}
                  className="w-60 h-70 mr-mdd rounded-xl bg-grayscale-0"
                >
                  {/* mog upper */}
                  <div className="h-44 flex-col">
                    <div className="ml-base relative w-5 h-6">
                      <img
                        className="w-1 absolute"
                        src="/assets/icons/Ranking Badge.png"
                        alt="ranking"
                      />
                      <div className="w-1 absolute bottom-1.5 left-1.5">
                        {mog.rank}
                      </div>
                    </div>
                    <div className="text-base font-medium mt-3 w-52 h-30 mx-mdd flex items-center justify-center">
                      {mog.tinder.message}
                    </div>
                  </div>
                  <div className="px-mdd py-mdd h-12 flex items-center">
                    <img src="/assets/icons/Emoji/emojis.png" alt="emojis" />{" "}
                    <div className="h-4 text-xs font-medium ml-xs flex items-center">
                      {mog.tinder.like + mog.tinder.superlike}개
                    </div>
                  </div>
                  {/* mog down */}
                  <div className="h-14 p-2 border-t border-grayscale-200 flex">
                    <div className="ml-sm w-10 h-10 flex items-center jusitfy-center">
                      {mog?.tinder?.team ? (
                        <img
                          className="w-7 h-7"
                          src={mog.tinder.team.icon}
                          alt="teamIcon"
                        />
                      ) : (
                        <img
                          className="w-7 h-7"
                          src="/assets/icons/My.png"
                          alt="userIcon"
                        />
                      )}
                    </div>
                    <div className="ml-2 w-1">
                      <div className="text-sm">{mog.tinder.user.nickname}</div>
                      <div className="text-xs">
                        {moment(mog.tinder.createdAt).fromNow()}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })
          ) : (
            <div className="w-1 h-70 mr-mdd rounded-xl bg-grayscale-0 flex items-center justify-center">
              표시할 메시지가 없습니다.
            </div>
          )}
        </div>
        {/* pog */}
        <div className="ml-base mt-8 text-base font-semibold">
          스윕러들의 MVP
        </div>
        <div className="mx-base  mb-16">
          <Toolbar
            style={{ height: 50, marginTop: "16px", backgroundColor: "white" }}
            className="  rounded-t-xl"
            tabbar
            noHairline={false}
          >
            <Link tabLink="#tab-aTeam" tabLinkActive>
              {POGResult?.aTeam?.name}
            </Link>
            <Link tabLink="#tab-bTeam">{POGResult?.bTeam?.name}</Link>
          </Toolbar>
          <Tabs>
            <Tab className="h-112" id="tab-aTeam" tabActive>
              <POGDetail pogInfo={POGResult?.aTeam} />
            </Tab>
            <Tab className="h-112 " id="tab-bTeam">
              <POGDetail pogInfo={POGResult?.bTeam} />
            </Tab>
          </Tabs>
        </div>
      </div>
    </Page>
  );
}

export default MatchDetailPage;
