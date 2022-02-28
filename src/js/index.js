import 'aframe'
import 'aframe-teleport-controls'
import 'aframe-extras'
import 'aframe-physics-system'
import 'super-hands'

// It would be really good to make this work ;)
// import 'aframe-input-mapping-component'

// let mappings = {
//     default: {
//         common: {
//             trackpaddown: 'teleportstart',
//             trackpadup: 'teleportend',
//         },
//         'oculus-touch-controls': {
//             thumbstickdown: 'teleportstart',
//             thumbstickup: 'teleportend',
//         },
//         keyboard: {
//             t_down: 'teleportstart',
//             t_up: 'teleportend',
//         },
//     }
// }

// console.log('before')
// AFRAME.registerInputMappings(mappings)
// console.log('after')

// as above fails, we have to handle button events separately ; (
// good sample at https://github.com/TakashiYoshinaga/Oculus-Quest-Interaction-Sample/blob/master/index.html

AFRAME.registerComponent('input-listen', {
    init: function () {
        this.el.addEventListener('thumbstickdown', function (e) {
            //Start pointing position to teleport
            this.emit('teleportstart')
        })

        this.el.addEventListener('thumbstickup', function (e) {
            //Jump to pointed position
            this.emit('teleportend')
        })

        this.el.addEventListener('trackpaddown', function (e) {
            //Start pointing position to teleport
            this.emit('teleportstart')
        })

        this.el.addEventListener('trackpadup', function (e) {
            //Jump to pointed position
            this.emit('teleportend')
        })
    },
})

AFRAME.registerComponent('grab-see-through', {
    init: function () {
        this.el.addEventListener('grab-start', function (e) {
            this.components.material.material.opacity = 0.5
        })

        this.el.addEventListener('grab-end', function (e) {
            this.components.material.material.opacity = 1
        })
    },
})
