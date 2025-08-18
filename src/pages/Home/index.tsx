import { Play } from "phosphor-react";
import {  ButtonHome, ClockContainer, HomeContainer, SpanTwoPoints, SpanMinutes, FormContainer, DivContainer, MinutesInput, WorkInput } from "./styles";
import { useState, useEffect } from "react";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

interface Cycle{
    id: string
    task: string
    minutesAmount: number
    startDate: Date
    interruptedDate?: Date
    finishedDate?: Date
}

const formaValidationSchema = z.object({
    task: z.string().min(1, 'Informe a tarefa'),
    minutesAmount: z.number().min(5, 'O ciclo precisa ser de no mínimo 5 minutos.').max(60, 'O ciclo precisa ser de no máximo 60 minutos.'),
})

type NewCycleFormData = z.infer<typeof formaValidationSchema>

export function Home(){

    const [cycles,setCycles] = useState<Cycle[]>([])
    const [activeCycleId,setActiveCycleId] = useState<string | null>(null)
    const [ amountSeconds, setAmountSeconds] = useState(0)


    const { register, handleSubmit, watch, reset} = useForm<NewCycleFormData>({
        resolver: zodResolver(formaValidationSchema),
        defaultValues: {
            task: '',
            minutesAmount: 0,
        }
    })

    
    function handleCreateNewCycle(data: NewCycleFormData) {
        const id = String(new Date().getTime())

        const newCycle: Cycle = {
            id,
            task: data.task,
            minutesAmount: data.minutesAmount,
            startDate: new Date(),
        }
        setCycles(state => [...state, newCycle]);
        setActiveCycleId(id);
        setAmountSeconds(0);

        reset();
    }

    function handleInterruptCycle(){
        setCycles(
            (previousCycles) => previousCycles.map((cycle) => {
                if(cycle.id === activeCycleId){
                    return {...cycle, interruptedDate: new Date()}
                }
                return cycle
            })
        )
        setActiveCycleId(null)
    }

    const activeCycle = cycles.find((cycle) => cycle.id === activeCycleId)

    const totalSeconds = activeCycle ? activeCycle.minutesAmount * 60 : 0;

    useEffect(() => {
        let interval: number;

        if (activeCycle) {
            interval = setInterval(() => {
                const secondsDifference = Math.floor(
                    (new Date().getTime() - activeCycle.startDate.getTime()) / 1000,
                )

                if (secondsDifference >= totalSeconds) {
                    setCycles((state) =>
                        state.map((cycle) => {
                            if (cycle.id === activeCycleId) {
                                return { ...cycle, finishedDate: new Date() }
                            } else {
                                return cycle
                            }
                        }),
                    )

                    setAmountSeconds(totalSeconds)
                    setActiveCycleId(null)
                } else {
                    setAmountSeconds(secondsDifference)
                }
            }, 1000)
        }

        return () => {
            clearInterval(interval)
        }
    }, [activeCycle, totalSeconds, activeCycleId])

    const currentSeconds = activeCycle ? totalSeconds - amountSeconds : 0;

    const minutesAmount = Math.floor(currentSeconds / 60)
    const secondsAmount = currentSeconds % 60

    const minutes = String(minutesAmount).padStart(2, '0')
    const seconds = String(secondsAmount).padStart(2, '0')

    useEffect(() => {
        if(activeCycle){
            document.title = `${minutes}:${seconds}`
        }
    }, [minutes, seconds, activeCycle])


    const task = watch("task");
    const isSubmitDisabled = !task;



    return(

        <HomeContainer>
        <FormContainer action=" " onSubmit={handleSubmit(handleCreateNewCycle)}>
            <DivContainer>
                <label htmlFor="task">I work in </label>
                <WorkInput id="task" list="Suggestions" placeholder="de um nome para o seu projeto" {...register("task")}/>

                <datalist id="Suggestions">
                    <option value="">Projeto</option>
                    <option value="">Projeto</option>
                </datalist>

                <label htmlFor="minutesAmount">During</label>
                <MinutesInput id="minutesAmount" type="number" placeholder="00" step={5} min={5} max={60} 
                {...register("minutesAmount", {valueAsNumber: true})}/>

                <span>Minutos</span>
            </DivContainer>

            <ClockContainer>
                <SpanMinutes>{minutes[0]}</SpanMinutes>
                <SpanMinutes>{minutes[1]}</SpanMinutes>

                <SpanTwoPoints>:</SpanTwoPoints>

                <SpanMinutes>{seconds[0]}</SpanMinutes>
                <SpanMinutes>{seconds[1]}</SpanMinutes>
            </ClockContainer>

            { activeCycle ? (
                <ButtonHome type="button" onClick={handleInterruptCycle}>
                    Interromper
                </ButtonHome>
            ) : (
                <ButtonHome type="submit" disabled={isSubmitDisabled} >
                <Play size={24} />
                    Começar
                </ButtonHome>
            )}
        </FormContainer>
        </HomeContainer>
    )
}