import * as React from "react";

export default function customContext() {
    let {Consumer, Provider} = React.createContext('njjnjnjnjnjnjnjn');

    return {Provider, Consumer};
};