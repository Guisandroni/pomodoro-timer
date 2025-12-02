import { Play, HandPalm } from "phosphor-react"
import {
  ButtonHome,
  ClockContainer,
  HomeContainer,
  FormContainer,
  ClockFace,
  ClockTime,
  SessionTabs,
  SessionButton,
} from "./styles"
import { useCallback, useContext, useEffect, useMemo, useState } from "react"
import { CyclesContext } from "../../contexts/CyclesContext"
import { playClickSound } from "../../utils/AudioContext"

const SESSION_PRESETS = {
  focus: {
    label: "Focus",
    task: "Focus Session",
    minutes: 25,
  },
  break: {
    label: "Short Break",
    task: "Short Break",
    minutes: 5,
  },
  longBreak: {
    label: "Long Break",
    task: "Long Break",
    minutes: 15,
  },
} as const

type SessionType = keyof typeof SESSION_PRESETS

export function Home() {
  const { activeCycleId, markCurrentCycleAsFinished, amountSecondsPassed, setSecondsPassed, createNewCycle, interruptCurrentCycle, cycles } =
    useContext(CyclesContext)

  const [selectedSession, setSelectedSession] = useState<SessionType>("focus")

  const activeCycle = cycles.find((cycle) => cycle.id === activeCycleId)
  const selectedSessionData = useMemo(() => SESSION_PRESETS[selectedSession], [selectedSession])
  const totalSeconds = activeCycle ? activeCycle.minutesAmount * 60 : selectedSessionData.minutes * 60

  useEffect(() => {
    let interval: number

    if (activeCycle) {
      interval = window.setInterval(() => {
        const secondsDifference = Math.floor((new Date().getTime() - activeCycle.startDate.getTime()) / 1000)

        if (secondsDifference >= totalSeconds) {
          markCurrentCycleAsFinished()
          setSecondsPassed(totalSeconds)
        } else {
          setSecondsPassed(secondsDifference)
        }
      }, 1000)
    }

    return () => {
      clearInterval(interval)
    }
  }, [activeCycle, totalSeconds, activeCycleId, markCurrentCycleAsFinished, setSecondsPassed])

  

  const handleSelectSession = useCallback(
    (session: SessionType) => {
      if (activeCycle) return
      setSelectedSession(session)
      playClickSound()
    },
    [activeCycle],
  )

  function handleStartSession() {
    if (activeCycle) return

    playClickSound()
    createNewCycle({
      task: selectedSessionData.task,
      minutesAmount: selectedSessionData.minutes,
    })
  }

  function handleInterruptCycle() {
    playClickSound()
    interruptCurrentCycle()
  }

  const currentSeconds = activeCycle ? totalSeconds - amountSecondsPassed : totalSeconds

  const minutesAmount = Math.floor(currentSeconds / 60)
  const secondsAmount = currentSeconds % 60

  const minutes = String(minutesAmount).padStart(2, "0")
  const seconds = String(secondsAmount).padStart(2, "0")

  useEffect(() => {
    if (activeCycle) {
      document.title = `${minutes}:${seconds} - ${activeCycle.task}`
    } else {
      document.title = `Pomodoro Timer - ${selectedSessionData.label}`
    }
  }, [minutes, seconds, activeCycle, selectedSessionData.label])

  const progress = activeCycle ? amountSecondsPassed / totalSeconds : 0
  const progressPercentage = progress * 100

  return (
    <HomeContainer>
      <FormContainer>
        <SessionTabs>
          {(Object.keys(SESSION_PRESETS) as SessionType[]).map((sessionKey) => {
            const session = SESSION_PRESETS[sessionKey]
            return (
              <SessionButton
                key={sessionKey}
                type="button"
                $active={selectedSession === sessionKey}
                disabled={!!activeCycle}
                onClick={() => handleSelectSession(sessionKey)}
              >
                {session.label}
                <span>{session.minutes} min</span>
              </SessionButton>
            )
          })}
        </SessionTabs>

        <ClockContainer>
          <ClockFace $progress={progressPercentage}>
            <ClockTime>
              <span>{minutes[0]}</span>
              <span>{minutes[1]}</span>
              <span className="separator">:</span>
              <span>{seconds[0]}</span>
              <span>{seconds[1]}</span>
            </ClockTime>
          </ClockFace>
        </ClockContainer>

        {activeCycle ? (
          <ButtonHome type="button" onClick={handleInterruptCycle} $variant="stop">
            <HandPalm size={24} />
            Stop
          </ButtonHome>
        ) : (
          <ButtonHome type="button" onClick={handleStartSession} $variant="start">
            <Play size={24} />
            Start
          </ButtonHome>
        )}
      </FormContainer>
    </HomeContainer>
  )
}