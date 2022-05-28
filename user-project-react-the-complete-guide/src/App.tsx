import { useState } from 'react';
import AddUser from './components/Users/AddUser';
import UsersList from './components/Users/UsersList';
import { User } from './types';

const App = () => {
    const [usersList, setUsersList] = useState<User[]>([]);

    const addUserHandler = (name: string, age: number) => {
        setUsersList((prevUsersList) => {
            return [
                ...prevUsersList,
                { name, age, id: Math.random().toString() },
            ];
        });
    };
    return (
        <div>
            <AddUser onAddUser={addUserHandler} />
            <UsersList users={usersList} />
        </div>
    );
};

export default App;
