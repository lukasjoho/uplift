export default function WorkspacePage({
  params,
}: {
  params: { workspace: string }
}) {
  return <div>My Workspace: {params.workspace}</div>
}
