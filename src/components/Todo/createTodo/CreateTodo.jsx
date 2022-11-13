import { useState } from 'react';

const CreateTodo = ({ setTodos }) => {
    const [title, setTitle] = useState('');

    const addTodo = title => {
        setTodos(prev => [
            ...prev,
            {
                id: new Date(),
                isActive: false,
                title,
            },
        ]);
        setTitle('');
    };

    return (
        <div className="flex justify-between p-4 dark:bg-gray-800 bg-green-100 rounded-xl mb-2 border-2 border-zinc-600 mt-10">
            <input
                type="text"
                className=" border-none w-full bg-transparent outline-none"
                value={title}
                onChange={e => setTitle(e.target.value)}
                onKeyPress={e => e.key === 'Enter' && addTodo(title)}
                placeholder="Add a task"
            />
        </div>
    );
};

export default CreateTodo;
