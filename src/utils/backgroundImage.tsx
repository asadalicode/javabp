import { useState } from "react";
import { ReactComponent as Logo } from "../assets/logo.svg";


const BackroundImage = ({ url, height, backgroundSize, backgroundAttachment, backgroundPositionY, children }: any) => {
    return (
        <div style={{
            backgroundImage: `url(${url})`,
            backgroundRepeat: 'no-repeat',
            height: height,
            'backgroundSize': backgroundSize ? backgroundSize : 'contain',
            'backgroundAttachment': backgroundAttachment ? backgroundAttachment : 'fixed',
            'backgroundPositionY': backgroundPositionY ? backgroundPositionY : '11vh',
            // height: height?height:'100vh',


        }}>
            {children}
        </div>
    )
}

export default BackroundImage
