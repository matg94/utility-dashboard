import { useEffect, useRef, useState } from "react";
import TodoEditableDescription from "./TodoEditableDescription";


const TodoRow = () => {


    useEffect(() => {
    }, []);

    return (
        <div className={"justify-self-center"}>
            <h1>test</h1>
            <TodoEditableDescription/>
        </div>
    );
};

export default TodoRow;