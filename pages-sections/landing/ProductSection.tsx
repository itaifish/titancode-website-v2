import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// @material-ui/icons
import Chat from "@material-ui/icons/Chat";
import VerifiedUser from "@material-ui/icons/VerifiedUser";
import Fingerprint from "@material-ui/icons/Fingerprint";
// core components
import GridContainer from "components/Grid/GridContainer";
import GridItem from "components/Grid/GridItem";
import InfoArea from "components/InfoArea/InfoArea";

import styles from "assets/jss/pages/productStyle.js";
import { AcUnit } from "@material-ui/icons";

const useStyles = makeStyles(styles as any);

export default function ProductSection() {
  const classes = useStyles();
  return (
    <div className={classes.section}>
      <GridContainer justify="center">
        <GridItem xs={12} sm={12} md={8}>
          <h2 className={classes.title}>What we can offer you</h2>
          <h5 className={classes.description}>
            We will solve your problem guarenteed or your money back. We won{"'"}t just give you code, we{"'"}ll work with you directly in order to evaluate the challenge in its totality, and offer a complete solution. We also offer on-call response to any problems that arise in the future. You{"'"}re not just getting a solution for today, but for as long as you need one. 
          </h5>
        </GridItem>
      </GridContainer>
      <div>
        <GridContainer>
          <GridItem xs={12} sm={12} md={4}>
            <InfoArea
              title="Message Us"
              description="We'll evaluate your needs, give you a quote, or multiple, or even advise you between choices our competitors offer. All for free."
              icon={Chat}
              iconColor="warning"
              vertical
            />
          </GridItem>
          <GridItem xs={12} sm={12} md={4}>
            <InfoArea
              title="Money Back Guarentee"
              description="Don't like the product you've gotten? We'll give you a full refund. No hassle, no problem. Yes, we're that confident. "
              icon={VerifiedUser}
              iconColor="success"
              vertical
            />
          </GridItem>
          <GridItem xs={12} sm={12} md={4}>
            <InfoArea
              title="Unique to You"
              description="We have no cookie-cutter templates or annyoing proprietary software to put you through. We design everything from scratch with your needs in mind."
              icon={AcUnit}
              iconColor="info"
              vertical
            />
          </GridItem>
        </GridContainer>
      </div>
    </div>
  );
}
