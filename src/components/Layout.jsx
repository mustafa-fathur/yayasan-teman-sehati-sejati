export default function Layout({ children }) {
    return (
      <div className="max-w-[85rem] mx-auto px-4 sm:px-6 lg:px-8">
        {children}
      </div>
    );
}