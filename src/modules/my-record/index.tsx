import { BodyRecordContainer } from "./containers/BodyRecordContainer";
import { ButtonRedirectionContainer } from "./containers/ButtonRedirectionContainer";
import { MyDiaryContainer } from "./containers/MyDiaryContainer";
import { MyExerciseContainer } from "./containers/MyExerciseContainer";

export const MyRecordModule: React.FC = () => {
  return (
    <>
      <ButtonRedirectionContainer />
      <BodyRecordContainer />
      <MyExerciseContainer />
      <MyDiaryContainer />
    </>
  );
};
