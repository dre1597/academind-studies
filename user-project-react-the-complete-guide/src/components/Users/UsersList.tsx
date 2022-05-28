import Card from '../UI/Card';
import classes from './styles/UsersList.module.css';

import { User } from '../../types';

interface Props {
    users: User[];
}

const UsersList: React.FC<Props> = ({ users }) => {
    return (
        <Card styles={classes.users}>
            <ul>
                {users.map((user) => (
                    <li key={user.id}>
                        {user.name} ({user.age} years old)
                    </li>
                ))}
            </ul>
        </Card>
    );
};

export default UsersList;
