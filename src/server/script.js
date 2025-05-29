import { gs } from '@servicenow/glide'

export function showStateUpdate(current, previous) { 
    const currentState = current.getValue('state3')
    const previousState = previous.getValue('state3')

    gs.addInfoMessage(`state updated from "${previousState3}" to "${currentState3}"`)
}
