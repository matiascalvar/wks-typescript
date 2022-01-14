function add(a: number | string, b: number | string): number | string | undefined {
    if (typeof a === "number" && typeof b === "number") return a + b
    if (typeof a === "string" && typeof b === "string") return a + b
    else return undefined
} //que pasa si yo quisiera concatenar strings con esta funcion?