import { Button } from '@/shared/form/Button';
import Input from '@/shared/form/Input';
import { Link, useForm } from '@inertiajs/react';
import classNames from 'classnames';
import zRoute from '@ziggy';

export default function Register() {
    const { data, setData, post, errors, processing } = useForm({
        firstname: '',
        lastname: '',
        username: '',
        email: '',
        password: '',
        password_confirmation: '',
    });
    const handelRegister = (e) => {
        e.preventDefault();
        post('/auth/register', data);
    };

    return (
        <div className="mx-auto w-96 p-4">
            <form className="flex flex-wrap gap-2" onSubmit={handelRegister}>
                <Input
                    name="firstname"
                    placeholder="First name"
                    value={data.firstname}
                    error={errors.firstname}
                    onChange={(e) => setData('firstname', e.target.value)}
                />
                <Input
                    name="lastname"
                    placeholder="Last name"
                    value={data.lastname}
                    error={errors.lastname}
                    onChange={(e) => setData('lastname', e.target.value)}
                />
                <Input
                    name="username"
                    placeholder="Username"
                    value={data.username}
                    error={errors.username}
                    onChange={(e) => setData('username', e.target.value)}
                />
                <Input
                    name="email"
                    type="email"
                    placeholder="email"
                    value={data.email}
                    error={errors.email}
                    onChange={(e) => setData('email', e.target.value)}
                />
                <Input
                    name="password"
                    type="password"
                    placeholder="Password"
                    value={data.password}
                    error={errors.password}
                    onChange={(e) => setData('password', e.target.value)}
                />
                <Input
                    name="password_confirmation"
                    type="password"
                    placeholder="Confirm password"
                    value={data.password_confirmation}
                    onChange={(e) =>
                        setData('password_confirmation', e.target.value)
                    }
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
                    Register
                </Button>
                <Link
                    href={zRoute('login')}
                    className="text-blue-500 hover:text-blue-400"
                >
                    Already Signed up? Login
                </Link>
            </form>
        </div>
    );
}
