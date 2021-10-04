import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { getAll } from '../../../stores/user';
import { UserList } from './UserList';

export const User = () => {
    const dispatch = useDispatch();
    useEffect(()=> {
        dispatch(getAll())
    }, [])
    return (
        <UserList />
    );
};