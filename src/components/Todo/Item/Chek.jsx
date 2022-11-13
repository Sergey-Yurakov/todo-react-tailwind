import cn from 'classnames';
import { BsCheck } from 'react-icons/bs';

const Chek = ({ isActive }) => {
    return (
        <div
            className={cn('border-2 border-pink-500 rounded-lg mr-2 w-5 h-5', {
                'bg-pink-500': isActive,
            })}
        >
            {isActive && <BsCheck size={16} />}
        </div>
    );
};

export default Chek;
