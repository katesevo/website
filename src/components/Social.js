import React from "react";
import { SocialIcon } from "react-social-icons";
import Transition from "react-transition-group/Transition";

import { defaultStyle, transitionStyles } from "../transitions";

export default ({ urls, color }) => (
    <Transition in appear timeout={2000}>
        {state => (
            <ul
                style={{
                    listStyleType: "none",
                    display: "flex",
                    padding: "0",
                    ...defaultStyle,
                    ...transitionStyles[state],
                }}
            >
                {
                    urls.map(url => (
                        <li
                            key={url}
                            style={{
                                padding: "0.5rem",
                            }}
                        >
                            <SocialIcon url={url} bgColor={color} />
                        </li>
                    ))
                }
            </ul>
        )}
    </Transition>
);
