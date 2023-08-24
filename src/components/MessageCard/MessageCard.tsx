import React, { Fragment } from "react";
import { MessageContainer, ParagraphSC } from "./styles";
import Search from "../SVG/Search/Search";

const MessageCard: React.FC = (): JSX.Element => {
  return (
    <Fragment>
      <MessageContainer>
        <Search stroke="#fff" width="45" height="45" />
        <ParagraphSC>
          Search for a GitHub repository to populate graph
        </ParagraphSC>
      </MessageContainer>
    </Fragment>
  );
};

export default MessageCard;
