
const numScreens = 10;
export const pagination = (curScreen: number) => {
    curScreen = curScreen + 1;
    let selectedScreens: number[] = [1, numScreens];
    if (curScreen !== 1 && curScreen !== numScreens){
        selectedScreens = [...selectedScreens, curScreen]
    }
    for(let i = 1; i <= numScreens; i++) {
        if(i === 1 || i === numScreens || i === curScreen) {
            continue
        } else if(selectedScreens.length < 5 && (Math.abs(curScreen - i) === 1 || Math.abs(curScreen - i) === 2)){
          selectedScreens.push(i);
        }       
    }
    selectedScreens.sort((a,b)=> (a-b));
    let pagScreens: (string | number)[] = [];
    selectedScreens.forEach((item, i)=> {
        if (i === 0) {
            pagScreens.push(item);
        }else if(item - selectedScreens[i-1] !== 1){
            pagScreens.push("...");
            pagScreens.push(item);
        }else {
            pagScreens.push(item);
        }
    });

    return pagScreens;
}