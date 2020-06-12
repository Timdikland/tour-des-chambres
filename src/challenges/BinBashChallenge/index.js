import React, { useState } from "react";
import { Header, Input, Button, Message } from "semantic-ui-react";

const BinBashChallenge = ({ setChallengeStatus }) => {
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  const submitPassword = () => {
    const secret = "100";
    if (password === secret) {
      setPassword("");
      setMessage("SUCCESS");
    } else {
      setMessage("FAILURE");
      setPassword("");
    }
  };

  return (
    <div>
      <Header>01 + 11 = ?</Header>
      <Input
        onChange={(e, d) => setPassword(d.value)}
        value={password}
        type="password"
      />
      <Button onClick={() => submitPassword()}>Submit</Button>
      {message === "FAILURE" ? <Message negative>FAILURE</Message> : null}
      {message === "SUCCESS" ? <Message positive>SUCCESS</Message> : null}
      {message === "SUCCESS" ? (
        <Button onClick={() => setChallengeStatus(3)}>Hack everything</Button>
      ) : null}
    </div>
  );
};

export default BinBashChallenge;
