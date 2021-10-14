import React, { useEffect, useState } from 'react';
import { getValueCounts } from '../../lib/utils';
import styles from './desk.module.scss';
import FiltersSection from './filtersSection';

interface Props {
  config: any;
  data: any[];
};

const Desk = ({ config, data }: Props) => {
  const [sortField, setSortField] = useState(config?.required_fields?.title || 'title');
  const [reverse, setReverse] = useState(false);
  const [query, setQuery] = useState('');
  const [queryField, setQueryField] = useState(config?.searchable_fields?.[0]);
  const [items, setItems] = useState(data);
  const [checkboxFilters, setCheckboxFilters] = useState({});
  const [rangeFilters, setRangeFilters] = useState({});
  const [selectFilters, setSelectFilters] = useState({});

  useEffect(() => {
    const newItems = items.sort((a, b) => 
      typeof a[sortField] === 'string' ?
        a[sortField].toLowerCase() > b[sortField].toLowerCase() ? 1 : -1
        : a[sortField] > b[sortField] ? 1 : -1
    );

    if (reverse) newItems.reverse();

    setItems(newItems);
  }, [reverse, sortField]);

  useEffect(() => {
    let newItems = [...data];

    // filter by selectFilter values
    if (Object.keys(selectFilters).length) {
      Object.keys(selectFilters).forEach(filterField => {
        newItems = newItems.filter(item => item[filterField] === selectFilters[filterField]);
      });
    }

    // filter by checkboxFilters values
    if (Object.keys(checkboxFilters).length) {
      Object.keys(checkboxFilters).forEach(filterField => {
        newItems = newItems.filter(item => checkboxFilters[filterField].includes(item[filterField]));
      });
    }

    // filter by rangeFilters values
    if (Object.keys(rangeFilters).length) {
      Object.keys(rangeFilters).forEach(filterField => {
        newItems = newItems.filter(item => 
          item[filterField]
          && item[filterField] >= rangeFilters[filterField].min 
          && item[filterField] <= rangeFilters[filterField].max
        );
      });
    }

    // filter by query
    if (query) {
      newItems = newItems.filter(item => {
        return item[queryField]
          ? item[queryField].toLowerCase().includes(query.toLowerCase())
          : false;
      });
    }

    setItems(newItems);
  }, [checkboxFilters, rangeFilters, selectFilters, query, queryField]);

  const handleCheckboxFilter = e => {
    const newFilters = { ...checkboxFilters };
    const filterField = e.target.name;
    const filterValue = e.target.value;

    if (e.target.checked) {
      newFilters[filterField] = [...(newFilters[filterField] || []), filterValue];
    } else {
      newFilters[filterField] = newFilters[filterField].filter(item => item !== filterValue);
      if (!newFilters[filterField].length) delete newFilters[filterField];
    }
    
    setCheckboxFilters(newFilters);
  };

  const handleSelectFilter = e => {
    const newFilters = { ...selectFilters };
    const filterField = e.target.name;
    const filterValue = e.target.value;

    if (filterValue) newFilters[filterField] = filterValue;
    else delete newFilters[filterField];

    setSelectFilters(newFilters);
  };

  // const handleSelectFilter = (filterField: string, filterValue: string) => {
  //   const newFilters = { ...selectFilters };

  //   if (filterValue) newFilters[filterField] = filterValue;
  //   else delete newFilters[filterField];

  //   setSelectFilters(newFilters);
  // }

  const handleRangeFilter = (filterField: string, filterValue: number, minOrMax: string) => {
    const newFilters = { ...rangeFilters };

    if (!newFilters[filterField]) newFilters[filterField] = {};
    newFilters[filterField][minOrMax] = filterValue;

    setRangeFilters(newFilters);
  };

  const columns = config.columns || ['title'];

  return <form className={styles.desk}>
    {/* SEARCH FIELDSET */}
    {config.searchable_fields && <fieldset className={styles.search}>
      <legend>search</legend>
      <input 
        type="search" 
        placeholder="search"
        defaultValue={query}
        onChange={e => setQuery(e.target.value)}
      />
      <select
        defaultValue={queryField}
        onChange={e => setQueryField(e.target.value)}
      >
        {config?.searchable_fields.map(field => (
          <option key={field} value={field}>{field.replace('_', ' ')}</option>
        ))}
      </select>
      <span>{items.length} items</span>
    </fieldset>}

    {/* OUTPUT FIELDSET */}
    <fieldset className={styles.output}>
      <legend>results</legend>
      <ul
        style={{
          gridTemplateColumns: `repeat(${columns.length}, auto)`
        }}
      >
        {columns.map(column => (
          <button 
            key={column}
            value={column}
            style={column === sortField ? {
              textDecorationColor: 'var(--clr-amber)'
            }: {}}
            onClick={e => {
              e.preventDefault();
              if (column === sortField) setReverse(!reverse);
              else setReverse(false);
              setSortField(column);
            }}
          >{column.replace('_', ' ')}</button>
        ))}
        {items.map((row, i) => 
          columns.map(column => {

            return <span
              key={`${column}-${i}`}
              style={i % 2 ? {
                'backgroundColor': 'rgba(var(--clr-black-rgb), 0.05)'
              } : {} }
            >
              {column === config.required_fields.title
                ? <>{config?.required_fields?.type && <span
                    className="icon"
                  >{config.icons[row[config.required_fields.type]]}</span>}
                  <a href={config?.required_fields?.url && row[config.required_fields.url]}>
                    {row[column]}
                  </a></>
                : row[column]
              }
            </span>;
          })
        )}
      </ul>
    </fieldset>

    {/* FILTERS FIELDSET */}
    {config?.filterable_fields?.length && <FiltersSection
      filterFields={config.filterable_fields}
      items={items}
      allItems={data}
      handleCheckboxFilter={handleCheckboxFilter}
      handleSelectFilter={handleSelectFilter}
      handleRangeFilter={handleRangeFilter}
      minMaxes={rangeFilters}
    />}
  </form>;
};

export default Desk;
