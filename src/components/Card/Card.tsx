import React, { Fragment, useState, useEffect } from "react";
import {
  CardContainer,
  Title2SC,
  FlexContainer,
  TitleSC,
  LastCommit,
  Followers,
  IconFollower,
  RemoveButton,
} from "./styles";
import { CardProps } from "@/types";
import { getUser } from "@/services/api";
import feather from "feather-icons";

const Card: React.FC<CardProps> = ({ data, removeCard }): JSX.Element => {
  const [followers, setFollowers] = useState<Map<number, number>>(new Map());

  useEffect(() => {
    const fetchFollowers = async () => {
      if (!data) return;
      for (const card of data) {
        const response = await getUser(+card.repoId);
        setFollowers((prev) =>
          new Map(prev).set(+card.repoId, response.followers)
        );
      }
    };

    fetchFollowers();
    feather.replace();
  }, [data]);

  return (
    <Fragment>
      {data.length > 0 &&
        data.map((card: any, index: number) => (
          <CardContainer key={card.repoId + index} color={card.color}>
            <FlexContainer>
              <TitleSC>{card.name?.split("/")[0]}</TitleSC> /{" "}
              <Title2SC>{card.name?.split("/")[1]}</Title2SC>
            </FlexContainer>
            <FlexContainer>
              <Followers>
                <IconFollower
                  height="11"
                  width="11"
                  $ml="0"
                  data-feather="star"
                ></IconFollower>
                {followers.get(card.repoId)}
              </Followers>
              <LastCommit>updated on {card.lastCommit.slice(0, 17)}</LastCommit>
              <RemoveButton
                id={`btn-${card.repoId + index}`}
                onClick={() => removeCard(card.repoId, card.name)}
              >
                <IconFollower
                  id={`icon-${card.repoId + index}`}
                  height="24"
                  width="24"
                  $ml="5"
                  data-feather="trash-2"
                ></IconFollower>
              </RemoveButton>
            </FlexContainer>
          </CardContainer>
        ))}
    </Fragment>
  );
};

export default Card;
