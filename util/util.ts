export function createSubscriber(tag: string) {
    return {
        next(item) {
            console.log(`${tag}.next ${item}`)
        },
        error(error) {
            console.log(`${tag}.error ${error}`)
        },
        complete() {
            console.log(`${tag}.complete`)
        }
    }
}