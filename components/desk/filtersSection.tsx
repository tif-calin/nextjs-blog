import React from 'react';
import { getMinMax, getValueCounts } from '../../lib/utils';
import styles from './desk.module.scss';

interface Props {
  filterFields: string[];
  items: { [key: string]: any }[];
  allItems: { [key: string]: any }[];
  handleCheckboxFilter: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleSelectFilter: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  handleRangeFilter: (filterField: string, filterValue: number, minOrMax: string) => void;
  minMaxes: { [key: string]: { min?: number, max?: number } };
};

const FiltersSection = (props: Props) => {
  const { filterFields, items, allItems, minMaxes } = props;
  const { handleCheckboxFilter, handleRangeFilter, handleSelectFilter } = props;

  const findFilterType = (field: string): 'range' | 'checkboxes' | 'select' => {
    const match = allItems.find(item => item[field])?.[field];

    if (Array.isArray(match)) return 'checkboxes';
    return typeof match === 'number' ? 'range' : 'select';
  };

  const renderSelectFilters = (field: string) => {
    const counts = getValueCounts(items.map(item => item[field]));

    return <select
        name={field}
        onChange={handleSelectFilter}
      >
      <option value="">any</option>

      {Object.entries(counts).map(([key, val]) => 
        <option
          key={key}
          value={key}
        >
          {key} [{val}]
        </option>
      )}
    </select>;
  };

  const renderCheckboxFilters = (field: string) => {
    const counts = getValueCounts(items.map(item => item[field]));

    return Object.entries(counts).map(([key, val]) => (
      <label key={key}>
        <input
          type="checkbox"
          value={key}
          onChange={handleCheckboxFilter}
        />
        <span>{key}</span>
        <span>{val}</span>
      </label>
    ));
  };

  const renderRangeFilters = (field: string) => {
    const [min, max] = getMinMax(allItems.map(item => item[field]));
    if (!minMaxes[field]) minMaxes[field] = { min, max };
    
    return <div>
      <label>
        <span>min:</span>
        <input 
          name={field}
          type="number"
          defaultValue={min}
          min={min}
          max={minMaxes?.[field]?.max}
          onChange={e => {
            handleRangeFilter(field, Number(e.target.value), 'min');
          }}
        />
      </label>
      <label>
        <span>max:</span>
        <input 
          name={field}
          type="number"
          defaultValue={max}
          max={max}
          min={minMaxes?.[field]?.min}
          onChange={e => {
            handleRangeFilter(field, Number(e.target.value), 'max');
          }}
        />
      </label>
    </div>
  };

  return (
    <fieldset className={styles.filter}>
      <legend>filter</legend>
      
      {filterFields.map(field => <fieldset key={field}>
        <legend>{field.replace('_', ' ')}</legend>

        {
          findFilterType(field) === 'select' 
            ? renderSelectFilters(field) 
            : findFilterType(field) === 'checkboxes'
              ? renderCheckboxFilters(field)
              : renderRangeFilters(field)
        }

      </fieldset>)}
    </fieldset>
  );
};

export default FiltersSection;
