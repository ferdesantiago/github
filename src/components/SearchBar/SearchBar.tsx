import { ResultGithub, SearchProps } from "@/types";
import React, { Fragment } from "react";
import {
  InputSearch,
  ResultItem,
  ResultaLanguage,
  ResultaName,
  ResultsList,
  SearchContainer,
  SearchIcon,
} from "./styles";
import Search from "../SVG/Search/Search";

const SearchBar: React.FC<SearchProps> = ({
  search,
  setSearch,
  handleSelect,
  results,
}): JSX.Element => {
  return (
    <Fragment>
      <SearchContainer>
        <InputSearch
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Search a Github Repository..."
        />
        <SearchIcon>
          <Search />
        </SearchIcon>
        {results.length > 0 && search && (
          <ResultsList>
            {results.map((result: ResultGithub, idx: number) => (
              <ResultItem key={idx} onClick={()=> handleSelect(result.owner.login, result.name, result.full_name, result.owner.id)}>
                <ResultaName>{result.full_name.split('/')[0]} / </ResultaName>
                <ResultaLanguage>{result.full_name.split('/')[1]}</ResultaLanguage>
              </ResultItem>
            ))}
          </ResultsList>
        )}
      </SearchContainer>
    </Fragment>
  );
};

export default SearchBar;
