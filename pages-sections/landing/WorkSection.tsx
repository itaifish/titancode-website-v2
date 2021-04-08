import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// @material-ui/icons

// core components
import GridContainer from "components/Grid/GridContainer";
import GridItem from "components/Grid/GridItem";
import CustomInput from "components/CustomInput/CustomInput";
import Button from "components/CustomButton/Button";

import styles from "assets/jss/pages/workStyle.js";

const useStyles = makeStyles(styles as any);

export default function WorkSection() {
  const [userName, setUserName] = React.useState("No Username Entered");
  const [email, setEmail] = React.useState("No Email Entered");
  const [message, setMessage] = React.useState("No Message Entered");
  const [actionResponse, setActionResponse] = React.useState("");


  const classes = useStyles();
  return (
    <div className={classes.section}>
      <GridContainer justify="center">
        <GridItem xs={12} sm={12} md={8}>
          <h2 className={classes.title}>Contact Us</h2>
          <h4 className={classes.description}>
            Tell us what you need and we will reach out within one business day for a free quote and consultation.  
          </h4>
          <form>
            <GridContainer>
              <GridItem xs={12} sm={12} md={6}>
                <CustomInput
                  labelText="Your Name"
                  id="name"
                  formControlProps={{
                    fullWidth: true,
                    onChange: (ev) => {
                      setUserName(ev.target.value);
                    }
                  }}
                />
              </GridItem>
              <GridItem xs={12} sm={12} md={6}>
                <CustomInput
                  labelText="Your Email"
                  id="email"
                  formControlProps={{
                    fullWidth: true,
                    onChange: (ev) => {
                      setEmail(ev.target.value);
                    }
                  }}
                />
              </GridItem>
              <CustomInput
                labelText="Your Message"
                id="message"
                formControlProps={{
                  fullWidth: true,
                  className: classes.textArea,
                  onChange: (ev) => {
                      setMessage(ev.target.value);
                    }
                }}
                inputProps={{
                  multiline: true,
                  rows: 5
                }}
              />
              <GridItem xs={12} sm={12} md={4} className={classes.textCenter}>
                <Button color="primary" onClick={() => {
                    console.log(`${userName}, ${email}, ${message}`);
                  }}>Send Message</Button>
              </GridItem>
            </GridContainer>
          </form>
        </GridItem>
      </GridContainer>
    </div>
  );
}
