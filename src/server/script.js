import { gs } from '@servicenow/glide'

export function showStateUpdate(current, previous) { 
    const currentState = current.getValue('state4')
    const previousState = previous.getValue('state4')

    gs.addInfoMessage(`state updated from "${previousState4}" to "${currentState4}"`)
}
