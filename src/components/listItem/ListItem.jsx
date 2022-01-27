import {
  Add,
  PlayArrow,
  ThumbDownOutlined,
  ThumbUpAltOutlined,
} from "@material-ui/icons";
import React, { useState } from "react";
import "./listItem.scss";

const ListItem = ({index}) => {
  const [isHovered, setIsHovered] = useState(false);
  const trailer = "https://player.vimeo.com/video/488076966?autoplay=1&loop=1&autopause=0&muted=1";

  return (
    <div className="listItem" style={{left: isHovered && index * 225 - 50 + index * 2.5}} onMouseEnter={()=>setIsHovered(true)} onMouseLeave={()=>setIsHovered(false)}>
      <img
        src="https://sm.ign.com/ign_br/screenshot/default/blob_bund.png"
        alt=""
      />
      {isHovered && (
        <>
        <video src={trailer} autoPlay loop></video>
        <div className="itemInfo">
          <div className="icons">
            <PlayArrow className="icon"/>
            <Add className="icon"/>
            <ThumbUpAltOutlined className="icon"/>
            <ThumbDownOutlined className="icon"/>
          </div>
          <div className="itemInfoTop">
              <span>1 hour 14 mins</span>
              <span className="limit">+16</span>
              <span>1999</span>
          </div>
          <div className="desc">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quisquam, corporis culpa quia fugiat suscipit iure et voluptate ad non laborum voluptas tempora

          </div>
          <div className="genre">Action</div>
        </div>
        </>
      )}
      
    </div>
  );
};

export default ListItem;
