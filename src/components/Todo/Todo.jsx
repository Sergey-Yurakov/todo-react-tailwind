import { useState } from 'react';

import { data } from '../../data/mock';
import SwitchTeme from '../utils/theme/switchTeme/SwitchTeme';
import Item from './Item/Item';
import CreateTodo from './createTodo/CreateTodo';

const Todo = () => {
    const [todos, setTodos] = useState(data);

    const chekTodo = id => {
        const newData = [...todos];
        const currentTodo = newData.find(i => i.id === id);
        currentTodo.isActive = !currentTodo.isActive;
        setTodos(newData);
    };

    const deleteTodo = id => {
        const newData = [...todos].filter(i => i.id !== id);
        setTodos(newData);
    };

    return (
        <div className=" mx-auto w-6/12 pt-20 max-sm:w-10/12">
            <SwitchTeme />
            <h1 className=" text-6xl mb-10 text-center max-sm:text-4xl">
                Just do it
            </h1>
            <div>
                {todos.length ? (
                    todos.map(({ id, isActive, title }) => (
                        <div key={id}>
                            <Item
                                title={title}
                                isActive={isActive}
                                id={id}
                                chekTodo={chekTodo}
                                deleteTodo={deleteTodo}
                            />
                        </div>
                    ))
                ) : (
                    <div className=" text-xl">No todos</div>
                )}
            </div>

            <CreateTodo setTodos={setTodos} />
        </div>
    );
};

export default Todo;
