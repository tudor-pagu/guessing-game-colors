import React from "react";

const AppContext = React.createContext({
    rows : 6,
    columns : 4,
    colors : [
        "bg-red-500",
        "bg-yellow-300",
        "bg-green-500",
        "bg-blue-600",
        "bg-purple-600",
        "bg-yellow-900"
    ]
});

export default AppContext;