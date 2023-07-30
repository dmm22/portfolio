import { useEffect, useState } from "react"

interface SvgProps {
  svgName: string
  classes?: string
}

export default function Svg({ svgName, classes = "" }: SvgProps) {
  const [src, setSrc] = useState("")

  useEffect(() => {
    ;(async () => {
      const svgModule = await import(`../assets/${svgName}.svg`)
      setSrc(svgModule.default)
    })()
  }, [svgName])

  return <img src={src} alt={svgName} className={classes} />
}
