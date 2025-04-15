import React, { useMemo, useState} from 'react';
import { ListItem } from './components';
import useData from './useData';
import useSort from './useSort';

const SubTitle: React.FC<any> = ({children}) => (
    <h2 className={'list-subtitle'}>Active Item ID: {children}</h2>
)

function ListPage() {
    const items = useData();
    const [sortedItems, sortBy, handleSortClick] = useSort(items);
    
    const [activeItemId,  setActiveItemId] = useState<any>(null);
    const [query, setQuery] = useState<string>('');
    
    const activeItemText = activeItemId ?? 'Empty'; //решила, что ?? в этом случае более читаемый и экономный по памяти
    
  const handleItemClick = (id: any) => {
    setActiveItemId(id);
  };
  
  const handleQueryChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      setQuery(event.target.value);
  }

    const filteredItems = useMemo(() => {
        const normalizedQuery = query
            .toLowerCase()
            .trim()
            .replace(/[.*+?^${}()|[\]\\]/g, '\\$&');

        return sortedItems.filter((item) =>
            `${item.id}`.includes(normalizedQuery)
        );
    }, [query, sortedItems]);



  return (
    <div className={'list-wrapper'}>
        <div className="list-header">
            <h1 className={'list-title'}>Items List</h1>
            <SubTitle>{activeItemText}</SubTitle>
            <button onClick={handleSortClick}>Sort ({sortBy === 'ASC' ? 'ASC' : 'DESC'})</button>
            <input type="text" placeholder={'Filter by ID'} value={query} onChange={handleQueryChange} />
        </div>
        <div className="list-container">
            <div className="list">
                {filteredItems.length === 0 && <span>Loading...</span>}
                {filteredItems.map((item, index) => (
                    <ListItem
                        key={index}
                        isactive={activeItemId===item.id}
                        id={item.id}
                        name={item.name}
                        description={item.description}
                        onClick={handleItemClick}
                    />
                ))}
            </div>
        </div>
    </div>
  );
}

export default ListPage;
