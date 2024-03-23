import { useEffect, useRef, useState } from "react";
import TodoEditableDescription from "./TodoEditableDescription";
import TodoRow from "./TodoRow";
import {Button, Table, TableContainer, Tbody, Td, Th, Thead, Tr} from "@chakra-ui/react";
import Countdown from "../countdown";


const TodoList = () => {


    useEffect(() => {
    }, []);

    return (
        <TableContainer>
            <Table>
                <Thead>
                    <Tr>
                        <Th>Focus</Th>
                        <Th>Task Description</Th>
                        <Th>Time Spent</Th>
                        <Th>Actions</Th>
                    </Tr>
                </Thead>
                <Tbody>
                    <Tr>
                        <Td><Button/></Td>
                        <Td><TodoEditableDescription/></Td>
                        <Td>23:00</Td>
                        <Td><Button/></Td>
                    </Tr>
                </Tbody>
            </Table>
            <TodoRow/>
            <TodoRow/>
        </TableContainer>

    );
};

export default TodoList;