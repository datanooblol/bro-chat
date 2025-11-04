// interface ChatLayoutProps {
//   children: React.ReactNode;
//   title?: string;
// }

// export function ChatLayout({ children, title = "Chat" }: ChatLayoutProps) {
//   return (
//     <div className="h-screen flex flex-col bg-white">
//       <header className="bg-white border-b border-gray-200 px-6 py-4">
//         <h1 className="text-xl font-semibold text-gray-900">{title}</h1>
//       </header>
//       <main className="flex-1 overflow-hidden flex justify-center">
//         <div className="w-full max-w-4xl">{children}</div>
//       </main>
//     </div>
//   );
// }
interface ChatLayoutProps {
  children: React.ReactNode;
  title?: string;
}

export function ChatLayout({ children, title = "Chat" }: ChatLayoutProps) {
  return (
    <div className="h-screen flex flex-col">
      <header className="px-6 py-4">
        <h1 className="text-xl font-semibold text-gray-900">{title}</h1>
      </header>
      <main className="flex-1 overflow-hidden">{children}</main>
    </div>
  );
}
