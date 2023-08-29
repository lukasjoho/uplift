import { FC } from "react"

interface AppLayoutProps {
  children: React.ReactNode | React.ReactNode[]
}

const AppLayout: FC<AppLayoutProps> = ({ children }) => {
  return <div className="flex flex-col grow">{children}</div>
}

export default AppLayout
