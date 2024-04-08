export default function Light({ bgColor, isleft }: { bgColor: string; isleft: boolean }) {
    return (
        <div
            style={{
                position: "absolute",
                width: "40vw",
                height: "40vw",
                top: "50%",
                left: isleft ? "0" : "",
                right: isleft ? "" : "0",
                transform: isleft ? "translate(-80%, -50%)" : "translate(80%, -70%)",
                backgroundColor: bgColor,
                borderRadius: "9999px",
                filter: "blur(20vw)",
                zIndex: -1,
            }}
            className=".light"
        ></div>
    );
}
