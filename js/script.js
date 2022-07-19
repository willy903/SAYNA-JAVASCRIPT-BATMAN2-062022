const ratio = .1
const threshold = .1
const options = {
    root: null,
    rootMargin: '0px',
    threshold
}
const handleIntersect = function(entries, observer) {
    entries.forEach(function(entry) {
        if (entry.intersectionRatio > ratio) {
            entry.target.classList.add('caherNON')
            entry.target.classList.remove('caherOUI')
                // observer.unobserve(entry.target)
        } else {
            entry.target.classList.remove('caherNON')
            entry.target.classList.add('caherOUI')
        }
    })
}
const observer = new IntersectionObserver(handleIntersect, options)
document.querySelectorAll('.caherOUI').forEach(function(r) {
    observer.observe(r)
})

document.getElementById("home_body").addEventListener("click", function() {
    let animelogos = document.querySelectorAll('.allLogos');
    for (let i = 0; i < animelogos.length; i++) {
        animelogos[i].style.animation = "changeOpacity 800ms";
    }
})