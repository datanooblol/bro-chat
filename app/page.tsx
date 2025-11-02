// app/page.tsx
import { ThemeToggle, Card } from "./src/components/atoms/ThemeToggle";

export default function Home() {
  return (
    <div className="min-h-screen bg-background-primary p-8">
      <div className="max-w-md mx-auto space-y-6">
        {/* Theme Toggle Button */}
        <div className="flex justify-end">
          <ThemeToggle />
        </div>

        {/* Test Cards */}
        <Card />

        <div className="bg-background-secondary text-text-primary border border-border-primary p-4 rounded">
          <h3 className="text-text-primary font-semibold">Direct Test</h3>
          <p className="text-text-secondary">
            This text should change with theme
          </p>
        </div>

        {/* Color Palette Test */}
        <div className="grid grid-cols-2 gap-4">
          <div className="bg-primary-500 text-white p-4 rounded">Primary</div>
          <div className="bg-semantic-success text-white p-4 rounded">
            Success
          </div>
        </div>
      </div>
    </div>
  );
}
