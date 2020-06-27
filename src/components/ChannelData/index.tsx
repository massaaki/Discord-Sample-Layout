import React, { useRef, useEffect } from "react";

import ChannelMessage, { Mention } from "../ChannelMessage";
import { Container, Messages, Input, InputWrapper, InputIcon } from "./styles";

const ChannelData: React.FC = () => {
  const messagesRef = useRef() as React.MutableRefObject<HTMLDivElement>;

  useEffect(() => {
    const div = messagesRef.current;

    if (div) {
      div.scrollTop = div.scrollHeight;
    }
  }, [messagesRef]);

  return (
    <Container>
      <Messages ref={messagesRef}>
        <ChannelMessage
          author="UserName01"
          date="20/12/2020"
          content="Just a message"
        />
        <ChannelMessage
          author="UserName02"
          date="20/12/2020"
          content="Just a message"
          isBot
        />
        <ChannelMessage
          author="UserName03"
          date="20/12/2020"
          content={
            <>
              <Mention>UserName01</Mention>, this is a user mention example!
            </>
          }
          hasMention
        />

        {Array.from(Array(30).keys()).map((n) => (
          <ChannelMessage
            key={n}
            author={`Userfake #${n + 1}`}
            date="20/10/2020"
            content="Some message"
          />
        ))}
      </Messages>
      <InputWrapper>
        <Input type="text" placeholder="Conversar em #chat-live" />
        <InputIcon />
      </InputWrapper>
    </Container>
  );
};

export default ChannelData;
