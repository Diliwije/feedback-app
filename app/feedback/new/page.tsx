import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";

export default async function NewFeedbackPage() {
        return (
        <div className="max-w-2xl mx-auto space-y-6">
          <div className="flex items-center gap-4">
            <Button variant="ghost" size="icon" asChild >
              <Link href="/feedback/new">
              <ArrowLeft className="h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
        );
}