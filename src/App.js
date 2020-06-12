import React, { useState } from "react";
import "./App.css";

import LoginChallenge from "./challenges/LoginChallenge";
import KaffeeChallenge from "./challenges/KaffeeChallenge";
import BinBashChallenge from "./challenges/BinBashChallenge";
import ChallengeCompleted from "./challenges/ChallengeCompleted";

import { Grid } from "semantic-ui-react";

function App() {
  const [status, setStatus] = useState(0);
  const setChallengeStatus = (newStatus) => {
    setStatus(newStatus);
  };
  return (
    <Grid textAlign="center" style={{ height: "100vh" }} verticalAlign="middle">
      <Grid.Column style={{ maxWidth: 450 }}>
        {status === 0 ? (
          <Grid.Row>
            <LoginChallenge setChallengeStatus={setChallengeStatus} />
          </Grid.Row>
        ) : null}
        {status === 1 ? (
          <Grid.Row>
            <KaffeeChallenge setChallengeStatus={setChallengeStatus} />
          </Grid.Row>
        ) : null}
        {status === 2 ? (
          <Grid.Row>
            <BinBashChallenge setChallengeStatus={setChallengeStatus} />
          </Grid.Row>
        ) : null}
        {status === 3 ? (
          <Grid.Row>
            <ChallengeCompleted />
          </Grid.Row>
        ) : null}
      </Grid.Column>
    </Grid>
  );
}

export default App;
