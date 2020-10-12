import React from "react";
import Transition from "react-transition-group/Transition";

import { defaultStyle, transitionStyles } from "../transitions";

export default ({ text, color, font }) => (
    <Transition in appear timeout={400}>
        {state => (
            <div
                style={{
                    padding: "1em",
                    ...defaultStyle,
                    ...transitionStyles[state],
                }}
            >
                <h1
                    style={{
                        fontFamily: font,
                        color: color,
                        fontSize: "3em",
                        fontWeight: "normal",
                        margin: "0",
                        textAlign: "center"
                    }}
                >
                    {text}
                </h1>
            </div>
        )}
    </Transition>
);
