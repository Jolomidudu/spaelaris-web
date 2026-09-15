"use client";

import { ArrowLeft } from "lucide-react";
import { useRouter } from "next/navigation";

type CategoryBackButtonProps = {
  className?: string;
};

export default function CategoryBackButton({ className = "back-button" }: CategoryBackButtonProps) {
  const router = useRouter();

  const goBack = () => {
    if (window.history.length > 1) {
      router.back();
      return;
    }

    router.push("/services");
  };

  return (
    <button type="button" onClick={goBack} className={className} aria-label="Go back">
      <ArrowLeft size={24} strokeWidth={2} aria-hidden="true" />
    </button>
  );
}