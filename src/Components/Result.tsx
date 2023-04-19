type Props = {
    result: number | undefined,
    seeResult: string
}

export default function Result({ result, seeResult }: Props) {
    return (
        <>
            <div className={seeResult}>
                Seu gasto de caloria basal diário é de: {result}
            </div>
        </>
    )
}
