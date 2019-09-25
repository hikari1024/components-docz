import React, { SFC } from 'react';
import './ItemTitle.css';

export interface ItemTitleProps {
  /**
   * 标题内容
   * @default 标题内容
   */
  title: string;
}

export const ItemTitle: SFC<ItemTitleProps> = ({title}) => <h5 className="item-title">{title}</h5>;
