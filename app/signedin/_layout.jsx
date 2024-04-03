import { Slot } from "expo-router";
import ScoreBoard from "../../components/ScoreBoard";
import LogoutButton from "../../components/Logout";
import { ScoreProvider } from "../../context/scoreContext";
import { TrophyProvider } from "../../context/trophyContext";

export default function HomeLayout() {
  return (
    <>
      <ScoreProvider>
        <TrophyProvider>
          <ScoreBoard />
          <Slot />
          <LogoutButton />
        </TrophyProvider>
      </ScoreProvider>
    </>
  );
}
