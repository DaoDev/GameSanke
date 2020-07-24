let inputDirection = { x: 0, y: 0 }
let lastInputDircetion = { x: 0, y: 0 }

window.addEventListener('keydown', e => {
    switch (e.key) {
        case 'ArrowUp':
            if (lastInputDircetion.x != 0) break
            inputDirection = { x: -1, y: 0 }
            break
        case 'ArrowDown':
            if (lastInputDircetion.x != 0) break
            inputDirection = { x: 1, y: 0 }
            break
        case 'ArrowLeft':
            if (lastInputDircetion.y != 0) break
            inputDirection = { x: 0, y: -1 }
            break
        case 'ArrowRight':
            if (lastInputDircetion.y != 0) break
            inputDirection = { x: 0, y: 1 }
            break
    }
})

export function getInputDirection() {
    lastInputDircetion = inputDirection
    return inputDirection
}