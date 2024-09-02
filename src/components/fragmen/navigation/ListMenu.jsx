import PropTypes from 'prop-types';
import './ListMenu.css';

const ListMenu = ({ listname, listlink }) => {
    return (

        <li className='px-8 max-md:p-2 max-md:text-xs max-md:mx-1 mx-5 h-full flex items-center text-center rounded-sm hover:bg-slate-900 hover:text-slate-900'>
            <a

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
