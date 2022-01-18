import { FC, useMemo } from 'react'

const PADDING_BOX_CIRCLE = 10

const useCircleDimensions = (radiusInPixels: number) => {
  const size = useMemo(
    () => (radiusInPixels + PADDING_BOX_CIRCLE) * 2,
    [radiusInPixels]
  )
  const placement = useMemo(() => size / 2, [size])
  const strokeWidth = useMemo(
    () => radiusInPixels / PADDING_BOX_CIRCLE,
    [radiusInPixels]
  )
  return { size, placement, strokeWidth }
}

const SHOULD_ANIMATE_BY_DEFAULT = true
const CIRCLE_SIZE_DEFAULT = 50

export const GoldCircle: FC<{ radiusInPixels?: number; animate?: boolean }> = ({
  animate = SHOULD_ANIMATE_BY_DEFAULT,
  radiusInPixels = CIRCLE_SIZE_DEFAULT,
}) => {
  const { size, placement, strokeWidth } = useCircleDimensions(radiusInPixels)
  return (
    <svg width={size} height={size}>
      <circle
        cx={placement}
        cy={placement}
        r={radiusInPixels}
        className="stroke-secondary-main"
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
