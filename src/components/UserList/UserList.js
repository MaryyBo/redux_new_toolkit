import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getUsers } from 'store/slices/usersSlice';


const UserList = () => {
    const { users, isLoading, error } = useSelector(state => state.users);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getUsers('Hello from UserList'));
    }, []);

    return (
        <section>
            {isLoading && <div>Loading...</div>}
            {error && <div>Error</div>}
            {users.length > 0 &&
                users.map((currentUserObj) => (
                    <article>{JSON.stringify(currentUserObj)}</article>
                ))}
        </section>
    );
};

export default UserList;


// API jsonplaceholder - фейкове АПІ