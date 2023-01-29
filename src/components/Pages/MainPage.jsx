import { Preview } from "../Main/Preview/Preview";
import { Cowboy4Main } from "../Main/Cowboy4Main/Cowboy4Main";
import { CowboyST } from "../Main/CowboyST/CowboyST";
import { Circular } from "../Main/Circular/Circular";
import { ForWork } from "../Main/4Work/4Work";
import { AppParallax } from "../Main/AppParallax/AppParallax";

export const MainPage = (props) => {
  console.log(props);
  return (
    <>
      <Preview video={props.data.preview} />
      <Cowboy4Main data={props.data.cowboy4} />
      <CowboyST data={props.data.cowboy4st} />
      <Circular data={props.data.circular} />
      <ForWork data={props.data.work} />
      <AppParallax data={props.data.app} />
    </>
  );
};
