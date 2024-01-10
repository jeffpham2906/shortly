function AppLayout({ children }) {
  return (
    <div className="max-w-[1440px] mx-auto px-32 tablet:px-10 mobile:px-4">
      {children}
    </div>
  );
}

export default AppLayout;
