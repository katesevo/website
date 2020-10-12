import React from "react";
import Transition from "react-transition-group/Transition";

import { defaultStyle, transitionStyles } from "../transitions";

export default ({ text, color, font }) => (
    <Transition in appear timeout={1200}>
        {state => (
            <div
                style={{
                    maxWidth: "30em",
                    padding: "0 1em",
                    ...defaultStyle,
                    ...transitionStyles[state]
                }}
            >
                <p
                    style={{
                        fontFamily: font,
                        color: color,
                        fontSize: "1em",
                        textAlign: "center",
                    }}
                >
                    {text}
                </p>
            </div>
        )}
    </Transition>
);
