import React, { useContext } from "react";
import { SyncLoader } from "react-spinners";

const Loader = () => {
    return (
        <div
            style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                width: "100vw",
                height: "calc(100vh - 50px)",
            }}
        >
            <SyncLoader className="container d-flex justify-content-center" color="black" margin={10} size={18} speedMultiplier={0.8}></SyncLoader>
        </div>
    );
};

export default Loader;
