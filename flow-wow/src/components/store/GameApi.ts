const mockData ={
    id: 1,
    value: 'Вот это да, пришел промо код!',
    promo: 'XXYZ_XXZ_XXQW'
}

export function fetchData(gameObj={id:1, value:'Wow! Its promo here!', promo:'XXX-XXW-XYZ'}){
    return new Promise<{data:{ id: number, value: string, promo: string,}}>((resolve) =>
        setTimeout(()=> resolve({data:gameObj}), 500)
    );
}