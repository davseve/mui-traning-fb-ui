import { useState } from "react";
import {
    Box,
    Fab,
    Modal,
    styled,
    Tooltip,
    Typography,
    Avatar,
    TextField,
    ButtonGroup,
    Button,
    Stack
} from "@mui/material";
import { Add, DateRange, EmojiEmotions, PersonAdd, VideoCameraBack, Image } from "@mui/icons-material"

const StyledModal = styled(Modal)({
    display:"flex",
    alignItems:"center",
    justifyContent:"center"
})

const UserBox = styled(Box)({
    display:"flex",
    alignItems:"center",
    justifyContent:"start"
})
const AddPost = () => {
    const [ modalState, setModalState]= useState(false);
    return (
        <>
            <Tooltip
                onClick={(e) => ( setModalState( true ))}
                title="Add Post" sx={{ position: "fixed", bottom: 20, left: 20 }}>
                <Fab color="primary" aria-label="add">
                    <Add />
                </Fab>
            </Tooltip>
            <StyledModal
                open={modalState}
                onClose={(e) => (setModalState( false ))}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box width={400} minHeight={200} bgcolor={"background.default"} color={"text.primary"}  borderRadius={5} p={3}>
                    <Typography id="modal-modal-title" variant="h6" component="h2" color="gray">
                        Create Post
                    </Typography>
                    <Box>
                        <UserBox>
                            <Avatar
                                src="https://img.freepik.com/free-photo/young-bearded-man-with-striped-shirt_273609-5677.jpg?size=626&ext=jpg&ga=GA1.1.1224184972.1715299200&semt=sph"
                                width={30}
                                height={30}
                            >
                            </Avatar>
                            <Typography p={2}>Dav Sev</Typography>
                        </UserBox>
                        <TextField
                            id="standard-multiline-static"
                            multiline
                            rows={3}
                            sx={{width:"100%"}}
                            placeholder="What's on your mind?"
                            variant="standard"
                        />
                    </Box>
                    <Stack direction="row" gap={1} mt={2} mb={3}>
                        <EmojiEmotions />
                        <Image />
                        <VideoCameraBack />
                        <PersonAdd />
                    </Stack>
                    <ButtonGroup
                        fullWidth
                        variant="contained">
                        <Button sx={{ width:"80%" }}>Post</Button>
                        <Button sx={{ width:"20%" }} ><DateRange /></Button>
                    </ButtonGroup>
                </Box>
            </StyledModal>
        </>
    )
}

export default AddPost;