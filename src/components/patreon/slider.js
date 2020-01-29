import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Slider from '@material-ui/core/Slider';
import Input from '@material-ui/core/Input';
import { Card } from '@material-ui/core';

const useStyles = makeStyles({
  root: {
    width: "90vw",
  },
  input: {
    width: 42,
  },
});

export default function InputSlider() {
  const classes = useStyles();
  const [value, setValue] = React.useState(750);

  const handleSliderChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleInputChange = event => {
    setValue(event.target.value === '' ? '' : Number(event.target.value));
  };

  const handleBlur = () => {
    if (value < 0) {
      setValue(0);
    } else if (value > 750) {
      setValue(750);
    }
  };

  const renderRewards = () => {
    const rewardObjects = [
      {
        title: "$2 - Make The Shows Better",
        description: "Make the shows better by submitting questions for The MinnMax Show and get access to our exclusive Discord."
      },
      {
        title: "$5 - Exclusive Shows/Audio",
        description: "You'll get access to exclusive MinnMax video shows and an exclusive podcast audio feed, containing early access to The MinnMax Show podcast and audio versions of our other video content."
      },
      {
        title: "$10 - Everybody Votes",
        description: "You get to vote in a poll to help decide which games we stream every Tuesday and what the next Deepest Dive game club will focus on."
      },
      {
        title: "$20 - Join Us For MinnFAQs",
        description: "Every Monday we'll stream a live Q&A combined with a viewing party for a YouTube video that we choose as a group."
      },
      {
        title: "$50 - Personalized Thank You/Name In Credits",
        description: "MinnMax will send a custom thank you video and your name will appear in the description for both the YouTube and podcast version of The MinnMax Show podcast."
      },
      {
        title: "$100 - Join The Wall Of Heroes",
        description: " Every week on The MinnMax Show video podcast, we'll include your name or Twitter handle and a (reasonable) picture of your choice in a slideshow on the TV in the MinnMax studio. This will appear dozens of times in the back half of each week's show. "
      },
      {
        title: "$400 - Podcast Supporter",
        description: "Every week on The MinnMax Show, we'll read your name or your company's name and read (at our discretion) a message/plug. You'll also be included in the Wall of Heroes on the TV behind us during The MinnMax Show podcast."
      },
      {
        title: "$500 - Play Games With Us",
        description: "Every month you can choose a MinnMax contributor and play an agreed upon online game for an hour.  You'll also be included in the Wall of Heroes on the TV behind us during The MinnMax Show podcast. "
      },
      {
        title: "$750 - Maximum Support",
        description: "Every week at the start of The MinnMax Show and The Great GOTY Hunt, we'll read your name or your company's name and read (at our discretion) a message/plug.  You'll also have a starring role within the Wall of Heroes on the TV behind us during The MinnMax Show podcast. "
      },
    ]
    var level = 0

    if (value >= 750) {
      level = 9
    } else 
    if (value >= 500) {
      level = 8
    } else 
    if (value >= 400) {
      level = 7
    } else 
    if (value >= 100) {
      level = 6
    } else 
    if (value >= 50) {
      level = 5
    } else 
    if (value >= 20) {
      level = 4
    } else 
    if (value >= 10) {
      level = 3
    } else 
    if (value >= 5) {
      level = 2
    } else
    if (value >= 2) {
      level = 1
    } else 
    if (value === 0 ) {
      level = 0
    }
    var rewardsToSHow = rewardObjects.splice(0, level)

    return rewardsToSHow.map(item => {

      return (
        <Card>
          <h3 style={{color: "darkgreen"}}>{item.title}</h3>
          <p style={{fontSize: ".5em"}}>{item.description}</p>
        </Card>
      )
    })
  }

  return (
    <div className={classes.root}>
      <Typography id="input-slider" gutterBottom >
        <h5>Start By Choosing a Donation level?</h5>
        <h6>from $2 - $750</h6>
      </Typography>
      
      <Input
            className={classes.input}
            value={value}
            margin="dense"
            onChange={handleInputChange}
            onBlur={handleBlur}
            inputProps={{
              step: 10,
              min: 1,
              max: 750,
              type: 'number',
              'aria-labelledby': 'input-slider',
            }}
          />
      <Grid container spacing={2} gridTemplateColumns="1fr" alignItems="center">
        <Grid item>
        </Grid>
        <Grid item xs>
          <Slider
            value={typeof value === 'number' ? value : 0}
            onChange={handleSliderChange}
            aria-labelledby="input-slider"
            style={{color: "darkgreen" }}
          />
        </Grid>
        <Grid item>
        </Grid>
      </Grid>
      <br></br>
      <div>

      </div>
            <h2>This is what you'll get in return</h2><div style={{fontSize: ".6em", marginBottom : ".6em"}}>Thank you for your donation, If you can't donate, thank you for being a fan</div>
            <div className ="patreon-grid">
              {renderRewards()}
            </div>
      </div>
  );
}
