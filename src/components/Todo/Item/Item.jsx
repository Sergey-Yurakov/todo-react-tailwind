import cn from 'classnames';

import Chek from './Chek';
import Delete from './Delete';

const Item = ({ id, isActive, title, chekTodo, deleteTodo }) => {
    return (
        <div
            key={id}
            className="flex justify-between p-4 dark:bg-gray-800 bg-green-100 rounded-xl mb-2"
        >
            <button
                className=" flex items-center w-full"
                onClick={() => chekTodo(id)}
            >
                <Chek isActive={isActive} />
                <span className={cn({ ' line-through': isActive })}>{title}</span>
            </button>
            <button className="flex items-center" onClick={() => deleteTodo(id)}>
                <Delete />
            </button>
        </div>
    );
};

export default Item;
