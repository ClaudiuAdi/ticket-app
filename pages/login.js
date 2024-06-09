import { Logo } from '@components';
import { LoginForm } from '@components/Forms';

const LoginPage = () => (
  <main className="login-cover min-h-screen px-4 py-8 flex flex-col items-center justify-center">
    <Logo />
    <div className="flex flex-col w-full px-4 lg:px-12 py-8 my-8 bg-white rounded-lg max-w-xl">
      <h2 className="font-bold text-2xl mb-4">Autentificare</h2>
      <LoginForm />
    </div>
  </main>
);

export default LoginPage;
