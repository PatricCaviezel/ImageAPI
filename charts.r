barchart <- function(x, title, xtitle, ytitle, color) {
    png("Image.png")
    barplot(x, main = title, xlab = xtitle, ylab = ytitle, col = color)
    dev.off()
}

linechart <- function(x, y, color, title, xtitle, ytitle) {
    plot(x, y, col = color, type = "l", main = title, xlab = xtitle, ylab = ytitle)
}

piechart <- function(slices, title, color) {
    pie(slices, col = color, main = title)
}
