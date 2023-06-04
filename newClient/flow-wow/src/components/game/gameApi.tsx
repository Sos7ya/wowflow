const mockAction ={
    id: 1,
    value: 'КОД КУПОНА',
    quantity: 1
}
export function fetchElement(){
    return new Promise<{data: object}>((resolve)=>
        setTimeout(()=>resolve({data: mockAction}), 500))
}