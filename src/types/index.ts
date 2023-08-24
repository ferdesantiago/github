export interface ChartProps {
  data: Commits[];
}

export interface CardProps {
  data: Commits[];
  removeCard: (repoId: number, name: string) => void
}

export interface SearchProps {
  search: string;
  setSearch: React.Dispatch<React.SetStateAction<string>>;
  handleSelect: (owner: string, repoName: string, fullname: string, id: number) => void;
  results: ResultGithub[];
}

export interface SVGSearch {
  stroke?: string;
  width?: string;
  height?: string;
}

export interface ResultGithub {
  full_name: string;
  name: string;
  owner: {
    login: string;
    id: number;
  };
}

export interface Commits {
  name: string;
  [key: string]: number | string;
}

export interface Repository {
  timestamp: string;
}