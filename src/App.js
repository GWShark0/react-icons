import React from 'react';

import AccountCircleOutlined from './icons/AccountCircleOutlined';
import Add from './icons/Add';
import ArrowDownward from './icons/ArrowDownward';
import ArrowRightAlt from './icons/ArrowRightAlt';
import ArrowUpward from './icons/ArrowUpward';
import Check from './icons/Check';
import CheckCircle from './icons/CheckCircle';
import ChevronLeft from './icons/ChevronLeft';
import ChevronRight from './icons/ChevronRight';
import Close from './icons/Close';
import Collections from './icons/Collections';
import Create from './icons/Create';
import Delete from './icons/Delete';
import Dropbox from './icons/Dropbox';
import Error from './icons/Error';
import ExpandLess from './icons/ExpandLess';
import ExpandMore from './icons/ExpandMore';
import ExploreOutlined from './icons/ExploreOutlined';
import Facebook from './icons/Facebook';
import Favorite from './icons/Favorite';
import FavoriteBorder from './icons/FavoriteBorder';
import FileCopy from './icons/FileCopy';
import GetApp from './icons/GetApp';
import GraphicEq from './icons/GraphicEq';
import Info from './icons/Info';
import InsertPhoto from './icons/InsertPhoto';
import Instagram from './icons/Instagram';
import Linkedin from './icons/Linkedin';
import Loop from './icons/Loop';
import Menu from './icons/Menu';
import MoreHoriz from './icons/MoreHoriz';
import MoreVert from './icons/MoreVert';
import Music from './icons/Music';
import PhotoCamera from './icons/PhotoCamera';
import Pinterest from './icons/Pinterest';
import Remove from './icons/Remove';
import Reply from './icons/Reply';
import Search from './icons/Search';
import Settings from './icons/Settings';
import Storyblocks from './icons/Storyblocks';
import Tune from './icons/Tune';
import Twitter from './icons/Twitter';
import Video from './icons/Video';
import VideoLibrary from './icons/VideoLibrary';
import Vimeo from './icons/Vimeo';
import Warning from './icons/Warning';
import Youtube from './icons/Youtube';

import './App.css';

function App() {
  return (
    <div className="app">
      <div>
        <Storyblocks />
      </div>
      <div>
        <Music />
        <GraphicEq />
        <Loop />
        <InsertPhoto />
      </div>
      <div>
        <Video />
        <PhotoCamera />
        <Music />
        <AccountCircleOutlined />
      </div>
      <div>
        <Delete />
        <Add />
        <Remove />
        <FileCopy />
        <GetApp />
        <Create />
        <Settings />
        <FavoriteBorder />
        <Favorite />
        <Info />
        <Reply />
        <ExploreOutlined />
        <Search />
        <VideoLibrary />
        <Collections />
      </div>
      <div>
        <Close />
        <Check />
        <ChevronLeft />
        <ChevronRight />
        <ExpandLess />
        <ExpandMore />
        <Menu />
        <MoreVert />
        <MoreHoriz />
        <ArrowDownward />
        <ArrowUpward />
        <ArrowRightAlt />
        <Tune />
      </div>
      <div>
        <Facebook />
        <Instagram />
        <Twitter />
        <Youtube />
        <Pinterest />
        <Vimeo />
        <Linkedin />
        <Dropbox />
      </div>
      <div>
        <Error />
        <Warning />
        <CheckCircle />
        <Info />
      </div>
    </div>
  );
}

export default App;
