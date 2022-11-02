import { Tabs, Footer } from "antd-mobile";
import React, { useEffect, useRef, useState, useCallback } from "react";

// import pp from "pp-props";

function App() {
    const ppDiv = useRef();
    const [ppType, setPpType] = useState("full-stack");
    const [ppConnect, setPpConnect] = useState(true);
    const [ppEmailVerified, setPpEmailVerified] = useState(true);
    const [ppOnboardLink, setPpOnboardLink] = useState(
        "https://www.paypal.com"
    );

    const chipsLinkData = [
        {
            text: "AAA - Change",
            type: "link",
        },
        {
            text: "BBB - Change",
            type: "link",
        },
        {
            text: "CCC - Change",
            type: "link",
        },
    ];

    const onChipClick = (item, index) => {
        alert(`${item?.text} - index : ${index} is being Clicked (被点击了)`);

        debugger;
        switch (index) {
            case 0:
                // clickFun0();
                setPpType(ppType === "branded" ? "full-stack" : "branded");
                break;

            case 1:
                // clickFun1();
                setPpConnect(!ppConnect);
                break;

            case 2:
                // clickFun2();
                setPpEmailVerified(!ppEmailVerified);
                break;
        }

        console.log("current attribute:", ppDiv.current.dataset);
    };

    // const clickFun0 = useCallback(() => {
    //     setPpType(ppType === "branded" ? "full-stack" : "branded");
    // }, [ppType]);

    // const clickFun1 = useCallback(() => {
    //     setPpConnect(!ppConnect);
    // }, [ppConnect]);

    // const clickFun2 = useCallback(() => {
    //     setPpEmailVerified(!ppEmailVerified);
    // }, [ppEmailVerified]);

    const myScript = document.createElement("script");

    useEffect(() => {
        //1.0.4的写法
        // const myScript = document.createElement("script");
        // myScript.src = "https://unpkg.com/pp-props@1.0.4/dist/pp-props.js";
        // myScript.async = false;
        // document.body.appendChild(myScript);
        // return () => {
        //     document.body.removeChild(myScript);
        // };

        // debugger;
        //1.0.8的写法
        myScript.src = "https://unpkg.com/pp-props@latest/dist/pp-props.js";
        myScript.async = false;
        document.body.appendChild(myScript);
        return () => {
            document.body.removeChild(myScript);
        };
    }, []);

    return (
        <div className="App">
            <div title="Antd-Mobile UI Test" padding="0">
                <Tabs>
                    <Tabs.Tab title="test1" key="test1">
                        <div
                            ref={ppDiv}
                            id="pp-props"
                            data-pp-type={ppType}
                            data-pp-connected={ppConnect}
                            data-pp-email-verified={ppEmailVerified}
                            data-pp-onboardlink={ppOnboardLink}
                        ></div>
                    </Tabs.Tab>
                    <Tabs.Tab title="test2" key="test2">
                        test2 Text
                    </Tabs.Tab>
                    <Tabs.Tab title="test3" key="test3">
                        test3 Text
                    </Tabs.Tab>
                </Tabs>
            </div>

            <Footer
                chips={chipsLinkData}
                onChipClick={onChipClick}
                style={{
                    position: "fixed",
                    bottom: 0,
                    textAlign: "center",
                    width: "100%",
                }}
            ></Footer>
        </div>
    );
}

export default App;
