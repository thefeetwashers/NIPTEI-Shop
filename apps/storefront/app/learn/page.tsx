import { redirect } from "next/navigation";

// The artifact's sitemap lists /learn; the shop's Learn link points here.
export default function LearnPage() {
  redirect("/scalp-health");
}
