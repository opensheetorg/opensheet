import { Button } from '@/shared/form/Button';
import Input from '@/shared/form/Input';
import { Link, useForm } from '@inertiajs/react';
import classNames from 'classnames';
import zRoute from '@ziggy';

export default function Register() {
    const { data, setData, post, errors, processing } = useForm({
        username: '',
        password: '',
    });

    const handleLogin = (e) => {
        e.preventDefault();
        post('/auth/login', data);
    };

    return (
        <div className="mx-auto w-96 p-4">
            <form className="flex flex-wrap gap-2" onSubmit={handleLogin}>
                <Input
                    name="username"
                    placeholder="Username"
                    value={data.username}
                    error={errors.username}
                    onChange={(e) => setData('username', e.target.value)}
                />
                <Input
                    name="password"
                    type="password"
                    placeholder="Password"
                    value={data.password}
                    error={errors.password}
                    onChange={(e) => setData('password', e.target.value)}
                />
                <Button
                    disabled={processing}
                    className={classNames({
                        'bg-blue-500': !processing,
                        'bg-blue-300': processing,
                        'hover:bg-blue-400': !processing,
                        'hover:bg-blue-300': processing,
                        'text-white': !processing,
                        'text-blue-500': processing,
                    })}
                >
                    Login
                </Button>
                <Link
                    href={zRoute('register')}
                    className="text-blue-500 hover:text-blue-400"
                >
                    {"Don't have an account? Register"}
                </Link>
            </form>
        </div>
    );
}
