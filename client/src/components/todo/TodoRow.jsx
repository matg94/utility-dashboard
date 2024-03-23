import { useEffect, useRef, useState } from "react";
import TodoEditableDescription from "./TodoEditableDescription";
import {Button, Stack, Td, Tr} from "@chakra-ui/react";
import {FaMagnifyingGlass} from "react-icons/fa6";
import {CheckIcon, DeleteIcon} from "@chakra-ui/icons";


const TodoRow = (props) => {

    const [timer, setTimer] = useState({
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0,
    });

    return (
        <Tr>
            <Td>
                <Button
                    colorScheme={props.isFocused ? 'gray' : 'teal'}
                    leftIcon={<FaMagnifyingGlass/>}
                    onClick={props.onFocus}>
                    Focus
                </Button>
            </Td>
            <Td>
                <TodoEditableDescription
                    handleSubmit={props.onDescriptionSubmit}
                    description={props.description}/>
            </Td>
            <Td isNumeric>{props.timer}</Td>
            <Td>
                <Stack justify={'right'} direction={'row'} spacing={4}>
                    <Button colorScheme={'red'} leftIcon={<DeleteIcon/>}>Delete</Button>
                    <Button colorScheme={'green'} leftIcon={<CheckIcon/>}>Complete</Button>
                </Stack>
            </Td>
        </Tr>
    );
};

export default TodoRow;