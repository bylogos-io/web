import { docs } from '@/velite';
import { ScrollArea } from '@/components/ui/scroll-area';
import { DocsSidebar } from '@/components/docs-sidebar';

export default function DocsLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex h-screen bg-background">
      {/* Sidebar */}
      <DocsSidebar docs={docs} />

      {/* Main Content */}
      <div className="flex-1 flex flex-col overflow-hidden">
        <ScrollArea className="flex-1 p-6 md:p-12">
          <div className="max-w-3xl mx-auto">
            {children}
          </div>
        </ScrollArea>
      </div>
    </div>
  );
}
