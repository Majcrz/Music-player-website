import logo from './logo.svg';
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Homepage from './Homepage/Homepage';
import Musicplayer from './MusicPlayer/Musicplayer';
import Fullmusic from './MusicPlayer/Fullmusic';
import Body_one from './HomeBody/Body_one';
import Main_searched from './Searched_music/Main_searched';
import Playlistmain from './Playlist/Playlistmain';
import About_music_main from './About_music/About_music_main';

function App() {
  return (
<>
 
   <BrowserRouter>
   <Routes>
      
<Route path='/' element={<Homepage/>}/>
<Route path='/musicplayer/:id' element={<Fullmusic/>}/>
<Route path='/searched/:id' element={<Main_searched/>}/>
<Route path='/playlist' element={<Playlistmain/>}/>
<Route path='/songdetails/:id' element={<About_music_main/>}/>
                
   </Routes>
   </BrowserRouter>   


</>
  );
}

export default App;
