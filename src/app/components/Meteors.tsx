import React, { useEffect, useState } from "react"
import './Meteors.css';

interface MeteorsProps {
  number?: number
  minDelay?: number
  maxDelay?: number
  minDuration?: number
  maxDuration?: number
  angle?: number
  className?: string
}

export const Meteors = ({
  number = 20,
  minDelay = 0.2,
  maxDelay = 1.2,
  minDuration = 2,
  maxDuration = 10,
  angle = 215,
  className = "",
}: MeteorsProps) => {
  const [meteorStyles, setMeteorStyles] = useState<Array<React.CSSProperties>>([])

  useEffect(() => {
    const styles = [...new Array(number)].map(() => ({
      "--angle": angle + "deg",
      top: Math.floor(Math.random() * 100) - 20 + "%",
      left: Math.floor(Math.random() * 100) + 20 + "%",
      animationDelay: Math.random() * (maxDelay - minDelay) + minDelay + "s",
      "--duration": Math.floor(Math.random() * (maxDuration - minDuration) + minDuration) + "s",
    }))
    setMeteorStyles(styles)
  }, [number, minDelay, maxDelay, minDuration, maxDuration, angle])

  return (
    <>
      {[...meteorStyles].map((style, idx) => (
        <span
          key={idx}
          style={style}
          className={`animate-meteor pointer-events-none absolute w-[2px] h-[2px] rounded-full bg-[rgba(201,168,76,0.8)] shadow-[0_0_0_1px_rgba(201,168,76,0.1)] ${className}`}
        >
          {/* Meteor Tail */}
          <div className="pointer-events-none absolute top-1/2 -z-10 h-[1px] w-[50px] -translate-y-1/2 bg-gradient-to-r from-[rgba(201,168,76,0.8)] to-transparent" />
        </span>
      ))}
    </>
  )
}
