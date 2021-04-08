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
import SnackbarContent from "components/SnackbarContent/SnackbarContent";
import { Check, Warning } from "@material-ui/icons";

const useStyles = makeStyles(styles as any);

export default function WorkSection() {
    const [userName, setUserName] = React.useState("No Username Entered");
    const [email, setEmail] = React.useState("No Email Entered");
    const [message, setMessage] = React.useState("No Message Entered");
    const [actionResponse, setActionResponse] = React.useState([true, ""]);

    const [snacks, setSnacks] = React.useState([<div key={0}></div>]);

    const classes = useStyles();
    return (
        <div className={classes.section}>
            <GridContainer justify="center">
                <GridItem xs={12} sm={12} md={8}>
                    <h2 className={classes.title}>Contact Us</h2>
                    <h4 className={classes.description}>
                        Tell us what you need and we will reach out within one business day for a free quote and
                        consultation.
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
                                        },
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
                                        },
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
                                    },
                                }}
                                inputProps={{
                                    multiline: true,
                                    rows: 5,
                                }}
                            />
                            <GridItem xs={12} sm={12} md={12} className={classes.textCenter}>
                                <Button
                                    color="primary"
                                    onClick={() => {
                                        if (localStorage.getItem("hasMessaged")) {
                                            setActionResponse([
                                                false,
                                                "You have already contacted us. Don't worry, we'll get back to you shortly.",
                                            ]);
                                        } else {
                                            localStorage.setItem("hasMessaged", "true");
                                            setActionResponse([
                                                true,
                                                "Thanks for reaching out! We'll get back to you shortly.",
                                            ]);
                                        }
                                        setSnacks([
                                            ...snacks,
                                            <SnackbarContent
                                                key={parseInt(snacks[snacks.length - 1].key.toString()) + 1}
                                                message={<span>{actionResponse[1]}</span>}
                                                close
                                                fade
                                                color={actionResponse[0] ? "success" : "warning"}
                                                icon={actionResponse[0] ? Check : Warning}
                                            />,
                                        ]);
                                        setTimeout(() => {
                                            setSnacks(snacks.slice(1));
                                        }, 4000);
                                        console.log(`${userName}, ${email}, ${message}`);
                                    }}
                                >
                                    Send Message
                                </Button>
                            </GridItem>
                        </GridContainer>
                        <GridContainer>
                            <GridItem xs={12} sm={12} md={12} className={classes.textCenter}>
                                {snacks}
                            </GridItem>
                        </GridContainer>
                    </form>
                </GridItem>
            </GridContainer>
        </div>
    );
}
