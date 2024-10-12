import LeftNavBar from "./Nav";
import Thumbnails from "./Videos";
import VideoContents from './VideoContent.json';
import { HashRouter as Router } from 'react-router-dom';


export default function App(){
  // let render = JSON.stringify(VideoContents);
 
  return (
    <Router>
    <>
     <div>
      
      <LeftNavBar></LeftNavBar>
      
      <Thumbnails ></Thumbnails>
    </div>
    </>
    </Router>
  );
}