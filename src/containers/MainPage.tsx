import React, { useCallback, useEffect, useState } from "react";
import { Col5, Col7, FlexColContainer, MainContainer } from "./styles";
import Chart from "@/components/Chart/Chart";
import SearchBar from "@/components/SearchBar/SearchBar";
import MessageCard from "@/components/MessageCard/MessageCard";
import { getCommitActivity, searchRepositories } from "@/services/api";
import { Commits, Repository, ResultGithub } from "@/types";
import Card from "@/components/Card/Card";
import { aggregateDataByWeek } from "@/helpers/index";

const MainPage: React.FC = (): JSX.Element => {
  const [search, setSearch] = useState<string>("");
  const [results, setResults] = useState<ResultGithub[]>([]);
  const [commits, setCommits] = useState<Commits[]>([]);
  const [cards, setCards] = useState<Commits[]>([]);

  const handleSelect = async (
    owner: string,
    repoName: string,
    fullName: string,
    id: number
  ) => {
    try {
      const repositoryData: Repository[] = await getCommitActivity(
        owner,
        repoName
      );
      const [aggregatedData, newCard] = aggregateDataByWeek(
        repositoryData,
        fullName,
        id,
      );

      setCommits((prevCommits) => {
        const newCommits = [...prevCommits];

        aggregatedData.forEach((dataItem) => {
          const existingItem = newCommits.find(
            (item) => item.name === dataItem.name && item.id === id
          );

          if (existingItem) {
            if (
              existingItem[fullName] &&
              typeof existingItem[fullName] === "number" &&
              typeof dataItem[fullName] === "number"
            ) {
              existingItem[fullName] =
                (existingItem[fullName] as number) +
                (dataItem[fullName] as number);
            } else {
              existingItem[fullName] = dataItem[fullName];
            }
          } else {
            newCommits.push(dataItem);
          }
        });
        newCommits.sort(
          (a, b) => new Date(a.name).getTime() - new Date(b.name).getTime()
        );
        return newCommits;
      });

      if (newCard) {
        setCards((prevCards) => [...prevCards, newCard]);
      }

      setSearch("");
    } catch (error) {
      console.error("Error selecting repository:", error);
    }
  };

  const removeCard = (repoId: number, name: string) => {
    const newCards = cards.filter((card) => card.name !== name);
    setCards(newCards);

    const newCommits = commits.filter((commit) => commit.fullName !== name);
    setCommits(newCommits);
  };

  const getData = useCallback(async () => {
    if (search) {
      setResults(await searchRepositories(search));
    }
  }, [search]);

  useEffect(() => {
    getData();
  }, [getData]);

  return (
    <MainContainer>
      <Col7>
        <Chart data={commits} />
      </Col7>
      <Col5>
        <FlexColContainer>
          <SearchBar
            search={search}
            setSearch={setSearch}
            handleSelect={handleSelect}
            results={results}
          />
          {cards.length > 0 ? (
            <Card data={cards} removeCard={removeCard} />
          ) : (
            <MessageCard />
          )}
        </FlexColContainer>
      </Col5>
    </MainContainer>
  );
};

export default MainPage;
