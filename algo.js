function triCroissant(liste) {
    const n = liste.length
    for (let i=0; i<n-1; i++) {
        let min = i;
        for (let j=i+1; j<n; j++){
            if (liste[j] < liste[min]){
                min = j;
            }
        }
        [liste[i], liste[min]] = [liste[min], liste[i]];
    }
    return liste;
}
    
const maliste=[5,1,9,2,6,7,4,8,0,3];
const croissant = triCroissant([...maliste]);
    
console.log("Ordre croissant: ",croissant);



function triDecroissant(liste) {
    const n = liste.length
    for (let i=0; i<n-1; i++) {
        let max = i;
        for (let j=i+1; j<n; j++){
            if (liste[j] > liste[max]){
                max = j;
            }
        }
        [liste[i], liste[max]] = [liste[max], liste[i]];
    }
    return liste;
}
    
const listee=[5,1,9,2,6,7,4,8,0,3];
const decroissant = triDecroissant([...maliste]);
    
console.log("Ordre décroissant: ",decroissant);