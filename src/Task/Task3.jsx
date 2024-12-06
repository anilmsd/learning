import React, { useState, useEffect } from 'react';
export default function Task3() {
    const [users, setUsers] = useState([
        {
            id: 1,
            name: "anil",
            isCompleted: false
        },
        {
            id: 2,
            name: "anand",
            isCompleted: false
        }
    ]);

    const [newUser, setNewUser] = useState('');

    const [list, setList] = useState([
        { id: 1, userId: 1, name: "book1" },
        { id: 2, userId: 2, name: "book2" },
        { id: 3, userId: 1, name: "book3" },
        { id: 4, userId: 2, name: "book4" },
        { id: 5, userId: 1, name: "book5" },
    ])

    const [relatedUserBooks, setRelatedBooks] = useState([]);

    const addUser = () => {
        const data = [...users, { id: users.length + 1, name: newUser, isCompleted: false }]
        console.log(data);
        setUsers(data);
        setNewUser('');
    }

    const deleteUser = (id) => {
        const newData = users.filter(user => user.id !== id);
        setUsers(newData);
    }

    const handleStatus = (index) => {
        console.log("index", index);
        const newList = [...users];
        newList[index].isCompleted = !newList[index].isCompleted;
        console.log(newList);
        setUsers(newList);
    }

    const handleData = (event) => {
        console.log(event.target.value)
        const relatedBooks = list.filter(list => list.userId == event.target.value);
        setRelatedBooks(relatedBooks);

    }




    return (
        <div>
            <div>
                <input type='text' placeholder='Enter a name'
                    onChange={(e) => setNewUser(e.target.value)}
                    value={newUser}
                />
                <button onClick={addUser}>Add</button>
            </div>
            <div>
                <h3>List of Users</h3>
                <ul>
                    {users.map((user, index) => (
                        <li key={user.id}>
                            {user.name}
                            <button onClick={() => deleteUser(user.id)}>Delete</button>
                            <button onClick={() => handleStatus(index)}> {user.isCompleted ? 'Completed' : 'Pending'}</button>
                        </li>

                    ))}
                </ul>
            </div>
            <div>
                <select onChange={handleData}>
                    <option value={''}>Select a value</option>
                    {users.map(user => (
                        <option value={user.id}>{user.name}</option>
                    ))}
                </select>
            </div>
            <div>
                <h3>Relative User books</h3>
                <ol>
                    {relatedUserBooks && relatedUserBooks.map(list => (
                        <li>{list.name}</li>
                    ))}
                </ol>
            </div>
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', border: '3px solid', gap: '10px', padding: '30px' }} >
                <div style={{ width: '500px', height: '200px', backgroundColor: 'blue', padding: '100px', textAlign: 'center', boxSizing: 'border-box' }}>Container 1</div>
                <div style={{ width: '500px', height: '200px', backgroundColor: 'yellow', padding: '100px', textAlign: 'center', boxSizing: 'border-box' }}>Container 2</div>
            </div>
        </div>
    )
}