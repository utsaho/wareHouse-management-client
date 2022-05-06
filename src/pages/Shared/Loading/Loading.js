import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSpinner } from '@fortawesome/free-solid-svg-icons';
const Loading = () => {
    return (
        <div className='text-primary d-flex justify-content-center align-items-center w-100' style={{ height: '70vh' }}>
            <FontAwesomeIcon icon={faSpinner} spin pulse size='4x' />
        </div>
    );
};
export default Loading;