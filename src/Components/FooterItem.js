import React from "react";
import { AiFillMail, AiFillTikTok, AiFillInstagram, AiFillBehanceSquare, AiFillFacebook, AiFillLinkedin } from "react-icons/ai";

const icons = {
    AiFillMail,
    AiFillFacebook,
    AiFillLinkedin,
    AiFillTikTok,
    AiFillInstagram,
    AiFillBehanceSquare
};

export default function FooterItem({ linkUrl, iconName, titleName }) {
    const Icon = icons[iconName];
    return (
        <a href={linkUrl} className="flex items-center mb-4 text-white font-inria"><Icon className="mr-10 text-3xl hover:scale-125" /><p className="text-xs">{titleName}</p></a>
    );
}