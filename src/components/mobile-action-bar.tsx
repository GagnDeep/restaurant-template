"use client";

import Link from "next/link";
import { Phone, ShoppingBag } from "lucide-react";
import { Button } from "@/components/ui/button";
import { siteConfig } from "@/config/site";

export function MobileActionBar() {
  const phone = siteConfig.contact.info.phone;
  const orderLink = siteConfig.home.cta.primaryCta.href;
  const labels = siteConfig.uiLabels.mobileAction;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 flex border-t bg-background/80 p-4 backdrop-blur-lg md:hidden gap-4 shadow-[0_-4px_6px_-1px_rgba(0,0,0,0.1)]">
      <Button asChild variant="outline" className="flex-1 rounded-full">
        <a href={`tel:${phone.replace(/\s/g, "")}`}>
          <Phone className="mr-2 h-4 w-4" />
          {labels.call}
        </a>
      </Button>
      <Button asChild className="flex-1 rounded-full">
        <Link href={orderLink}>
          <ShoppingBag className="mr-2 h-4 w-4" />
          {labels.order}
        </Link>
      </Button>
    </div>
  );
}
