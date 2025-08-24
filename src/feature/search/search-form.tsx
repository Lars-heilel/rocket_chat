import {Search} from "lucide-react";
import {Input} from "@/shared/components/ui/input";

export function SearchForm() {
  return (
    <form onSubmit={(e) => e.preventDefault()}>
      <div className="relative p-2">
        <Search className="pointer-events-none absolute top-1/2 left-4 size-4 -translate-y-1/2 text-muted-foreground" />
        <Input id="search" placeholder="Поиск..." className="pl-8" />
      </div>
    </form>
  );
}
