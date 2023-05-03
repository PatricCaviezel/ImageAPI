bar <- function(x, y, title, xtitle, ytitle, color) {
    barplot(x, main = title, xlab = xtitle, ylab = ytitle, col = color)
}

line <- function(x, y, color, title, xtitle, ytitle) {
    plot(x, y, col = color, type = "l", main = title, xlab = xtitle, ylab = ytitle)
}

piechart <- function(slices, title, color) {
    pie(slices, col = color, main = title)
}
