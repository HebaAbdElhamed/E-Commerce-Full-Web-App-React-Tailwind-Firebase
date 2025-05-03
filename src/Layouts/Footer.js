import React from "react";
import FooterItem from "../Components/FooterItem";

export default function Footer() {
    return (
        <footer className="grid grid-cols-3 p-10 bg-footer" id="contact">
            <div>
                <FooterItem linkUrl='mailto:hebaabdelhamede@gmail.com' iconName='AiFillMail' titleName='hebaabdelhamede@gmail.com' />
                <FooterItem linkUrl='https://web.facebook.com/heba.abdelhamed.e/' iconName='AiFillFacebook' titleName='Heba Elgohary' />
                <FooterItem linkUrl='https://www.tiktok.com/@heba_elgohary_' iconName='AiFillTikTok' titleName='Heba Elgohary' />
            </div>
            <div>
                <FooterItem linkUrl='https://www.instagram.com/heba_elgohary__' iconName='AiFillInstagram' titleName='Heba Elgohary' />
                <FooterItem linkUrl='https://www.linkedin.com/in/heba-elgohary-a13074167/' iconName='AiFillLinkedin' titleName='Heba Elgohary' />
                <FooterItem linkUrl='https://www.behance.net/hebaabdelhamed1' iconName='AiFillBehanceSquare' titleName='Heba Elgohary' />
            </div>
            <div className="flex items-center text-white font-inria">
                <p className="text-xs">
                    © All rights reserved to Heba Elgohary.
                </p>
            </div>
        </footer>
    );
}