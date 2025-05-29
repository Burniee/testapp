import { gs } from '@servicenow/glide'

export function showStateUpdate(current, previous) { 
    const currentState = current.getValue('state1')
    const previousState = previous.getValue('state1')

    gs.addInfoMessage(`state updated from "${previousState2}" to "${currentState2}"`)
