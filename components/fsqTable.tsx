import React, { useEffect, useState } from 'react';
import styles from './fsqTable.module.scss';

interface Props {
  config: any;
  data: any[];
};

const FSQTable = ({ config, data }: Props) => {
  const [sortField, setSortField] = useState(config?.required_fields?.title || 'title');
  const [reverse, setReverse] = useState(false);
  const [filters, setFilters] = useState({});
  const [query, setQuery] = useState('');
  const [queryField, setQueryField] = useState(config?.searchable_fields?.[0]);
  const [items, setItems] = useState(data);

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
    let newItems = [...items];

    // filter items
    if (!Object.keys(filters).length) newItems = data;
    else {
      // do stuffs
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
  }, [filters, query, queryField]);

  const columns = config.columns || ['title'];

  return <form className={styles.fsqTable}>
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
          <option key={field} value={field}>{field}</option>
        ))}
      </select>
      <span>{items.length} items</span>
    </fieldset>}

    {/* OUTPUT FIELDSET */}
    <fieldset className={styles.output}>
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
          >{column}</button>
        ))}
        {items.map((row, i) => 
          columns.map(column => {

            return <span
              key={`${column}-${i}`}
              style={i % 2 ? {
                'backgroundColor': 'rgba(var(--clr-amber-rgb), 0.25)'
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
    {false && config?.filterable_fields?.length && <fieldset className={styles.filter}>
      <legend>filter</legend>
    </fieldset>}
  </form>;
};

export default FSQTable;
