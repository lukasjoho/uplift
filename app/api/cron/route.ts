import { NextRequest, NextResponse } from "next/server"

import { prisma } from "@/lib/prisma"

const convertToSlug = (str: string) => {
  if (!str) {
    return ""
  }

  return str
    .toLowerCase() // Convert to lowercase
    .replace(/[^a-zA-Z0-9\s]/g, "") // Remove non-alphanumeric characters
    .replace(/\s+/g, "-") // Replace spaces with dashes ("-")
}

const generateDatePlusDays = (days: number) => {
  const currentDate = new Date()
  currentDate.setDate(currentDate.getDate() + days)
  const isoString = currentDate.toISOString()
  return isoString
}

const SPACE_ID = "cljddlzin0000w3tz7bfcl41d"

const data = [
  {
    name: "Personalization Algorithm",
    hypothesis:
      "Compare the effectiveness of two different recommendation algorithms in showing personalized product recommendations to users and driving additional sales.",
    startDate: generateDatePlusDays(-5),
    endDate: generateDatePlusDays(11),
    identifier: convertToSlug("Personalization Algorithm"),
    spaceId: SPACE_ID,
  },
  {
    name: "Checkout Process Simplification",
    hypothesis:
      "Evaluate a simplified checkout process against the current process to identify if reducing steps and form fields leads to a decrease in cart abandonment rates.",
    startDate: generateDatePlusDays(-25),
    endDate: generateDatePlusDays(-11),
    identifier: convertToSlug("Checkout Process Simplification"),
    spaceId: SPACE_ID,
  },
  {
    name: "Social Proof Pop-ups",
    hypothesis:
      "Test the use of real-time notifications showing recent purchases to determine if they enhance the perceived popularity of products and influence purchasing decisions.",
    startDate: generateDatePlusDays(-10),
    endDate: generateDatePlusDays(20),
    identifier: convertToSlug("Social Proof Pop-ups"),
    spaceId: SPACE_ID,
  },
  {
    name: "User Reviews Display",
    hypothesis:
      "Test the impact of showing user reviews prominently on product pages versus placing them in a separate section to see which approach builds more trust and credibility.",
    startDate: generateDatePlusDays(3),
    endDate: generateDatePlusDays(12),
    identifier: convertToSlug("User Reviews Display"),
    spaceId: SPACE_ID,
  },
  {
    name: "Discount Placement",
    hypothesis:
      "Compare the performance of displaying discounts on product listings versus displaying them on individual product pages to understand where discounts are more effective.",
    startDate: generateDatePlusDays(-12),
    endDate: generateDatePlusDays(-5),
    identifier: convertToSlug("Discount Placement"),
    spaceId: SPACE_ID,
  },
  {
    name: "Homepage Hero Banner",
    hypothesis:
      "Test two different hero banners on the homepage to determine which design and messaging lead to higher click-through rates and engagement.",
    startDate: generateDatePlusDays(-20),
    endDate: generateDatePlusDays(4),
    identifier: convertToSlug("Homepage Hero Banner"),
    spaceId: SPACE_ID,
  },
  {
    name: "Free Shipping Threshold",
    hypothesis:
      "Test the impact of different free shipping thresholds on average order value and overall sales to find the optimal threshold for maximum revenue.",
    startDate: generateDatePlusDays(5),
    endDate: generateDatePlusDays(19),
    identifier: convertToSlug("Free Shipping Threshold"),
    spaceId: SPACE_ID,
  },
]

export async function GET(request: NextRequest) {
  try {
    await prisma.experiment.deleteMany({
      where: {
        spaceId: SPACE_ID,
      },
    })
    const res = await prisma.experiment.createMany({
      data: [...data],
    })
    return NextResponse.json(
      { ok: true, res },
      {
        status: 200,
      }
    )
  } catch (error: any) {
    return NextResponse.json(
      {
        message: error.message || "Internal Server Error",
      },
      {
        status: error.statusCode || 500,
      }
    )
  }
}
