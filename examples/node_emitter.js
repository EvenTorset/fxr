import {
  BasicNode,
  FXR,
  NodeAttributes,
  NodeEmitterNode,
  PeriodicEmitter,
  PointLight,
  SelectRandomNode,
  SphereEmitterShape,
} from '@cccode/fxr'

const fxr = new FXR(402030)

fxr.root.nodes = [
  /*
    The NodeEmitterNode can emit whole nodes instead of just particles. This
    feature is very powerful, because it basically allows nodes to act as
    particles, meaning you can make nodes that emit their own particles or even
    other nodes, and you can use those nodes similar to how you'd use, for
    example, billboard particles normally.

    These emitted nodes are still nodes, of course. They are not affected by
    actions that apply to particles, you need to use the ones that affect the
    nodes themselves.

    In this example, there are three child nodes, each with their own colored
    point light.
  */
  new NodeEmitterNode([
    /*
      This action makes the node emitter pick a random child node to emit every
      emission. The action has weights for each child node that control how
      likely each node is to be picked.

      In this case, the first child node has a 10 in 15 chance to be picked,
      the second one has a 4 in 15 chance, and the third has a 1 in 15 chance.
    */
    new SelectRandomNode([10, 4, 1]),
    /*
      The emitter will emit 2 instances of the same node every 0.5 seconds.
    */
    new PeriodicEmitter({ interval: 0.5, perEmission: 2 }),
    new SphereEmitterShape,
  ], [
    new BasicNode([ // Child node 0 - red light
      new NodeAttributes({ duration: 1 }),
      new PointLight({
        diffuseColor: [1, 0.3, 0.2, 1],
        volumeDensity: 50,
        asymmetryParam: 0.95
      })
    ]),
    new BasicNode([ // Child node 1 - green light
      new NodeAttributes({ duration: 1 }),
      new PointLight({
        diffuseColor: [0.1, 1, 0.2, 1],
        volumeDensity: 50,
        asymmetryParam: 0.95
      })
    ]),
    new BasicNode([ // Child node 2 - blue light
      new NodeAttributes({ duration: 1 }),
      new PointLight({
        diffuseColor: [0.1, 0.7, 1.3, 1],
        volumeDensity: 50,
        asymmetryParam: 0.95
      })
    ])
  ])
]
