function Layout({ children }) {
  return (
    <div className="flex h-full overflow-hidden md:flex-col">{children}</div>
  );
}

export default Layout;
