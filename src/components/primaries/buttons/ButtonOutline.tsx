import { Button } from "@chakra-ui/react"


interface ButtonProps {
    label: string,
    label2?: string,
    vald: number

}

interface ButtonProps2 extends ButtonProps  {
    label: string,
    label2?: string,
    onclick: (valor: string) => void
}



export const ButtonOutline = ({label, label2 = "vaca", onclick, ...props}: ButtonProps2) => {
  return <Button
  onClick={() => onclick("aaa")} 
  >{label + label2 + props.vald}</Button>
}


