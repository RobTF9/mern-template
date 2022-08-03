import React from 'react';
import { ItemFormWrapper } from './styles';

interface Props {
  value: string;
}

const ItemForm: React.FC<Props> = ({ value }) => {
  return (
    <ItemFormWrapper>
      <p>{value}</p>
    </ItemFormWrapper>
  );
};

export default ItemForm;
