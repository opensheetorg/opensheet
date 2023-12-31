import classNames from 'classnames';
import { useEffect, useRef } from 'react';

export default function Input({ error, ...props }) {
    const inputRef = useRef(null);
    useEffect(() => {
        inputRef.current.setCustomValidity(error ?? '');
        inputRef.current.reportValidity();
    }, [inputRef, error]);

    useEffect(() => {
        inputRef.current.addEventListener('input', () => {
            inputRef.current.setCustomValidity('');
            inputRef.current.reportValidity();
        });
    }, []);

    return (
        <input
            ref={inputRef}
            className={classNames(
                'block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500',
                { 'border-red-500': error }
            )}
            {...props}
        />
    );
}

Input.defaultProps = {
    type: 'text',
};
