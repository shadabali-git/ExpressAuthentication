import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '@/redux/store';
import { addFriend } from '@/redux/features/FriendsSlice';

export const FriendsList: React.FC = () => {
    const [input, setInput] = useState('');
    const dispatch = useDispatch();
    const friends = useSelector((state: RootState) => state.friends.list);

    const handleAdd = () => {
        if (input.trim()) {
            dispatch(addFriend({ id: input, name: input, isOnline: false }));
            setInput('');
        }
    };

    return (
        <div>
            <h3>Friends</h3>
            <ul>
                {friends.map(f => (
                    <li key={f.id}>
                        {f.name} {f.isOnline ? '🟢' : '⚪'}
                    </li>
                ))}
            </ul>
            <input value={input} onChange={e => setInput(e.target.value)} placeholder="Friend ID" />
            <button onClick={handleAdd}>Add Friend</button>
        </div>
    );
};
