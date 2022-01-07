```
function calculaNota(ex, p1, p2) {
    let nota = (((ex) + (2*p1) + (3*p2)) / 6)
    if (nota >= 9) {
        return "A"
    } else if ((9 > nota) && (nota >= 7.5)) {
        return "B"
    } else if ((7.5 > nota) && (nota >= 6)) {
        return "C"
    } else if (nota < 6) {
        return "D"
    }
}
```