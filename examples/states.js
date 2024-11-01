import {
  BasicProfile,
  BasicNode,
  BillboardEx,
  FXR,
  State,
} from '@cccode/fxr'

/*

This effect is a colored square that starts out green and becomes red after
1 second, and then it disappears for half a second before going back to green.

*/

const fxr = new FXR(402030)

/*

StateTime is the time (in seconds) since the state changed. Here, the states
stay active for 1 second. Once the condition is no longer met, it checks the
state at the index after the "else".

*/
fxr.states = [
  State.from('StateTime < 1 else 1'), // State 0
  State.from('StateTime < 1 else 2'), // State 1
  State.from('StateTime < 0.5 else 0'), // State 2
]

fxr.root.nodes = [
  // This node has two very simple profiles that just create colored squares.
  new BasicNode([
    new BasicProfile([ new BillboardEx({ color1: [1, 0, 0, 1] }) ]), // Profile 0
    new BasicProfile([ new BillboardEx({ color1: [0, 1, 0, 1] }) ]), // Profile 1
  ]).mapStates(
    1, // State 0 is mapped to Profile 1
    0, // State 1 is mapped to Profile 0
    -1 // State 2 is mapped to no profiles
  )
]
