import React, {useEffect} from "react";
import dark from "../images/darkbg.mp4";
import light from "../images/lightbg.mp4";

const Background = () => {
    const getTheme = () => {
        const bodyClass = document.body.getAttribute('class');
        return bodyClass && bodyClass.includes('light') ? 'light' : 'dark';
    }

    const setBackground = (theme) => {
        if (theme === 'light') {
            document.getElementById("dark-video").style.display = 'none';
            document.getElementById("light-video").style.display = 'block';
        } else {
            document.getElementById("light-video").style.display = 'none';
            document.getElementById("dark-video").style.display = 'block';
        }
    }
    
    useEffect(() => {
        const theme = getTheme();
        setBackground(theme);
        
        const targetNode = document.body;
        const config = { attributes: true, attributeFilter: ['class'] };

        const callback = (mutationList, observer) => {
            for (const mutation of mutationList) {
                if (mutation.type === "attributes" && mutation.attributeName === "class") {
                    const theme = getTheme();
                    setBackground(theme);
                }
            }
        };

        const observer = new MutationObserver(callback);
        observer.observe(targetNode, config);

        return () => {
            observer.disconnect();
        };
    }, []);

    return (
        <div id="bg">
            <video autoPlay loop muted playsInline id="dark-video" className="video" style={{ display: 'none' }}>
                <source src={dark} type="video/mp4"></source>>
            </video>
            <video autoPlay loop muted playsInline id="light-video" className="video" style={{ display: 'none' }}>
                <source src={light} type="video/mp4"></source>
            </video>
        </div>
    )
}

export default Background;