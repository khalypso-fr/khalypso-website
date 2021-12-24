import { useTheme } from '@mui/material'
import { FC, useMemo } from 'react'

export const CircleIcon: FC<{ radiusInPixels?: number; animate?: boolean }> = ({
  animate = true,
  radiusInPixels = 50,
}) => {
  const { palette } = useTheme()
  const size = useMemo(() => (radiusInPixels + 10) * 2, [radiusInPixels])
  const placement = useMemo(() => size / 2, [size])
  const strokeWidth = useMemo(() => radiusInPixels / 10, [radiusInPixels])
  return (
    <svg width={size} height={size}>
      <circle
        cx={placement}
        cy={placement}
        r={radiusInPixels}
        stroke={palette.secondary.main}
        strokeWidth={strokeWidth}
        fill="transparent"
      >
        {animate ? (
          <animate
            attributeName="stroke-width"
            values={`${strokeWidth};${strokeWidth + 5};${strokeWidth}`}
            dur="5s"
            repeatCount="indefinite"
          />
        ) : null}
      </circle>
    </svg>
  )
}
