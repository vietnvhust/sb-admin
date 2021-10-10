import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { getUserPaination } from '../../../stores/user';
import { UserList } from './UserList';

export const User = () => {
    const dispatch = useDispatch();
    useEffect(()=> {
        dispatch(getUserPaination(1, ""))
    }, [])
    return (
        <UserList />
    );
};