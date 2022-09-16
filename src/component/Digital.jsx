import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Button from '@mui/material/Button';

function Digital() {
    const style = {
        hover: { backgroud:'transparent',  color:'black' }
    }
    return (
        <>
            <Box sx={{ width: '500px', maxWidth: 800, backgroundColor: "white", color: "black", margin: '50px' }}>
                <Typography variant="h3">
                    Becoming Digital - Applying technologies in the right context
                </Typography><br />
                <Typography variant="subtitle1">
                    The technologies that make the world more digital are important. But technology skills are not enough. We thrive in combining our technology capabilities with business acumen. True magic happens when technologies are applied in right contexts.
                </Typography><br />
                <Button className={style} sx={{color:'black', outlinecolor:'black'}} variant="outlined">
                    KNOW MORE
                </Button>






            </Box>
        </>
    )
}

export default Digital;