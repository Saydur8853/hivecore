import "./Header.css"
import React from 'react'
import companyLogo from '../assets/images/hivecore_logo.png'
import bannerImage from '../assets/images/BannerImage.jpg'
export default function Header() {
    return (
        <div>
            <div className="logo">
                <img src={companyLogo} alt="Hivecore LTD"></img>

                <h3>SIMPLIFYING YOUR ROAD TO SUCCESS</h3>

            </div>

            <img className="banner" src={bannerImage} alt="Hivecore LTD"></img>
        </div>
    )
}

