import React, { useState } from "react";
import { Header, Input, Button, Message } from "semantic-ui-react";

const LoginChallenge = ({ setChallengeStatus }) => {
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  const submitPassword = () => {
    const secret = "Biertje07";
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
      <Header>Hi S. Knetter</Header>
      <Header>Enter your password to continue</Header>
      <Input
        onChange={(e, d) => setPassword(d.value)}
        value={password}
        type="password"
      />
      <Button onClick={() => submitPassword()}>Submit</Button>
      {message === "FAILURE" ? <Message negative>FAILURE</Message> : null}
      {message === "SUCCESS" ? <Message positive>SUCCESS</Message> : null}
      {message === "SUCCESS" ? (
        <Button onClick={() => setChallengeStatus(1)}>Go deeper</Button>
      ) : null}
    </div>
  );
};

export default LoginChallenge;
