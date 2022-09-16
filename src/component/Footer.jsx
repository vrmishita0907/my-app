import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Codoxy from '../component/Images/Codoxy.png'


function Footer() {

    return (
        <>
            <Box sx={{ width: '100%', maxWidth: '800px', backgroundColor: 'black', color: 'white' }}>
                <Typography s variant="h6">
                    Brand
                </Typography>
                <Typography  variant="subtitle1">
                Brand guidelines
                </Typography>
                <Typography  variant="subtitle1">
                Logo and brand assets
                </Typography><br />
                <Typography s variant="h6">
                Programmes
                </Typography>
                <Typography  variant="subtitle1">
             LEAD
                </Typography>
                <Typography  variant="subtitle1">
              Blixt
                </Typography>
                <img style={{width:'90px', height:'70px'}} src={Codoxy} alt='Codoxy' />
           
            </Box>
        </>
    )
}

export default Footer;