import { Provider } from "@/components/ui/provider"
import { ThemeProvider } from "@/context/ThemeContext"

export default function Providers(props: { children: React.ReactNode }) {
  const { children } = props
  return (
    <Provider>
      <ThemeProvider>
        {children}
      </ThemeProvider>
    </Provider>
  )
}