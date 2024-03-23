import React from 'react';
import Navbar from "../components/navbar";
import Countdown from "../components/countdown";
import TodoList from "../components/todo/TodoList";
import {ChakraProvider} from "@chakra-ui/react";

const MainPage = () => {
    return (
        <ChakraProvider>
            <TodoList/>
        </ChakraProvider>
    );
};

export default MainPage;
