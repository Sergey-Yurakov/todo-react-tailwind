import { MdDeleteOutline } from 'react-icons/md';

const Delete = () => {
    return (
        <div>
            <MdDeleteOutline
                size={20}
                className=" hover:fill-pink-500 transition-colors ease-in-out duration-700"
            />
        </div>
    );
};

export default Delete;
