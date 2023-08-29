type TimelineSettings = {
  GAP_WIDTH: number
  DAY_WIDTH: number
  UNIT_WIDTH: number
}

const gapWidth = 9
const dayWidth = 24

export const TIMELINE_SETTINGS: TimelineSettings = {
  GAP_WIDTH: gapWidth,
  DAY_WIDTH: dayWidth,
  UNIT_WIDTH: gapWidth + dayWidth,
}
