import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import AnimatedCursor from 'react-animated-cursor'


createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
    <AnimatedCursor
      color="122, 77, 230"
      innerSize={8}
      outerSize={35}
       outerScale={1}  
      outerAlpha={0.2}
      outerStyle={{
        border: "1px solid #9ca3af",
      }}
    />
  </StrictMode>,
)
