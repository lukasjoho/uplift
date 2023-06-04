import { prisma } from "@/lib/prisma"

export async function createExperiment(experiment: any) {
  try {
    const experimentFromDB = await prisma.experiment.create({
      data: experiment,
    })
    return { experiment: experimentFromDB }
  } catch (error) {
    return { error }
  }
}
