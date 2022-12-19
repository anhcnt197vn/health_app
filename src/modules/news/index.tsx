import { ArticlesContainer } from "./containers/ArticlesContainer";
import { RecommendedContainer } from "./containers/RecommendedContainer";

export const NewsModule: React.FC = () => {
  return (
    <>
      <RecommendedContainer />
      <ArticlesContainer />
    </>
  );
};
