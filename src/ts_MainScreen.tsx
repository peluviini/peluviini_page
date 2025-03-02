import React from "react";

type MainScreenProps = {
}

const MainScreen : React.FC<MainScreenProps> = (props : MainScreenProps) => {

    return (
        <div id="MainScreen"
            style={{width : "100%", height : "100%"}}
        >
            <p>{"PREPARING"}</p>
            <img src={`${process.env.PUBLIC_URL}/favicon.png`}
                style={{width : "30%"}}
            />
        </div>
    )
}
export default MainScreen;