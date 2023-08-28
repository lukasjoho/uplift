import { Prisma } from "@prisma/client"

export type Feedback = Prisma.FeedbackGetPayload<{
  include: {
    _count: true
    vote: true
  }
}>
