
export function fetchValue(value:string){
    return new Promise<{data: string}>((resolve)=>
        setTimeout(()=>resolve({data: value}), 500))
}