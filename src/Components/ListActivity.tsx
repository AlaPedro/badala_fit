import { Listbox } from "@headlessui/react"
import { useState } from "react"

type activityType = {
    activityLevel: string,
    value: number,
    id: number
}

const activity: activityType[] = [
    {
        activityLevel: 'Sedentário',
        value: 1.2,
        id: 1
    },
    {
        activityLevel: 'Levemente ativo',
        value: 1.375,
        id: 2

    },
    {
        activityLevel: 'Moderamente ativo',
        value: 1.55,
        id: 3
    },
    {
        activityLevel: 'Altamente ativo',
        value: 1.725,
        id: 4
    },
    {
        activityLevel: 'Extremamente ativo',
        value: 1.9,
        id: 5
    },

]

const [selectedLevel, setSelectedLevel] = useState(activity[0])

export default function ListActivity() {

    return (
        <>
            <Listbox value={selectedLevel} onChange={setSelectedLevel}>
                <Listbox.Button>{selectedLevel.activityLevel}</Listbox.Button>
                <Listbox.Options>
                    {activity.map((level) => (
                        <Listbox.Option key={level.id} value={level.value}>
                            {level.activityLevel}
                        </Listbox.Option>
                    ))}
                </Listbox.Options>
            </Listbox>
        </>
    )
}
