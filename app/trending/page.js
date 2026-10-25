import { redirect } from "next/navigation"

export default function TrendingPage() {
  redirect("/catalog?sort=TRENDING_DESC")
}
