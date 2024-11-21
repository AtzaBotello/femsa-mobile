import React, { useState } from 'react';

type ListError = 
    |  {type: 'empty'; message: string}
    |  {type: 'invalid-format'; message: string};

interface ListProps<T> {
    items: T[];
    renderItem: (item: T) => React.ReactNode;
    isReadonly?: boolean;
    error?: ListError;
}

const List = <T, >({items, renderItem, isReadonly = false, error}: ListProps<T>) => {
    const [list, setList] = useState<T[]>(items);

    const filterItems = (predicate: (item: T) => boolean) => {
        if (isReadonly) {
            console.error('Cannot filter readonly list');
            return;
        }
        const filtered = list.filter(predicate);
        if (filtered.length === 0 && error?.type === 'empty') {
            console.error(error.message);
        }

        setList(filtered);
    }

    return (
    <div>
      {list.length === 0 && error?.type === 'empty' ? (
        <p>{error.message}</p>
      ) : (
        <ul>
          {list.map((item, index) => (
            <li key={index}>{renderItem(item)}</li>
          ))}
        </ul>
      )}
      {!isReadonly && (
        <button
          onClick={() => filterItems((item) => !!item)}
          className="filter-btn"
        >
          {"Filter Items"}
        </button>
      )}
    </div>
  );
}

export default List;