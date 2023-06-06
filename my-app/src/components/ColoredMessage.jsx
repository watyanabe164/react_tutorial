export const ColoredMessage = (props) => {
    // {color: "blue", message: "お元気ですか？"}
    // propsを分割代入
    const { color, children } = props;

    const contentStyle = {
        color: color,
        fontSize: "18px"
    };

    return <p style={contentStyle}>{children}</p>;
};