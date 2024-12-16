

export const convertNumberToVND = (value:number) => {
    return value.toLocaleString('vi', {style : 'currency', currency : 'VND'});
}