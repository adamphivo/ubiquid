import { IFilters } from "../../types";
import { Fade } from "react-awesome-reveal";

interface Props {
  filters: IFilters;
  setFilters: (value: IFilters) => void;
}

export default function JobsFiltersPool({ filters, setFilters }: Props) {
  const filtersComponents = Object.keys(filters).map((item) => {
    if (filters[item as keyof IFilters]) {
      return (
        <>
          <Fade>
            <button onClick={() => setFilters({ ...filters, [item as keyof IFilters]: false })}>{item}</button>
          </Fade>
        </>
      );
    }
  });

  return (
    <>
      <div>{filtersComponents}</div>
    </>
  );
}
