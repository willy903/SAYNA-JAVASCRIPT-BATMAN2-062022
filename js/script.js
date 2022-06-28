const ratio = .1
const threshold = .1
const options = {
    root: null,
    rootMargin: '0px',
    threshold
}
let i = 0;
const handleIntersect = function(entries, observer) {
    entries.forEach(function(entry) {
        if (entry.intersectionRatio > ratio) {
            entry.target.classList.add('caherNON')
            entry.target.classList.remove('caherOUI')
                // observer.unobserve(entry.target)
            i = i + 1;
        } else {
            entry.target.classList.remove('caherNON')
            entry.target.classList.add('caherOUI')
            console.log("invisible")
        }
    })
}
const observer = new IntersectionObserver(handleIntersect, options)
document.querySelectorAll('.caherOUI').forEach(function(r) {
    observer.observe(r)
})