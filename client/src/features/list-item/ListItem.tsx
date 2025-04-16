import React from 'react';
import { Link } from 'react-router-dom';
import {SetActiveButton} from "./set-active/ui";
const ListItem: React.FC<any> = ({ id, name, description, onClick, isActive }) => {
  return (
    <li className={isActive ? 'list-item active' : 'list-item'}>
            <div className={'list-item-actions'}>
                <div>ID: <b>{id}</b></div>
                <SetActiveButton id={id} isActive={isActive} onChange={onClick} />
            </div>
        <Link to={`/${id}`}>
            <div>{name}</div>
            <div className={'list-item__description'}>{description}</div>
        </Link>
    </li>
  );
};


export default ListItem;
