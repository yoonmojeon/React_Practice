import React from 'react';

const User = ({userData})=> {
    return (
        <tr>
            <td>{userData.name}</td>
            <td>{userData.email}</td>
        </tr>
    )

}

const userList = () => {
    const users= [
        {email: 'user1@gmail.com', name: '유재석'},
        {email: 'user1@gmail.com', name: '김종국'},
        {email: 'user1@gmail.com', name: '하하'},
        {email: 'user1@gmail.com', name: '송지효'},

    ];

    return (
        <table>
            <thread>
                <tr>
                    <th>이름</th>
                    <th>이메일</th>
                </tr>
            </thread>
            <tbody>
                {users.map(user=><User userData={user} />)}
            </tbody>
        </table>
    )
    }

export default userList;