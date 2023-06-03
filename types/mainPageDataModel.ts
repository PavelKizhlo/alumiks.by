import { Advantage } from './advantage';
import { Stage } from './stage';

interface MainPageDataModel {
  id: string;
  headingText: string;
  advantages: Advantage[];
  stages: Stage[];
}

export default MainPageDataModel;
