interface AppLayoutProps {
  children: React.ReactNode
  req: any
}

const AppLayout = ({ children, req }: AppLayoutProps) => {
  return <div className="flex flex-col grow">{children}</div>
}

export default AppLayout
