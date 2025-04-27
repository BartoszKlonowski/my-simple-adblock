import React, {JSX, useEffect} from "react";
import {createRoot} from "react-dom/client";

export const Popup = (): JSX.Element => {
    useEffect(() => {
        document.addEventListener("click", (event) => {
            event.preventDefault();
        });
    }, [document]);

    return <div className="popup-view"></div>;
};

const root = createRoot(document.getElementById("root")!);
root.render(<Popup />);
