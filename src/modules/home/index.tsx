import AchievementRateContainer from "./containers/AchievementRateContainer";
import { MealHistoryContainer } from "./containers/MealHistoryContainer";
import { MenuButtonContainer } from "./containers/MenuButtonContainer";

export const HomeModule: React.FC = () => {
  return (
    <>
      <AchievementRateContainer />
      <MenuButtonContainer />
      <MealHistoryContainer />
    </>
  );
};
