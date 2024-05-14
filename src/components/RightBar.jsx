import { Avatar, AvatarGroup, Box, ImageList, ImageListItem, Typography } from "@mui/material";
import Conversations from './Conversations';
function RightBar() {
    return (
        <Box
            flex={ 2 }
            p={ 2 }
            sx={ { display: { xs: "none", sm: "block" } } }
        >
            <Box position="fixed">
                <Typography variant="h6" fontWeight="300" mb={1}>
                    Online Friends
                </Typography>
                <AvatarGroup max={ 4 }>
                    <Avatar
                        alt="Remy Sharp"
                        src="https://material-ui.com/static/images/avatar/1.jpg"
                    />
                    <Avatar
                        alt="Travis Howard"
                        src="https://material-ui.com/static/images/avatar/2.jpg"
                    />
                    <Avatar
                        alt="Cindy Baker"
                        src="https://material-ui.com/static/images/avatar/3.jpg"
                    />
                    <Avatar alt="Agnes Walker" src="" />
                    <Avatar
                        alt="Trevor Henderson"
                        src="https://material-ui.com/static/images/avatar/6.jpg"
                    />
                    <Avatar
                        alt="Trevor Henderson"
                        src="https://material-ui.com/static/images/avatar/7.jpg"
                    />
                    <Avatar
                        alt="Trevor Henderson"
                        src="https://material-ui.com/static/images/avatar/8.jpg"
                    />
                    <Avatar
                        alt="Trevor Henderson"
                        src="https://material-ui.com/static/images/avatar/7.jpg"
                    />
                    <Avatar
                        alt="Trevor Henderson"
                        src="https://material-ui.com/static/images/avatar/8.jpg"
                    />                </AvatarGroup>
                <Typography variant="h6" fontWeight="300" mt={2} mb={1}>
                    Latest Photos
                </Typography>
                <ImageList cols={2} rowHeight={100} gap={5}>
                    <ImageListItem>
                        <img
                            src="https://material-ui.com/static/images/image-list/breakfast.jpg"
                            alt=""
                        />
                    </ImageListItem>
                    <ImageListItem>
                        <img
                            src="https://material-ui.com/static/images/image-list/burgers.jpg"
                            alt=""
                        />
                    </ImageListItem>
                    <ImageListItem>
                        <img
                            src="https://material-ui.com/static/images/image-list/burgers.jpg"
                            alt=""
                        />
                    </ImageListItem>
                    <ImageListItem>
                        <img
                            src="https://material-ui.com/static/images/image-list/camera.jpg"
                            alt=""
                        />
                    </ImageListItem>
                </ImageList>
                <Typography variant="h6" fontWeight="300" mt={2} mb={1}>
                    Latest Conversations
                </Typography>
                <Conversations />
            </Box>
        </Box>
    )
}

export default RightBar;