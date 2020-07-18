/** @jsx jsx */
import React from "react";
import { colors, utilities } from "../styleVars";
import { jsx, css } from "@emotion/core";
import { Link } from "react-router-dom";

const guidelines = css`
  max-width: ${utilities.maxWidth};
  margin: 2vh auto 0;
  padding: 1rem;

  h1 {
    margin-bottom: 2rem;
  }

  p {
    margin: 2rem 0;
  }

  .wrap {
    text-align: left;

    .first {
      color: red;
    }

    span {
      color: ${colors.primaryColor};
    }
  }
  a {
    color: ${colors.darkColor};
    &:hover {
      color: ${colors.primaryColor};
    }
  }
`;

export default function Guidelines() {
  return (
    <div css={guidelines}>
      <h1>COVID-19 POLICY & GUIDELINES & PRICING INFO</h1>
      <div className="wrap">
        <p className="first">
          We know these rules are sometimes hard to follow and make work, but
          unfortunately, these are non-negotiable. These are directions given by
          the State of Georgia and they are in place to keep everyone safe.
          Please review ALL of the terms below and make sure that ALL guidelines
          will work with your photo appointment with us. We CANNOT make ANY
          exceptions on these rules.
        </p>

        <p>
          <span>.1</span> Homes must not have ANY people present at the time of
          our appointment. Please ask the sellers to take a walk, go for a drive
          or do another allowed activity away from the house during our
          appointment. Please make sure they are gone at least 30 minutes before
          our appointment start time to allow the home to air out.
        </p>

        <p>
          <span>.2</span> Please have home ready for us before we arrive. We are
          doing whatever we can to limit our contact with your seller’s home.
          Please have garbage cans hidden,all lights on, blinds open and home
          staged how you would like the home to look in the photos.{" "}
        </p>

        <p>
          <span>.3</span> Please have a combo lockbox or a hidden key somewhere
          on the property and give us all instructions on how to access the
          home.
        </p>

        <p>
          <span>.4</span> If agent must be present to open the house up, please
          arrive early to open the house and turn all lights on and open all
          blinds, do any last minute staging, etc. Hide the key or place key in
          lockbox and leave at least 30 minutes prior to us arriving to allow
          the home to air out.
        </p>

        <p>
          <span>.5</span> We are working on a very tight schedule. Please make
          sure home is ready right at the start time of the appointment. We do
          not have time to wait for homes that are not ready to go right at the
          start time. We want to make sure all our valued clients are serviced
          at their booked time, on-time!
        </p>

        <p>
          <span>.6</span> If we arrive to the home and the home is not ready or
          there are people at the home, we will have to leave and reschedule.
          This will also incur a $75 reschedule fee. We do not want to charge
          this fee, but we need to pay the photographer for their time. PLEASE
          help us by making sure the home is ready and free of people at the
          appointment start time.
        </p>

        <p>
          <span>.7</span> If you have to cancel or change your appt, please let
          us know at least the day before the appointment to avoid the $75
          reschedule fee.
        </p>

        <p>
          <span>.8</span> During this time, we are paying the photographers that
          work with us and employees every week and at a higher rate than normal
          to help them and their families. We are asking for payment for your
          photo package to be made within 7 days of delivery of all materials to
          help us be able to add this extra care for all our contracted
          photographers and employees. Thank you SO much for your help,
          cooperation and understanding with this.
        </p>
        <Link to="/">Back to home</Link>
      </div>
    </div>
  );
}
