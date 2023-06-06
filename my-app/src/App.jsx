import { useState } from "react";
import { ColoredMessage } from "./components/ColoredMessage";

export const App = () => {
    console.log("レンダリング")
    // stateの定義
    const [num, setNum] = useState(0);

    // ボタンをクリックしたときの処理
    const onClickButton = () => {
        alert();
        setNum(num + 1);
    };

    return (
        <div>
            {console.log("Test")}
            <h1 style={{color: "red"}}>こんにちは！</h1>
            <ColoredMessage color="blue">お元気ですか</ColoredMessage>
            <ColoredMessage color="pink">元気ですぅ</ColoredMessage>
            <button onClick={onClickButton}>ボタン</button>
            <p>{num}</p>
        </div>
    );
};
