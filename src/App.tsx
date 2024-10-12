import LeftNavBar from "./Nav";
import Thumbnails from "./Videos";
import VideoContents from './VideoContent.json';



export default function App(){
  // let render = JSON.stringify(VideoContents);
 
  return (
    <>
     <div>
      
      <LeftNavBar></LeftNavBar>
      
      <Thumbnails ></Thumbnails>
    </div>
    </>
   
  );
}