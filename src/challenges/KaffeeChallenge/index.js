import React, { useState } from "react";
import { Header, Input, Button, Message } from "semantic-ui-react";

const KaffeeChallenge = ({ setChallengeStatus }) => {
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  const submitPassword = () => {
    const secret = "ja lekker";
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
      <Header>Koffie?</Header>
      <Input
        onChange={(e, d) => setPassword(d.value)}
        value={password}
        type="password"
      />
      <Button onClick={() => submitPassword()}>Submit</Button>
      {message === "FAILURE" ? <Message negative>FAILURE</Message> : null}
      {message === "SUCCESS" ? <Message positive>SUCCESS</Message> : null}
      {message === "SUCCESS" ? (
        <Button onClick={() => setChallengeStatus(2)}>Go deeper</Button>
      ) : null}
    </div>
  );
};

export default KaffeeChallenge;
