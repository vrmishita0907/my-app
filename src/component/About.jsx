import React from "react";
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';


function About() {

    return (

        <> <br />

            <Box sx={{ width: '80%', maxWidth: 360, backgroundColor: "#1e8f8e", color: "white" }}>
<br />
                <Typography variant="h6" gutterBottom>
                   ABOUT TARENTO
                </Typography>
                <Typography sx={{ color: "#f7f7f7" }} variant="subtitle1" gutterBottom>
               The planet of knowledge, familiar to all Starwars fans. In Japanese, Tarento means Talent. At Tarento, we take pride in our open and flexible work culture, that promotes ownership, encourages learning and rewards risk taking. 
                </Typography> <br />
           <Typography variant="h6">
Read more
           </Typography>
            <br />
            </Box>
        </>
    )
}
 export default About; 