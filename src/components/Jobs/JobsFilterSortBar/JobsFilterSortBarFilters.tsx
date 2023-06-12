import type { IFilters } from "../../../types";

interface Props {
  filters: IFilters;
  setFilters: (value: IFilters) => void;
}

export default function JobsFilterSortBarFilters({ filters, setFilters }: Props) {
  return (
    <>
      {/* Job type */}
      <div>
        <label>
          Frontend
          <input type="checkbox" checked={filters.isFront ? true : false} onChange={() => setFilters({ ...filters, isFront: !filters.isFront })} />
        </label>
        <label>
          Backend
          <input type="checkbox" checked={filters.isBack ? true : false} onChange={() => setFilters({ ...filters, isBack: !filters.isBack })} />
        </label>
        <label>
          Fullstack
          <input type="checkbox" checked={filters.isFullstack ? true : false} onChange={() => setFilters({ ...filters, isFullstack: !filters.isFullstack })} />
        </label>
        <label>
          Manager
          <input type="checkbox" checked={filters.isPO ? true : false} onChange={() => setFilters({ ...filters, isPO: !filters.isPO })} />
        </label>
      </div>
      {/* Contract type */}
      <div>
        <label>
          CDI
          <input type="checkbox" checked={filters.isCDI ? true : false} onChange={() => setFilters({ ...filters, isCDI: !filters.isCDI })} />
        </label>
        <label>
          CDD
          <input type="checkbox" checked={filters.isCDD ? true : false} onChange={() => setFilters({ ...filters, isCDD: !filters.isCDD })} />
        </label>
        <label>
          Stage
          <input type="checkbox" checked={filters.isInternship ? true : false} onChange={() => setFilters({ ...filters, isInternship: !filters.isInternship })} />
        </label>
        <label>
          Alternance
          <input type="checkbox" checked={filters.isApprenticeship ? true : false} onChange={() => setFilters({ ...filters, isApprenticeship: !filters.isApprenticeship })} />
        </label>
      </div>
      {/* Remote type */}
      <div>
        <label>
          Teletravail complet
          <input type="checkbox" checked={filters.isRemoteFull ? true : false} onChange={() => setFilters({ ...filters, isRemoteFull: !filters.isRemoteFull })} />
        </label>
        <label>
          Pas de teletravail
          <input type="checkbox" checked={filters.isRemoteNone ? true : false} onChange={() => setFilters({ ...filters, isRemoteNone: !filters.isRemoteNone })} />
        </label>
        <label>
          Teletravail partiel
          <input type="checkbox" checked={filters.isRemotePartial ? true : false} onChange={() => setFilters({ ...filters, isRemotePartial: !filters.isRemotePartial })} />
        </label>
        <label>
          Teletravail ponctuel
          <input type="checkbox" checked={filters.isRemotePonctual ? true : false} onChange={() => setFilters({ ...filters, isRemotePonctual: !filters.isRemotePonctual })} />
        </label>
        <label>
          Non specifie
          <input type="checkbox" checked={filters.isRemoteUnknown ? true : false} onChange={() => setFilters({ ...filters, isRemoteUnknown: !filters.isRemoteUnknown })} />
        </label>
      </div>
    </>
  );
}
