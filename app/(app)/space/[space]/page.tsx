import { redirect } from "next/navigation"

export default async function SpacePage({
  params,
}: {
  params: { space: string }
}) {
  redirect(`/space/${params.space}/dashboard`)
}
