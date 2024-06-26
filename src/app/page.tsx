import { CollapsibleNotifications } from "@/components/collapsible-notifications";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-4">
      <div className="relative">
        <CollapsibleNotifications />
      </div>
    </main>
  );
}
