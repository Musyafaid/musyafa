import PropTypes from 'prop-types';
import './ListMenu.css';

const ListMenu = ({ listname, listlink }) => {
    return (

        <li className='px-0  max-md:text-xs max-md:mx-1 mx-5 h-full flex flex-col items-center text-center rounded-sm  hover:text-slate-900'>
            <a className='hover:text-rose-600'

                href={listlink} >
                {listname}
            </a>

           
        </li>

    );
};

ListMenu.propTypes = {
    listname: PropTypes.string.isRequired,
    listlink: PropTypes.string.isRequired,
};

export default ListMenu;
