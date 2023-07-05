"use client"

import React, { useContext } from "react"
import { Settings, Sparkles } from "lucide-react"

import {
  Modal,
  ModalContents,
  ModalOpenButton,
} from "@/components/uplift/GlobalModal/GlobalModal"

import { HypothesisContext } from "./CreateExperimentForm"

const RefineHypothesis = ({ value }: any) => {
  const [generatedAnswer, setGeneratedAnswer] = React.useState<string>("")
  const [loading, setLoading] = React.useState<boolean>(false)

  const { answer, setAnswer } = useContext(HypothesisContext)

  let prompt = `Refine the hypothesis provided below. The hypothesis should adhere to common best practices around product experiemntation hypotheses. The hypothesis should be specific, measurable and based on observations. Make sure your answers are at max 60 words long. If the provided text does not seem to be close to a hypothesis please answer respectively. If the hypothesis does not seem complete, please offer a completion. Here is the hypothesis: ${value}. Also provide an evaluation of the given hypothesis along the following dimensions: change (the product change is clear, precise and measurable), impact (the impact on the business or the customer is clearly stated and measurable), who (the target group is clearly defined). Output the evaluation as a JSON object. The JSON object should be returned in the following shape: {"change": value, "impact": value, "who": value} with the "value" string being replaced with your evaluation. The respective value for the keys should be an integer between 0 and 100. Your final answer should have the following order: JSON object, refined hypothesis. Use <br> as a split between JSON object and hypothesis. The split element should come directly after the closing tag of the JSON object. There should be no whitespace inbetween. Be critical about the hypothesis given. A value of 100 should only be given if that specific dimension is truly perfect. Take into consideration best practices around hypothesis defintion in the field of product experimentation. To give you a benchmark: E.g. a hypothesis like "A redesign improves the user experience" is very bad and should receive values of around 10, 10, 10. Please rate the hypothesis that you receive above and not the refined hypothesis that you answer with. You are doing all of this for a particular company using this very feature. The company is a car subscription platform with a landing page, a product listing page, a product detail page and a checkout. The company sells car subscriptions for cars of all sorts of brands and sizes. Please keep this in mind when attempting to improve the hypothesis. Again: Please be skeptical about the hypothesis given. E.g. The hypothesis "Users will like new filters" is very bad. It is not specific about the type of user. It is not specific about the change. Its does not mention impact at all. This should thereby be reflected in the values of the JSON. This particular example should receive values of around 10, 10, 10.
  Here are a few examples of bad hypotheses (should have values between 0 and 50):
  A button on the homepage improves the UX; Lets make the image bigger; By adding a button we will succeed as a company. 

  Here are a few examples of good hypotheses (should have values between 0 and 100):
  1. By showing US users lower sticker prices and including insurance and estimated tax values via a price breakdown on the PDP, users are more likely to be interested about our cars as they have a better value-for-money perception. This shows in a higher PLP-to-ProductAdded conversion rate; 
  2. By showing the brand filters along the price and availability filter, tcustomers are more likely to engage with the PLP as they are not primarily brand oriented. The brand filter is not in their way anymore. They are more likely to interact with the filters and thereby more likely to dive into various product offerings. This shows in an increased PLP-to-PDP conversion rate and a higher PLP engagement rate.
  3. By showing customers helper text below each configurable option and allowing them to click on them to learn more, they better understand the FINN subscription options around the car and find the FINN offering more attractive. This will show in a higher conversion rate PDP-to-ProductAdded. 

  A hypothesis should roughly follow the pattern: By doing X, we expect Y to happen because of Z. It doesn't need to be word by word. But surely it should cover X, Y and Z.

  Please dont restrict yourself to the specific examples mentioned, but really think broad and logically whether a hypothesis adheres to all the best practices along precision, measurability and specificity.

  `

  const handleSubmit = async (e: any) => {
    e.preventDefault()
    setLoading(true)
    const response = await fetch("/api/generate", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ prompt }),
    })
    if (!response.ok) {
      throw new Error("Something went wrong")
    }
    let answer = await response.json()
    setAnswer(answer.choices[0].text.trim())
    setLoading(false)
  }
  return (
    <>
      <div className="flex gap-1">
        <button
          className="group rounded-sm border transition duration-150 border-purple-500 hover:border-purple-300 text-xs font-semibold px-2 py-1 flex gap-1 items-center text-purple-500 hover:text-purple-300 hover:bg-purple-500/30"
          onClick={handleSubmit}
          disabled={loading}
        >
          <Sparkles className="w-4 h-4 text-purple-500 group-hover:text-purple-300" />
          {!loading && "Refine"}
          {loading && "Refining..."}
        </button>
        {/* <Modal>
          <ModalOpenButton>
            <button className="group rounded-sm transition duration-150 border-muted-foreground hover:bg-muted aspect-square p-1">
              <Settings className="w-4 h-4 transition duration-150 text-muted-foreground group-hover:text-foreground" />
            </button>
          </ModalOpenButton>
          <ModalContents title="Refine Settings" test={true}>
            <div>Set your refine settings</div>
          </ModalContents>
        </Modal> */}
      </div>
    </>
  )
}

export default RefineHypothesis
