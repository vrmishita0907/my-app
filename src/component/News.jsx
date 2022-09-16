import React from "react";
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';


function News() {
  return (
    <>
      <Box sx={{ width: '90%', maxWidth: 500, backgroundColor: "black", color: "white", }}>
        <Typography sx={{ padding: '20px', }} variant="h6" >
          NEWS & EVENTS
        </Typography>
        <Typography sx={{ color: "#f7f7f7", padding: '20px' }} variant="subtitle1" >
          'INDIA, September 2022'
        </Typography>
        <Typography sx={{ color: "#f7f7f7", padding: '20px' }} variant="h3" >
        Glimpses from the action-packed Tarento Badminton Championship 2022!
        </Typography>
        <Typography sx={{ color: " darkgray", margin: '20px' }} variant="subtitle2" >
          Four categories. 33 high-energy matches. And the smashing #TarentoBadmintonChampionship 2022 ended on a high note Saturday, 27th September, 2022!
        </Typography>
        <Typography sx={{ margin: '20px' }} variant="h6" gutterBottom>
          LATEST
        </Typography>
        <Typography sx={{ color: "darkgray", margin: '20px' }} variant="subtitle1" gutterBottom>
          India, June 2022
        </Typography>
        <Typography sx={{ color: "#f7f7f7", margin: '20px' }} variant="body1" gutterBottom>
        A toast to Tarento's Toastmasters 350th Meeting Milestone
        </Typography>
        <Typography sx={{ color: "darkgray", margin: '20px' }} variant="subtitle1" >
          India, May 2022
        </Typography>
        <Typography sx={{ color: "#f7f7f7", margin: '20px' }} variant="body1" >
        A peek into some moments of Tarento Premier League 2022!
        </Typography>
        <Typography sx={{ color: "#f7f7f7", margin: '20px' }} variant="h6" >
        Veiw All News
        </Typography>
      
      


      </Box>
    </>
  );
}

export default News;
