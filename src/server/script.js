import { gs } from '@servicenow/glide'

export function showStateUpdate(current, previous) { 
    const currentState = current.getValue('state2')
    const previousState = previous.getValue('state2')

    gs.addInfoMessage(`state updated from "${previousState2}" to "${currentState2}"`)
}
