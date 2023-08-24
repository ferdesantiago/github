import { SVGSearch } from "@/types";
import { SVGSC } from "./styles";

const Search: React.FC<SVGSearch> = ({ stroke = "#37374A", width = '25', height = '25' }): JSX.Element => (
  <SVGSC
    width={width}
    height={height}
    viewBox="0 0 25 25"
    fill='none'
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M14.5404 18.8028C18.6351 17.0626 20.5438 12.3324 18.8036 8.23762C17.0634 4.14286 12.3332 2.23414 8.23843 3.97437C4.14367 5.7146 2.23495 10.4448 3.97518 14.5395C5.71541 18.6343 10.4456 20.543 14.5404 18.8028Z"
      stroke={stroke}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M17.0853 17.0844L23.3333 23.3333"
      stroke={stroke}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </SVGSC>
);

export default Search;
