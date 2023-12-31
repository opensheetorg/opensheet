import classNames from 'classnames';

export function Button({ type, className, ...props }) {
    const types = {
        primary: 'bg-blue-500 hover:bg-blue-700 text-white',
        secondary: 'bg-gray-500 hover:bg-gray-700 text-white',
        danger: 'bg-red-500 hover:bg-red-700 text-white',
        success: 'bg-green-500 hover:bg-green-700 text-white',
        warning: 'bg-yellow-500 hover:bg-yellow-700 text-white',
        info: 'bg-indigo-500 hover:bg-indigo-700 text-white',
        light: 'bg-gray-100 hover:bg-gray-200 text-gray-800',
        dark: 'bg-gray-800 hover:bg-gray-900 text-white',
    };

    return (
        <button
            className={classNames(
                'rounded px-4 py-2 font-bold',
                types[type],
                className
            )}
            {...props}
        />
    );
}

Button.defaultProps = {
    type: 'primary',
};
