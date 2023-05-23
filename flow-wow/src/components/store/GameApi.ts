const mockData ={
    id: 1,
    value: 'Вот это да, пришел промо код!',
    promo: 'XXYZ_XXZ_XXQW'
}

export function fetchData(answer = mockData){
    return new Promise((resolve) =>
        setTimeout(()=> resolve({data : answer}), 500)
    );
}