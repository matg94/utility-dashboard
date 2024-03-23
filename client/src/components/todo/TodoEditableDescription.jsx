import {
    EditablePreview,
    Box,
    useColorModeValue,
    IconButton,
    Input,
    useDisclosure,
    useEditableControls,
    ButtonGroup,
    SlideFade,
    Editable,
    Tooltip,
    EditableInput
} from "@chakra-ui/react";
import {CheckIcon, CloseIcon} from "@chakra-ui/icons";
import {useState} from "react";

function EditableControls() {
    const {
        isEditing,
        getSubmitButtonProps,
        getCancelButtonProps,
        getEditButtonProps
    } = useEditableControls();

    return isEditing ? (
        <ButtonGroup justifyContent="end" size="sm" w="full" spacing={2} mt={2}>
            <IconButton icon={<CheckIcon/>} {...getSubmitButtonProps()} />
            <IconButton
                icon={<CloseIcon boxSize={3}/>}
                {...getCancelButtonProps()}
            />
        </ButtonGroup>
    ) : null;
}

const TodoEditableDescription = (props) => {

    const [description, setDescription] = useState(props.description);
    const handleSubmit = () => {
        props.handleSubmit(description);
    };

    return (
        <Editable
            defaultValue={props.description}
            isPreviewFocusable={true}
            selectAllOnFocus={true}
            onSubmit={handleSubmit}
            onChange={setDescription}>
            <Tooltip label="Click to edit" shouldWrapChildren={true}>
                <EditablePreview
                    py={2}
                    px={4}
                    _hover={{
                        background: useColorModeValue("gray.100", "gray.700")
                    }}
                />
            </Tooltip>
            <Input py={2} px={4} as={EditableInput}/>
            <EditableControls/>
        </Editable>
    );
};

export default TodoEditableDescription;