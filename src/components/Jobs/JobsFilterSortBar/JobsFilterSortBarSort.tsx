import type { Sort } from "../../../types";

interface Props {
  sort: Sort;
  setSort: (value: Sort) => void;
}

export default function JobsFilterSortBarSort({ sort, setSort }: Props) {
  return (
    <>
      <div>
        <label>Trier par :</label>
        <select name="sort" defaultValue={sort} onChange={(e) => setSort(e.target.value as Sort)}>
          <option value="date">Date</option>
          <option value="salary">Salaire</option>
        </select>
      </div>
    </>
  );
}
