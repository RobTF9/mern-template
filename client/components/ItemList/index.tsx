import React from 'react';
import { ItemListWrapper } from './styles';

interface Props {
  value: string;
}

const ItemList: React.FC<Props> = ({ value }) => {
  return (
    <ItemListWrapper>
      <p>{value}</p>
    </ItemListWrapper>
  );
};

export default ItemList;
