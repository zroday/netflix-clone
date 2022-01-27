import { InfoOutlined, PlayArrow } from "@material-ui/icons";
import React from "react";
import "./featured.scss";

const Featured = ({type}) => {
    return (
        <div className="featured">
            {type && (
                <div className="category">
                    <span>{type === "movie" ? "Movies" : "Series"}</span>
                    <select name="genre" id="genre">
                        <option>Genre</option>
                        <option value="adventure">Adventure</option>
                        <option value="comedy">Comedy</option>
                        <option value="crime">Crime</option>
                        <option value="fantasy">Fantasy</option>
                        <option value="historical">Historical</option>
                        <option value="horror">Horror</option>
                        <option value="romance">Romance</option>
                        <option value="sci-fi">Sci-fi</option>
                        <option value="thriller">Thriller</option>
                        <option value="western">Western</option>
                        <option value="animation">Animation</option>
                        <option value="drama">Drama</option>
                        <option value="documentary">Documentary</option>
                    </select>
                </div>
            )}
            <img width={"100%"} src="https://poltronanerd.com.br/wp-content/uploads/2021/04/poltrona-jojos-bizarre-adventures-netflix.jpg" alt="" />
           <div className="info">
           <img src="https://occ-0-92-1723.1.nflxso.net/dnm/api/v6/LmEnxtiAuzezXBjYXPuDgfZ4zZQ/AAAABW7mACKmNvV__ZxlpAHSX3lCYUF1A7FDagjdN3G_HeMJLMhOy_r9SoSY7wqji81topQX29Birx-yvNSqAchAH2OCwyxvv3cETehZ.png" alt="" />
           <span className="desc">Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia autem nobis nostrum maxime? Earum exercitationem sunt quia itaque quidem amet accusamus consequatur, non nemo, soluta cupiditate laborum iste illo nam.</span>
           <div className="buttons">
               <button className="play">
                   <PlayArrow/>
                   <span>Play</span>
               </button>
               <button className="more">
                   <InfoOutlined/>
                   <span>More</span>
               </button>
           </div>
           </div>
        </div>
    )
}

export default Featured