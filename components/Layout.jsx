import { Menu, ErrorBoundary, MenuButton } from '.';

const Layout = ({ title, children }) => {
  return (
    <div className="font-body text-sm min-h-screen bg-gray-100 flex flex-col">
      <Menu />
      <div className="bg-white w-full shadow">
        <div className="max p-4 md:px-8 flex items-center md:items-start justify-between">
          <h3 className="text-lg font-semibold">{title}</h3>
          <MenuButton />
        </div>
      </div>
      <main className="w-full max px-4 py-8 md:px-8 gap-4">
        <ErrorBoundary>{children}</ErrorBoundary>
      </main>
    </div>
  );
};

export default Layout;
