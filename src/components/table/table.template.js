const CODES = {
    A: 65,
    Z: 90
}

function toCell() {
    return `
    <div class="cell" contenteditable></div>
    `
}

function toColumn(col) {
    return `
    <div class="column">
        ${col}
        <div class="col-resize"></div>
    </div>
    `
}

function createRow(num, content) {
    const resize = num ? '<div class="row-resize"></div>' : ''
    return `
        <div class="row">
            <div class="row-info">
                ${num ? num : ''}
                ${resize}
            </div>
            <div class="row-data">${content}</div>
        </div>
    `
}

function toChar(_, index) {
    return String.fromCharCode(CODES.A + index)
}

export function createTable(rowsCount = 15) {
    const colsCount = CODES.Z - CODES.A + 1

    const rows = []

    const cols = new Array(colsCount)
        .fill('')
        .map(toChar)
        .map(toColumn)
        .join('')

    rows.push(createRow('', cols))

    const row = new Array(colsCount)
        .fill('')
        .map(toCell)
        .join('')

    for (let i = 0; i < rowsCount; i++) {
        const num = i + 1
        rows.push(createRow(num, row))
    }

    return rows.join('')
}
