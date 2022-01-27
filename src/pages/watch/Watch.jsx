import { ArrowBackOutlined } from "@material-ui/icons";
import React from "react";
import "./watch.scss";

const Watch = () => {
    return(
        <div className="watch">
            <div className="back">
                <ArrowBackOutlined/>
                Home
            </div>
            
            <video className="video"  autoPlay progress controls src="https://vod-progressive.akamaized.net/exp=1643309925~acl=%2Fvimeo-prod-skyfire-std-us%2F01%2F2615%2F19%2F488076966%2F2188606150.mp4~hmac=6443573ef02219cd2c39d9889fe5e62f6c16f9138d0887214129f28e848bc549/vimeo-prod-skyfire-std-us/01/2615/19/488076966/2188606150.mp4"></video>
        </div>
    )
}

export default Watch