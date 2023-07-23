import React from 'react';
import { nanoid } from '@reduxjs/toolkit';
import { useSelector, useDispatch } from 'react-redux';
import { selectFilter } from 'redux/contacts/selectors';
import { changeFilter } from 'redux/filter/filterSlice';
import { FilterTitle } from './Filter.styled';

const filterInputId = nanoid();

export const Filter = () => {
  const value = useSelector(selectFilter);
  const dispatch = useDispatch();
  const onChange = event => {
    const normalizedValue = event.target.value.toLowerCase();

    dispatch(changeFilter(normalizedValue));
  };
  return (
    <label>
      Find contacts by name
      <FilterTitle
        type="text"
        value={value}
        onChange={onChange}
        id={filterInputId}
      />
    </label>
  );
};
