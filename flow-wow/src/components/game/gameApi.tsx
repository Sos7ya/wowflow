
export function fetchValue(value=1){
    return new Promise<{data: number}>((resolve)=>
        setTimeout(()=>resolve({data: value}), 500))
}