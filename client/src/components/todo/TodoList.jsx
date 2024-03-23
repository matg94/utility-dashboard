import React, {useEffect, useRef, useState} from "react";
import TodoEditableDescription from "./TodoEditableDescription";
import TodoRow from "./TodoRow";
import {Button, Stack, Table, TableContainer, Tbody, Td, Th, Thead, Tr} from "@chakra-ui/react";
import Countdown from "../countdown";
import {CheckIcon, DeleteIcon} from "@chakra-ui/icons";
import {FaMagnifyingGlass} from "react-icons/fa6";


const MyTodoInit = [
    {
        id: "123",
        description: "This is a test description",
        timeSpent: 300,
        isFocused: true
    }, {
        id: "1234",
        description: "This is a test description",
        timeSpent: 123,
        isFocused: false
    }, {
        id: "12345",
        description: "This is a test description 2",
        timeSpent: 423,
        isFocused: false
    },
]

const TodoList = () => {

    const [focusedTodoIndex, setFocusedTodoIndex] = useState(0);
    const [myTodos, setMyTodos] = useState(MyTodoInit);

    useEffect(() => {
    }, []);

    const onComplete = (id) => {
    }
    const onDelete = (id) => {
    }
    const onFocus = (id) => {
        const updatedTodos = myTodos.map(todo => {
            if (todo.id === id) {
                return {...todo, isFocused: true};
            } else {
                return {...todo, isFocused: false};
            }
        });
        setMyTodos(updatedTodos);
    }

    const onDescriptionSubmit = (description, id) => {
        const updatedTodos = myTodos.map(todo => {
            if (todo.id === id) {
                return {...todo};
            } else {
                console.log(todo)
                return {...todo, description: description};
            }
        });
        setMyTodos(updatedTodos);
    }

    const onEdit = (id, newDescription) => {

    }

    const createTodoFromObject = (todo, index) => {
        console.log(todo.id, todo.description, todo.timeSpent)
        return <TodoRow
            description={todo.description}
            timer={todo.timeSpent}
            isFocused={todo.isFocused}
            onDescriptionSubmit={(description) => onDescriptionSubmit(description, todo.id)}
            onComplete={() => onComplete(todo.id)}
            onDelete={() => onDelete(todo.id)}
            onFocus={() => onFocus(todo.id)}
        />
    }

    return (
        <TableContainer>
            <Table>
                <Thead>
                    <Tr>
                        <Th>Focus</Th>
                        <Th>Task Description</Th>
                        <Th isNumeric>Time Spent</Th>
                        <Th isNumeric>Actions</Th>
                    </Tr>
                </Thead>
                <Tbody>
                    {myTodos
                        .sort((todo) => !todo.isFocused)
                        .map(createTodoFromObject)}
                </Tbody>
            </Table>
        </TableContainer>

    );
};

export default TodoList;