import * as React from "react"
import { Button, Head, Html, Tailwind } from "@react-email/components"

import { Icons } from "@/components/icons"
import Text from "@/components/uplift/text"
import Title from "@/components/uplift/title"

interface EmailTemplateProps {
  id: string
}

export const EmailTemplateInvite: React.FC<Readonly<EmailTemplateProps>> = ({
  id,
}) => (
  <Tailwind>
    <Html>
      <Head></Head>
      <div className="bg-[#030711] text-[#e1e7ef] flex flex-col items-start gap-4 px-4 md:px-32 py-8 md:py-24">
        <Icons.logo className="w-48 h-48" />
        <h1 className="font-bold text-4xl">Join your team on Uplift</h1>
        <p className="text-[#e1e7ef] text-lg">
          You have been invited to join your team on Uplift. <br />
          To accept the invite, please follow the button below.
        </p>
        <button className="px-8 py-4 bg-[#e1e7ef] text-lg outline-none text-[#030711] shadow-none border-none font-semibold rounded-md">
          Accept Invitation
        </button>
      </div>
    </Html>
  </Tailwind>
)
